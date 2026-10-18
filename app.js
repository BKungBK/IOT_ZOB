(function () {
  "use strict";

  const STORAGE_KEY = "ruts_05413303_iot_exam_v1";

  const CATEGORY_LABELS = {
    concept: "ทฤษฎี/สถาปัตยกรรม",
    hardware: "ต่อวงจร/ขา Pin",
    code: "วิเคราะห์โค้ด C/INO",
    applied: "ประยุกต์/แก้โจทย์ Lab"
  };

  const LETTERS = ["A", "B", "C", "D", "E"];

  // Combine all 180 questions and deterministically distribute correct choice (A, B, C, D)
  const rawQuestions = [].concat(
    window.IOT_QUESTIONS_CH1_CH3 || [],
    window.IOT_QUESTIONS_CH4_CH6 || [],
    window.IOT_QUESTIONS_CH7_CH9 || []
  );

  function hashString(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function permuteChoicesDeterministic(q, index) {
    const choicesCopy = q.choices.slice();
    const correctText = choicesCopy[q.answer];
    const distractors = choicesCopy.filter(function (_, idx) {
      return idx !== q.answer;
    });

    // Deterministic rotation of distractors
    const seed = hashString(q.id);
    if (seed % 2 === 1 && distractors.length === 3) {
      const tmp = distractors[0];
      distractors[0] = distractors[1];
      distractors[1] = tmp;
    }

    // Target answer slot (0, 1, 2, 3) balanced across questions
    const targetSlot = (index + (seed % 4)) % 4;
    const finalChoices = [];
    let dIdx = 0;
    for (let s = 0; s < 4; s++) {
      if (s === targetSlot) {
        finalChoices.push(correctText);
      } else {
        finalChoices.push(distractors[dIdx++]);
      }
    }

    return Object.assign({}, q, {
      choices: finalChoices,
      answer: targetSlot
    });
  }

  const ALL_QUESTIONS = rawQuestions.map(permuteChoicesDeterministic);
  const CHAPTERS = window.IOT_CHAPTERS || [];

  // Persistent State
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          theme: parsed.theme || "light",
          answeredMap: parsed.answeredMap || {}, // id -> { selected: number, correct: boolean }
          mistakes: parsed.mistakes || [],       // array of question ids
          bookmarks: parsed.bookmarks || []      // array of question ids
        };
      }
    } catch (e) {
      // ignore storage errors
    }
    return {
      theme: "light",
      answeredMap: {},
      mistakes: [],
      bookmarks: []
    };
  }

  const state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore storage errors
    }
  }

  // Runtime UI State
  const ui = {
    activeView: "practice",
    selectedChapter: "all", // "all" or 1..9 or "custom-mistakes" / "custom-bookmarks"
    selectedCategory: "all",
    selectedDifficulty: "all",
    searchQuery: "",
    shuffleQuestions: false,
    autoAdvance: true,
    autoAdvanceDelay: 2000, // ms before auto-advancing in practice mode
    autoAdvanceTween: null,
    autoAdvanceTimerId: null,
    isTransitioning: false,
    examAutoTimerId: null,
    filteredQuestions: [],
    currentIndex: 0,
    sessionAnswers: {}, // id -> chosenIndex (0..3) in current session
    reviewType: "mistakes",
    activeCheatChapter: 1,
    exam: {
      active: false,
      questions: [],
      answers: {}, // index -> 0..3
      currentIndex: 0,
      remainingSeconds: 5400,
      timerId: null,
      studentId: "078"
    }
  };

  // ==========================================
  // HYPERFRAMES ANIMATION ENGINE (GSAP + SPRING)
  // ==========================================
  function hasGsap() {
    return typeof window.gsap !== "undefined";
  }

  // Closed-form damped harmonic oscillator per hyperframes-animation/adapters/gsap-easing-and-stagger.md
  function springEase(opts) {
    const response = (opts && opts.response) || 0.38;
    const damping = (opts && opts.dampingFraction) || 0.82;
    const omega = (2 * Math.PI) / response;
    return function (t) {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      const decay = Math.exp(-damping * omega * t);
      if (damping < 1) {
        const omegaD = omega * Math.sqrt(1 - damping * damping);
        return (
          1 -
          decay *
            (Math.cos(omegaD * t) +
              ((damping * omega) / omegaD) * Math.sin(omegaD * t))
        );
      }
      return 1 - decay * (1 + omega * t);
    };
  }

  const choiceSpring = springEase({ response: 0.36, dampingFraction: 0.78 });

  function animateStageEntrance() {
    if (!hasGsap()) return;
    const card = document.getElementById("practice-question-card");
    if (!card) return;
    const expBox = document.getElementById("practice-explanation-box");
    if (expBox) {
      window.gsap.set(expBox, { clearProps: "transform,opacity,filter" });
    }
    const targets = card.querySelectorAll(
      ".question-prompt-zone, #practice-code-wrap:not(.is-hidden), .choice-btn"
    );
    window.gsap.killTweensOf(targets);
    window.gsap.fromTo(
      targets,
      { y: 12, opacity: 0, scale: 0.99 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.36,
        stagger: 0.042,
        ease: "power3.out",
        clearProps: "transform,opacity,filter"
      }
    );
  }

  function animateHomeEntrance() {
    if (!hasGsap()) return;
    const targets = document.querySelectorAll(
      "#view-home .home-card, #view-home .chapter-card-btn"
    );
    if (!targets.length) return;
    window.gsap.killTweensOf(targets);
    window.gsap.fromTo(
      targets,
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.34,
        stagger: 0.025,
        ease: "power3.out",
        clearProps: "transform,opacity"
      }
    );
  }

  function cancelAutoAdvance() {
    if (ui.autoAdvanceTween) {
      ui.autoAdvanceTween.kill();
      ui.autoAdvanceTween = null;
    }
    if (ui.autoAdvanceTimerId) {
      clearTimeout(ui.autoAdvanceTimerId);
      ui.autoAdvanceTimerId = null;
    }
    const track = document.getElementById("auto-advance-track");
    const bar = document.getElementById("auto-advance-bar");
    const cancelBtn = document.getElementById("btn-cancel-auto");
    if (track) track.classList.add("is-hidden");
    if (bar) {
      if (hasGsap()) {
        window.gsap.set(bar, { scaleX: 0 });
      } else {
        bar.style.transform = "scaleX(0)";
      }
    }
    if (cancelBtn) cancelBtn.classList.add("is-hidden");
  }

  function syncAutoAdvanceUI() {
    const chk = document.getElementById("chk-auto-advance");
    const sel = document.getElementById("select-auto-delay");
    const pill = document.getElementById("auto-advance-status-pill");
    const badge = document.getElementById("auto-advance-pill-text");
    if (chk) chk.checked = ui.autoAdvance;
    if (sel) sel.value = String(ui.autoAdvanceDelay);
    const secText = (ui.autoAdvanceDelay / 1000).toFixed(1).replace(/\.0$/, "");
    if (pill) {
      pill.classList.toggle("is-auto-on", ui.autoAdvance);
      pill.classList.toggle("is-off", !ui.autoAdvance);
      pill.title = ui.autoAdvance
        ? "ไปข้อถัดไปอัตโนมัติ (" + secText + "s) — คลิกเพื่อเปิด/ปิด"
        : "ปิดการไปข้อถัดไปอัตโนมัติ — คลิกเพื่อเปิด";
    }
    if (badge) {
      badge.textContent = ui.autoAdvance ? secText + "s" : "OFF";
    }
  }

  function animateToPracticeQuestion(targetIndex, direction) {
    cancelAutoAdvance();
    const list = ui.filteredQuestions;
    if (!list.length || targetIndex < 0 || targetIndex >= list.length) return;
    if (targetIndex === ui.currentIndex && !ui.isTransitioning) {
      renderPracticeQuestion();
      animateStageEntrance();
      return;
    }

    const dir = direction || (targetIndex > ui.currentIndex ? 1 : -1);

    if (!hasGsap()) {
      ui.currentIndex = targetIndex;
      renderPracticeQuestion();
      return;
    }

    const card = document.getElementById("practice-question-card");
    if (!card) {
      ui.currentIndex = targetIndex;
      renderPracticeQuestion();
      return;
    }

    ui.isTransitioning = true;
    const outgoingTargets = card.querySelectorAll(
      ".question-prompt-zone, #practice-code-wrap:not(.is-hidden), .choice-btn, #practice-explanation-box:not(.is-hidden)"
    );

    window.gsap.killTweensOf(outgoingTargets);
    window.gsap.to(outgoingTargets, {
      x: -36 * dir,
      opacity: 0,
      scale: 0.99,
      duration: 0.18,
      ease: "power2.in",
      onComplete: function () {
        const expBox = document.getElementById("practice-explanation-box");
        if (expBox) {
          window.gsap.set(expBox, { clearProps: "transform,opacity,filter" });
        }
        ui.currentIndex = targetIndex;
        renderPracticeQuestion();

        const incomingTargets = card.querySelectorAll(
          ".question-prompt-zone, #practice-code-wrap:not(.is-hidden), .choice-btn"
        );
        window.gsap.fromTo(
          incomingTargets,
          {
            x: 36 * dir,
            y: 6,
            opacity: 0,
            scale: 0.99
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.34,
            stagger: 0.042,
            ease: "power3.out",
            clearProps: "transform,opacity,filter",
            onComplete: function () {
              ui.isTransitioning = false;
            }
          }
        );

        // Pulse current jump dot
        const currentDot = document.querySelector("#practice-jump-strip .jump-dot.is-current");
        if (currentDot) {
          window.gsap.fromTo(
            currentDot,
            { scale: 0.68 },
            { scale: 1, duration: 0.36, ease: choiceSpring, clearProps: "transform" }
          );
        }
      }
    });
  }

  // Apply theme
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    saveState();
  }

  // ==========================================
  // PRACTICE MODE LOGIC
  // ==========================================
  function filterPracticeQuestions() {
    cancelAutoAdvance();
    let list = ALL_QUESTIONS.filter(function (q) {
      if (ui.selectedChapter === "custom-mistakes") {
        if (state.mistakes.indexOf(q.id) === -1) return false;
      } else if (ui.selectedChapter === "custom-bookmarks") {
        if (state.bookmarks.indexOf(q.id) === -1) return false;
      } else if (ui.selectedChapter !== "all" && q.chapter !== Number(ui.selectedChapter)) {
        return false;
      }

      if (ui.selectedCategory !== "all" && q.category !== ui.selectedCategory) {
        return false;
      }
      if (ui.selectedDifficulty !== "all" && q.difficulty !== ui.selectedDifficulty) {
        return false;
      }
      if (ui.searchQuery.trim() !== "") {
        const kw = ui.searchQuery.trim().toLowerCase();
        const hay = (
          q.question +
          " " +
          (q.code || "") +
          " " +
          q.choices.join(" ") +
          " " +
          q.explanation
        ).toLowerCase();
        if (hay.indexOf(kw) === -1) return false;
      }
      return true;
    });

    if (ui.shuffleQuestions) {
      list = list.slice();
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }

    ui.filteredQuestions = list;
    if (ui.currentIndex >= list.length) {
      ui.currentIndex = 0;
    }
  }

  function renderChapterRail() {
    const container = document.getElementById("chapter-selector-list");
    if (!container) return;
    container.innerHTML = "";

    CHAPTERS.forEach(function (ch) {
      const chQuestions = ALL_QUESTIONS.filter(function (q) {
        return q.chapter === ch.id;
      });
      let answeredCount = 0;
      let correctCount = 0;
      chQuestions.forEach(function (q) {
        const rec = state.answeredMap[q.id];
        if (rec) {
          answeredCount++;
          if (rec.correct) correctCount++;
        }
      });

      const pct = chQuestions.length > 0 ? Math.round((correctCount / chQuestions.length) * 100) : 0;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chapter-card-btn" + (Number(ui.selectedChapter) === ch.id ? " is-selected" : "");
      btn.setAttribute("role", "listitem");
      btn.innerHTML =
        '<div class="chapter-card-top">' +
        '<span class="ch-code-badge">บทที่ ' + ch.id + '</span>' +
        '<span class="ch-stat-pill">ตอบถูก ' + correctCount + ' / ' + chQuestions.length + ' ข้อ</span>' +
        '</div>' +
        '<div class="chapter-card-title">' + escapeHtml(ch.title) + '</div>' +
        '<div class="chapter-card-sub">' + escapeHtml(ch.subtitle || "") + '</div>' +
        '<div class="chapter-card-progress-track">' +
        '<div class="chapter-card-progress-fill" style="width:' + pct + '%"></div>' +
        '</div>';

      btn.addEventListener("click", function () {
        ui.selectedChapter = ch.id;
        ui.currentIndex = 0;
        filterPracticeQuestions();
        if (ui.filteredQuestions.length === 0 && (ui.selectedCategory !== "all" || ui.selectedDifficulty !== "all")) {
          ui.selectedCategory = "all";
          ui.selectedDifficulty = "all";
          document.querySelectorAll("#category-filter-group .filter-pill").forEach(function (p) {
            p.classList.toggle("is-active", p.getAttribute("data-category") === "all");
          });
          document.querySelectorAll("#difficulty-filter-group .filter-pill").forEach(function (p) {
            p.classList.toggle("is-active", p.getAttribute("data-difficulty") === "all");
          });
          filterPracticeQuestions();
        }
        renderChapterRail();
        renderPracticeQuestion();
        switchView("practice");
      });

      container.appendChild(btn);
    });

    const selectAllBtn = document.getElementById("btn-select-all-chapters");
    if (selectAllBtn) {
      selectAllBtn.textContent =
        ui.selectedChapter === "all"
          ? "✓ กำลังเลือกครบทุกบท (180 ข้อ) — คลิกเพื่อเริ่มทำ"
          : "รวมข้อสอบทุกบท (180 ข้อ)";
    }
  }

  function updateMasteryStats() {
    const ids = Object.keys(state.answeredMap);
    const totalAnswered = ids.length;
    let totalCorrect = 0;
    ids.forEach(function (id) {
      if (state.answeredMap[id] && state.answeredMap[id].correct) {
        totalCorrect++;
      }
    });
    const pct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    setText("stat-answered", String(totalAnswered));
    setText("stat-correct", String(totalCorrect));
    setText("stat-accuracy", pct + "%");
    setText("stat-mistakes", String(state.mistakes.length));
    setText("nav-review-count", String(state.mistakes.length + state.bookmarks.length));
    setText("count-mistakes", String(state.mistakes.length));
    setText("count-bookmarks", String(state.bookmarks.length));
  }

  function renderJumpStrip() {
    const strip = document.getElementById("practice-jump-strip");
    if (!strip) return;
    strip.innerHTML = "";

    ui.filteredQuestions.forEach(function (q, idx) {
      const btn = document.createElement("button");
      btn.type = "button";
      let cls = "jump-dot";
      if (idx === ui.currentIndex) {
        cls += " is-current";
      } else if (ui.sessionAnswers[q.id] !== undefined) {
        cls += ui.sessionAnswers[q.id] === q.answer ? " is-correct" : " is-wrong";
      } else if (state.answeredMap[q.id]) {
        cls += state.answeredMap[q.id].correct ? " is-correct" : " is-wrong";
      }
      btn.className = cls;
      btn.textContent = String(idx + 1);
      btn.title = "ข้อที่ " + (idx + 1) + " (บทที่ " + q.chapter + ")";
      btn.addEventListener("click", function () {
        if (idx !== ui.currentIndex) {
          animateToPracticeQuestion(idx, idx > ui.currentIndex ? 1 : -1);
        }
      });
      strip.appendChild(btn);
    });

    // Auto-center active question dot horizontally inside the single-row ribbon
    const activeDot = strip.querySelector(".jump-dot.is-current");
    if (activeDot && strip.scrollWidth > strip.clientWidth) {
      const targetLeft =
        activeDot.offsetLeft - strip.clientWidth / 2 + activeDot.offsetWidth / 2;
      strip.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth"
      });
    }
  }

  function renderPracticeQuestion() {
    renderJumpStrip();
    updateMasteryStats();
    syncAutoAdvanceUI();

    const list = ui.filteredQuestions;
    const stemEl = document.getElementById("practice-question-text");
    const codeWrap = document.getElementById("practice-code-wrap");
    const codeContent = document.getElementById("practice-code-content");
    const choicesEl = document.getElementById("practice-choices-list");
    const expBox = document.getElementById("practice-explanation-box");
    const prevBtn = document.getElementById("btn-prev-question");
    const nextBtn = document.getElementById("btn-next-question");

    // Update active deck badge on the Focus Quiz topbar
    let deckLabel = "ทุกบท";
    if (ui.selectedChapter === "custom-mistakes") {
      deckLabel = "ทบทวน";
    } else if (ui.selectedChapter === "custom-bookmarks") {
      deckLabel = "ปักหมุด";
    } else if (ui.selectedChapter !== "all") {
      deckLabel = "บทที่ " + ui.selectedChapter;
    }
    setText("active-deck-label", deckLabel);
    setText("nav-total-count", String(list.length));

    if (hasGsap() && expBox) {
      window.gsap.set(expBox, { clearProps: "transform,opacity,filter" });
    }

    if (!list.length) {
      setText("practice-counter", "0 / 0 ข้อ");
      stemEl.textContent = "ไม่พบข้อสอบที่ตรงกับตัวกรองหรือคำค้นหานี้ คลิกปุ่ม 'หน้าเลือกบท (Home)' ด้านบนซ้ายเพื่อเลือกบทเรียนใหม่ครับ";
      codeWrap.classList.add("is-hidden");
      choicesEl.innerHTML = "";
      expBox.classList.add("is-hidden");
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    const q = list[ui.currentIndex];
    setText("practice-counter", "ข้อที่ " + (ui.currentIndex + 1) + " / " + list.length);
    setText("practice-chapter-tag", "บทที่ " + q.chapter);
    setText("practice-category-tag", CATEGORY_LABELS[q.category] || q.category);
    setText("practice-difficulty-tag", q.difficulty);

    // Bookmark status
    const bmBtn = document.getElementById("btn-bookmark-current");
    const bmLabel = document.getElementById("bookmark-btn-label");
    const isBookmarked = state.bookmarks.indexOf(q.id) !== -1;
    if (bmBtn && bmLabel) {
      bmBtn.classList.toggle("is-bookmarked", isBookmarked);
      bmLabel.textContent = isBookmarked ? "ปักหมุดแล้ว" : "ปักหมุด";
    }

    stemEl.textContent = q.question;

    if (q.code) {
      codeWrap.classList.remove("is-hidden");
      codeContent.textContent = q.code;
      setText("practice-sketch-name", "lab_ch0" + q.chapter + ".ino · Arduino IDE");
    } else {
      codeWrap.classList.add("is-hidden");
      codeContent.textContent = "";
    }

    const chosen = ui.sessionAnswers[q.id];
    const hasAnswered = chosen !== undefined;

    choicesEl.innerHTML = "";
    q.choices.forEach(function (choiceText, cIdx) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-choice-idx", String(cIdx));
      let cls = "choice-btn";
      let statusBadgeHtml = "";

      if (hasAnswered) {
        if (cIdx === q.answer) {
          cls += " is-correct-answer";
          statusBadgeHtml = '<span class="choice-status-tag" style="color:var(--status-high)">✓ คำตอบที่ถูกต้อง</span>';
        } else if (cIdx === chosen && chosen !== q.answer) {
          cls += " is-wrong-selection";
          statusBadgeHtml = '<span class="choice-status-tag" style="color:var(--status-low)">✗ ตัวเลือกที่คุณเลือก</span>';
        }
      }

      btn.className = cls;
      btn.innerHTML =
        '<span class="choice-bubble">' + LETTERS[cIdx] + '</span>' +
        '<span class="choice-text">' + escapeHtml(choiceText) + '</span>' +
        statusBadgeHtml;

      btn.addEventListener("click", function () {
        handlePracticeAnswer(q, cIdx);
      });

      choicesEl.appendChild(btn);
    });

    if (hasAnswered) {
      const isRight = chosen === q.answer;
      expBox.classList.remove("is-hidden");
      expBox.classList.toggle("is-wrong-verdict", !isRight);

      const verdictEl = document.getElementById("practice-verdict-title");
      if (verdictEl) {
        const iconSvg = isRight
          ? '<svg class="verdict-icon-svg" viewBox="0 0 24 24" fill="none" stroke="var(--status-high)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path class="verdict-stroke-path" d="M20 6L9 17l-5-5"/></svg>'
          : '<svg class="verdict-icon-svg" viewBox="0 0 24 24" fill="none" stroke="var(--status-low)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path class="verdict-stroke-path" d="M18 6L6 18M6 6l12 12"/></svg>';
        verdictEl.innerHTML =
          iconSvg +
          "<span>" +
          (isRight
            ? "ถูกต้อง! (ข้อ " + LETTERS[q.answer] + ")"
            : "ยังไม่ถูกต้อง — คำตอบที่ถูกคือข้อ " + LETTERS[q.answer]) +
          "</span>";
      }
      setText("practice-source-badge", q.source || ("สไลด์บทที่ " + q.chapter));
      setText("practice-explanation-text", q.explanation);
    } else {
      expBox.classList.add("is-hidden");
    }

    prevBtn.disabled = ui.currentIndex === 0;
    nextBtn.disabled = ui.currentIndex >= list.length - 1;
  }

  function handlePracticeAnswer(q, chosenIdx) {
    cancelAutoAdvance();
    ui.sessionAnswers[q.id] = chosenIdx;
    const isCorrect = chosenIdx === q.answer;

    // Record first-time or latest mastery
    if (!state.answeredMap[q.id]) {
      state.answeredMap[q.id] = { selected: chosenIdx, correct: isCorrect };
    } else {
      state.answeredMap[q.id].selected = chosenIdx;
      state.answeredMap[q.id].correct = isCorrect;
    }

    if (!isCorrect) {
      if (state.mistakes.indexOf(q.id) === -1) {
        state.mistakes.push(q.id);
      }
    } else {
      // Remove from mistake deck if answered correctly
      const mIdx = state.mistakes.indexOf(q.id);
      if (mIdx !== -1) {
        state.mistakes.splice(mIdx, 1);
      }
    }

    saveState();
    renderChapterRail();
    renderPracticeQuestion();

    // Choreography on Answer Selection (HyperFrames Animation)
    if (hasGsap()) {
      const selectedBtn = document.querySelector(
        '#practice-choices-list .choice-btn[data-choice-idx="' + chosenIdx + '"]'
      );
      const correctBtn = document.querySelector(
        '#practice-choices-list .choice-btn[data-choice-idx="' + q.answer + '"]'
      );

      if (selectedBtn) {
        const bubble = selectedBtn.querySelector(".choice-bubble");
        if (isCorrect) {
          window.gsap.fromTo(
            selectedBtn,
            { scale: 0.97 },
            { scale: 1, duration: 0.36, ease: choiceSpring, clearProps: "transform" }
          );
        } else {
          // Subtle horizontal damped shake for wrong choice
          window.gsap.fromTo(
            selectedBtn,
            { x: -8 },
            { x: 0, duration: 0.38, ease: springEase({ response: 0.22, dampingFraction: 0.45 }), clearProps: "transform" }
          );
        }
        if (bubble) {
          window.gsap.fromTo(
            bubble,
            { scale: 0.58 },
            { scale: 1, duration: 0.42, ease: choiceSpring, clearProps: "transform" }
          );
        }
      }

      if (!isCorrect && correctBtn) {
        window.gsap.fromTo(
          correctBtn,
          { scale: 0.97, opacity: 0.72 },
          { scale: 1, opacity: 1, duration: 0.38, ease: choiceSpring, clearProps: "transform,opacity" }
        );
      }

      // Draw SVG verdict icon path
      const strokePath = document.querySelector("#practice-verdict-title .verdict-stroke-path");
      if (strokePath && typeof strokePath.getTotalLength === "function") {
        const len = strokePath.getTotalLength() || 36;
        window.gsap.fromTo(
          strokePath,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 0.35, ease: "power2.out" }
        );
      }

      // Reveal Explanation Box smoothly with zero blur
      const expBox = document.getElementById("practice-explanation-box");
      if (expBox) {
        window.gsap.killTweensOf(expBox);
        window.gsap.set(expBox, { clearProps: "transform,opacity,filter" });
        window.gsap.fromTo(
          expBox,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.28, ease: "power3.out", clearProps: "transform,opacity,filter" }
        );
      }
    }

    // Trigger Auto-Advance to Next Question if enabled and not on the last question
    const canAdvance = ui.autoAdvance && ui.currentIndex < ui.filteredQuestions.length - 1;
    if (canAdvance) {
      const track = document.getElementById("auto-advance-track");
      const bar = document.getElementById("auto-advance-bar");
      const cancelBtn = document.getElementById("btn-cancel-auto");
      const durationSec = ui.autoAdvanceDelay / 1000;

      if (track) track.classList.remove("is-hidden");
      if (cancelBtn) {
        cancelBtn.classList.remove("is-hidden");
        cancelBtn.textContent = "⏸ หยุดอ่านเฉลยก่อน (" + durationSec.toFixed(1) + "s)";
      }

      if (hasGsap() && bar) {
        ui.autoAdvanceTween = window.gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: durationSec,
            ease: "none",
            onUpdate: function () {
              if (cancelBtn && ui.autoAdvanceTween) {
                const rem = Math.max(0, durationSec * (1 - ui.autoAdvanceTween.progress()));
                cancelBtn.textContent = "⏸ หยุดอ่านเฉลยก่อน (" + rem.toFixed(1) + "s)";
              }
            },
            onComplete: function () {
              ui.autoAdvanceTween = null;
              animateToPracticeQuestion(ui.currentIndex + 1, 1);
            }
          }
        );
      } else {
        ui.autoAdvanceTimerId = setTimeout(function () {
          animateToPracticeQuestion(ui.currentIndex + 1, 1);
        }, ui.autoAdvanceDelay);
      }
    }
  }

  // ==========================================
  // 60-QUESTION FINAL EXAM SIMULATOR (2B OMR)
  // ==========================================
  const EXAM_WEIGHTS = {
    1: 6,
    2: 8,
    3: 5,
    4: 8,
    5: 7,
    6: 8,
    7: 6,
    8: 8,
    9: 4
  };

  function generateExam60Questions() {
    const examPool = [];
    Object.keys(EXAM_WEIGHTS).forEach(function (chStr) {
      const chId = Number(chStr);
      const count = EXAM_WEIGHTS[chId];
      const chItems = ALL_QUESTIONS.filter(function (q) {
        return q.chapter === chId;
      }).slice();

      // Shuffle chapter pool
      for (let i = chItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = chItems[i];
        chItems[i] = chItems[j];
        chItems[j] = tmp;
      }

      examPool.push.apply(examPool, chItems.slice(0, count));
    });

    return examPool;
  }

  function startExamSimulation() {
    const sidInput = document.getElementById("exam-student-id");
    const durSelect = document.getElementById("exam-duration-select");
    const sid = ((sidInput && sidInput.value) || "078").replace(/[^0-9]/g, "").padStart(3, "0").slice(-3);
    const minutes = Number((durSelect && durSelect.value) || 90);

    ui.exam.active = true;
    ui.exam.studentId = sid;
    ui.exam.questions = generateExam60Questions();
    ui.exam.answers = {};
    ui.exam.currentIndex = 0;
    ui.exam.remainingSeconds = minutes * 60;

    setText("omr-student-id-display", sid);
    document.getElementById("exam-setup-screen").classList.add("is-hidden");
    document.getElementById("exam-result-screen").classList.add("is-hidden");
    document.getElementById("exam-active-screen").classList.remove("is-hidden");

    if (ui.exam.timerId) clearInterval(ui.exam.timerId);
    updateExamTimerDisplay();
    ui.exam.timerId = setInterval(function () {
      ui.exam.remainingSeconds--;
      updateExamTimerDisplay();
      if (ui.exam.remainingSeconds <= 0) {
        clearInterval(ui.exam.timerId);
        submitExamSimulation();
      }
    }, 1000);

    renderExamQuestion();
    renderOmrSheet();
  }

  function updateExamTimerDisplay() {
    const sec = Math.max(0, ui.exam.remainingSeconds);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    setText(
      "exam-timer-display",
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0")
    );
  }

  function renderOmrSheet() {
    const container = document.getElementById("omr-bubbles-container");
    if (!container) return;
    container.innerHTML = "";

    ui.exam.questions.forEach(function (_, qIdx) {
      const row = document.createElement("div");
      row.className = "omr-row" + (qIdx === ui.exam.currentIndex ? " is-active-row" : "");

      const numSpan = document.createElement("span");
      numSpan.className = "omr-row-num";
      numSpan.textContent = String(qIdx + 1).padStart(2, "0") + ".";
      numSpan.addEventListener("click", function () {
        ui.exam.currentIndex = qIdx;
        renderExamQuestion();
        renderOmrSheet();
      });
      row.appendChild(numSpan);

      // 5 bubbles: A, B, C, D, and E (trap column from real RUTS OMR sheet!)
      for (let b = 0; b < 5; b++) {
        const bubble = document.createElement("button");
        bubble.type = "button";
        const isShaded = ui.exam.answers[qIdx] === b;
        bubble.className =
          "omr-bubble-btn" +
          (isShaded ? " is-shaded" : "") +
          (b === 4 ? " is-trap-e" : "");
        bubble.textContent = LETTERS[b];
        bubble.title =
          b === 4
            ? "ช่อง E บนกระดาษคำตอบ (ห้ามฝน! ข้อสอบจริงมีเฉพาะ A-D)"
            : "ข้อ " + (qIdx + 1) + " ตัวเลือก " + LETTERS[b];

        bubble.addEventListener("click", function () {
          ui.exam.currentIndex = qIdx;
          if (b === 4) {
            const warnEl = document.getElementById("exam-omr-e-warning");
            if (warnEl) warnEl.classList.remove("is-hidden");
            renderExamQuestion();
            renderOmrSheet();
            return;
          }
          selectExamAnswer(qIdx, b);
        });
        row.appendChild(bubble);
      }

      container.appendChild(row);
    });

    const activeRow = container.querySelector(".omr-row.is-active-row");
    if (activeRow && container.scrollHeight > container.clientHeight) {
      const targetTop =
        activeRow.offsetTop - container.clientHeight / 2 + activeRow.offsetHeight / 2;
      container.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });
    }
  }

  function animateToExamQuestion(targetIndex, direction) {
    if (ui.examAutoTimerId) {
      clearTimeout(ui.examAutoTimerId);
      ui.examAutoTimerId = null;
    }
    const list = ui.exam.questions;
    if (!list.length || targetIndex < 0 || targetIndex >= list.length) return;
    if (targetIndex === ui.exam.currentIndex) {
      renderExamQuestion();
      renderOmrSheet();
      return;
    }

    const dir = direction || (targetIndex > ui.exam.currentIndex ? 1 : -1);
    const examSheet = document.querySelector("#exam-active-screen .exam-sheet");

    if (!hasGsap() || !examSheet) {
      ui.exam.currentIndex = targetIndex;
      renderExamQuestion();
      renderOmrSheet();
      return;
    }

    const outgoing = examSheet.querySelectorAll(
      ".question-stem, #exam-code-wrap:not(.is-hidden), .choice-btn"
    );
    window.gsap.killTweensOf(outgoing);
    window.gsap.to(outgoing, {
      x: -32 * dir,
      opacity: 0,
      filter: "blur(4px)",
      duration: 0.18,
      ease: "power2.in",
      onComplete: function () {
        ui.exam.currentIndex = targetIndex;
        renderExamQuestion();
        renderOmrSheet();

        const incoming = examSheet.querySelectorAll(
          ".question-stem, #exam-code-wrap:not(.is-hidden), .choice-btn"
        );
        window.gsap.fromTo(
          incoming,
          { x: 32 * dir, y: 5, opacity: 0, filter: "blur(4px)" },
          {
            x: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.32,
            stagger: 0.038,
            ease: "power3.out",
            clearProps: "transform,opacity,filter"
          }
        );
      }
    });
  }

  function selectExamAnswer(qIdx, choiceIdx, fromQuestionCard) {
    if (ui.examAutoTimerId) {
      clearTimeout(ui.examAutoTimerId);
      ui.examAutoTimerId = null;
    }
    const warnEl = document.getElementById("exam-omr-e-warning");
    if (warnEl) warnEl.classList.add("is-hidden");
    ui.exam.answers[qIdx] = choiceIdx;
    renderExamQuestion();
    renderOmrSheet();

    if (hasGsap()) {
      const selectedCardBtn = document.querySelector(
        '#exam-choices-list .choice-btn[data-choice-idx="' + choiceIdx + '"]'
      );
      if (selectedCardBtn) {
        const bubble = selectedCardBtn.querySelector(".choice-bubble");
        window.gsap.fromTo(
          selectedCardBtn,
          { scale: 0.97 },
          { scale: 1, duration: 0.34, ease: choiceSpring, clearProps: "transform" }
        );
        if (bubble) {
          window.gsap.fromTo(
            bubble,
            { scale: 0.65 },
            { scale: 1, duration: 0.36, ease: choiceSpring, clearProps: "transform" }
          );
        }
      }
    }

    if (fromQuestionCard && ui.autoAdvance && qIdx < ui.exam.questions.length - 1) {
      ui.examAutoTimerId = setTimeout(function () {
        ui.examAutoTimerId = null;
        animateToExamQuestion(qIdx + 1, 1);
      }, 420);
    }
  }

  function renderExamQuestion() {
    const q = ui.exam.questions[ui.exam.currentIndex];
    if (!q) return;

    setText("exam-q-counter", "ข้อที่ " + (ui.exam.currentIndex + 1) + " / " + ui.exam.questions.length);
    setText("exam-q-chapter", "บทที่ " + q.chapter);
    setText("exam-question-text", q.question);

    const codeWrap = document.getElementById("exam-code-wrap");
    const codeContent = document.getElementById("exam-code-content");
    if (q.code) {
      codeWrap.classList.remove("is-hidden");
      codeContent.textContent = q.code;
    } else {
      codeWrap.classList.add("is-hidden");
      codeContent.textContent = "";
    }

    const choicesEl = document.getElementById("exam-choices-list");
    choicesEl.innerHTML = "";
    const selectedChoice = ui.exam.answers[ui.exam.currentIndex];

    q.choices.forEach(function (choiceText, cIdx) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-choice-idx", String(cIdx));
      btn.className = "choice-btn" + (selectedChoice === cIdx ? " is-selected-omr" : "");
      btn.innerHTML =
        '<span class="choice-bubble">' + LETTERS[cIdx] + '</span>' +
        '<span class="choice-text">' + escapeHtml(choiceText) + '</span>' +
        (selectedChoice === cIdx ? '<span class="choice-status-tag">ฝน 2B แล้ว</span>' : "");

      btn.addEventListener("click", function () {
        selectExamAnswer(ui.exam.currentIndex, cIdx, true);
      });
      choicesEl.appendChild(btn);
    });

    const answeredCount = Object.keys(ui.exam.answers).length;
    setText("exam-answered-tally", "ฝนคำตอบแล้ว " + answeredCount + " / " + ui.exam.questions.length + " ข้อ");

    document.getElementById("btn-exam-prev").disabled = ui.exam.currentIndex === 0;
    document.getElementById("btn-exam-next").disabled = ui.exam.currentIndex >= ui.exam.questions.length - 1;
  }

  function submitExamSimulation() {
    if (ui.exam.timerId) {
      clearInterval(ui.exam.timerId);
      ui.exam.timerId = null;
    }
    ui.exam.active = false;

    document.getElementById("exam-active-screen").classList.add("is-hidden");
    const resultScreen = document.getElementById("exam-result-screen");
    resultScreen.classList.remove("is-hidden");

    let score = 0;
    const byChapter = {};
    CHAPTERS.forEach(function (ch) {
      byChapter[ch.id] = { total: 0, correct: 0, title: ch.title };
    });

    ui.exam.questions.forEach(function (q, idx) {
      const chosen = ui.exam.answers[idx];
      const isRight = chosen === q.answer;
      byChapter[q.chapter].total++;
      if (isRight) {
        score++;
        byChapter[q.chapter].correct++;
      } else {
        if (state.mistakes.indexOf(q.id) === -1) {
          state.mistakes.push(q.id);
        }
      }
      state.answeredMap[q.id] = {
        selected: chosen !== undefined ? chosen : -1,
        correct: isRight
      };
    });

    saveState();
    updateMasteryStats();
    renderChapterRail();

    const net30 = ((score / 60) * 30).toFixed(1);
    setText(
      "report-headline",
      "คะแนนสอบปลายภาคของคุณ: " + score + " / 60 คะแนน (คิดเป็น " + net30 + " / 30% คะแนนปลายภาค)"
    );
    setText(
      "report-subline",
      "รหัสนักศึกษา 3 ตัวท้าย: " +
        ui.exam.studentId +
        " · ข้อที่ตอบผิดถูกเพิ่มเข้าในแท็บ 'ทบทวนข้อที่ผิด & ปักหมุด' ให้โดยอัตโนมัติแล้ว"
    );

    const breakdownGrid = document.getElementById("report-chapter-breakdown");
    breakdownGrid.innerHTML = "";
    Object.keys(byChapter).forEach(function (chId) {
      const info = byChapter[chId];
      const pct = info.total > 0 ? Math.round((info.correct / info.total) * 100) : 0;
      const box = document.createElement("div");
      box.className = "breakdown-item";
      box.innerHTML =
        '<div class="breakdown-item-top">' +
        '<span>บทที่ ' + chId + '</span>' +
        '<span>' + info.correct + ' / ' + info.total + ' (' + pct + '%)</span>' +
        '</div>' +
        '<div style="font-size:0.8125rem;color:var(--ink-secondary)">' + escapeHtml(info.title) + '</div>';
      breakdownGrid.appendChild(box);
    });

    const reviewList = document.getElementById("report-questions-review");
    reviewList.innerHTML = "";
    ui.exam.questions.forEach(function (q, idx) {
      const chosen = ui.exam.answers[idx];
      const isRight = chosen === q.answer;
      const card = document.createElement("article");
      card.className = "review-item-sheet";
      card.innerHTML =
        '<div style="display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem">' +
        '<strong>ข้อที่ ' + (idx + 1) + ' (บทที่ ' + q.chapter + ')</strong>' +
        '<span style="font-weight:700;color:' + (isRight ? "var(--status-high)" : "var(--status-low)") + '">' +
        (isRight
          ? "✓ ตอบถูก (ข้อ " + LETTERS[q.answer] + ")"
          : "✗ ตอบผิด (คุณเลือก " + (chosen !== undefined ? LETTERS[chosen] : "ไม่ได้ฝน") + " · เฉลยคือ " + LETTERS[q.answer] + ")") +
        '</span>' +
        '</div>' +
        '<p style="margin:0 0 0.65rem 0;font-weight:600">' + escapeHtml(q.question) + '</p>' +
        (q.code ? '<div class="arduino-code-container"><pre class="arduino-code-pre"><code>' + escapeHtml(q.code) + '</code></pre></div>' : "") +
        '<div style="font-size:0.9rem;padding:0.75rem 1rem;border-radius:6px;background:var(--bg-canvas);border:1px solid var(--border-hairline)">' +
        '<strong>คำตอบที่ถูก: ข้อ ' + LETTERS[q.answer] + ' — ' + escapeHtml(q.choices[q.answer]) + '</strong>' +
        '<p style="margin:0.4rem 0 0 0;color:var(--ink-secondary)">' + escapeHtml(q.explanation) + ' <em>(' + escapeHtml(q.source) + ')</em></p>' +
        '</div>';
      reviewList.appendChild(card);
    });
  }

  // ==========================================
  // REVIEW VIEW (MISTAKES & BOOKMARKS)
  // ==========================================
  function renderReviewView() {
    updateMasteryStats();
    const container = document.getElementById("review-list-container");
    if (!container) return;
    container.innerHTML = "";

    const targetIds = ui.reviewType === "mistakes" ? state.mistakes : state.bookmarks;
    const questions = ALL_QUESTIONS.filter(function (q) {
      return targetIds.indexOf(q.id) !== -1;
    });

    if (!questions.length) {
      const emptyBox = document.createElement("div");
      emptyBox.className = "review-item-sheet";
      emptyBox.innerHTML =
        ui.reviewType === "mistakes"
          ? "<p style=\"margin:0\">ยังไม่มีข้อที่ตอบผิดสะสมในระบบ! คุณสามารถไปที่แท็บ <strong>ฝึกทำข้อสอบรายบท</strong> หรือ <strong>จำลองสอบจริง 60 ข้อ</strong> เมื่อมีข้อที่ตอบผิด ระบบจะดึงมาเก็บไว้ที่นี่ให้ทบทวนโดยอัตโนมัติครับ</p>"
          : "<p style=\"margin:0\">ยังไม่มีข้อที่ปักหมุดไว้ คุณสามารถกดปุ่ม <strong>ปักหมุด (หรือกดปุ่ม B บนคีย์บอร์ด)</strong> ขณะฝึกทำข้อสอบ เพื่อเก็บข้อสำคัญไว้ทบทวนก่อนเข้าห้องสอบได้ครับ</p>";
      container.appendChild(emptyBox);
      return;
    }

    const actionBanner = document.createElement("div");
    actionBanner.style.marginBottom = "0.5rem";
    const practiceSubsetBtn = document.createElement("button");
    practiceSubsetBtn.type = "button";
    practiceSubsetBtn.className = "cta-primary-btn";
    practiceSubsetBtn.textContent =
      ui.reviewType === "mistakes"
        ? "ฝึกทำซ้ำเฉพาะข้อที่เคยตอบผิดทั้งหมด (" + questions.length + " ข้อ)"
        : "ฝึกทำเฉพาะข้อที่ปักหมุดไว้ทั้งหมด (" + questions.length + " ข้อ)";
    practiceSubsetBtn.addEventListener("click", function () {
      ui.selectedChapter = ui.reviewType === "mistakes" ? "custom-mistakes" : "custom-bookmarks";
      ui.selectedCategory = "all";
      ui.selectedDifficulty = "all";
      ui.searchQuery = "";
      ui.currentIndex = 0;
      switchView("practice");
      filterPracticeQuestions();
      renderPracticeQuestion();
    });
    actionBanner.appendChild(practiceSubsetBtn);
    container.appendChild(actionBanner);

    questions.forEach(function (q, idx) {
      const card = document.createElement("article");
      card.className = "review-item-sheet";
      card.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.5rem;flex-wrap:wrap">' +
        '<span class="chapter-tag">บทที่ ' + q.chapter + ' · ' + escapeHtml(CATEGORY_LABELS[q.category] || q.category) + '</span>' +
        '<span class="source-badge">' + escapeHtml(q.source) + '</span>' +
        '</div>' +
        '<h3 style="margin:0 0 0.65rem 0;font-size:1.05rem">' + (idx + 1) + '. ' + escapeHtml(q.question) + '</h3>' +
        (q.code ? '<div class="arduino-code-container"><pre class="arduino-code-pre"><code>' + escapeHtml(q.code) + '</code></pre></div>' : "") +
        '<div style="padding:0.85rem 1rem;border-radius:7px;background:var(--status-high-bg);border:1px solid var(--status-high-border);margin-bottom:0.65rem">' +
        '<strong>เฉลยข้อ ' + LETTERS[q.answer] + ':</strong> ' + escapeHtml(q.choices[q.answer]) +
        '</div>' +
        '<p style="margin:0;font-size:0.925rem;color:var(--ink-secondary)"><strong>เหตุผลละเอียด:</strong> ' + escapeHtml(q.explanation) + '</p>';
      container.appendChild(card);
    });
  }

  // ==========================================
  // CHEAT-SHEET & INTERACTIVE RESISTOR TOOL
  // ==========================================
  function renderCheatSheetView() {
    const navEl = document.getElementById("cheatsheet-chapter-nav");
    const mainEl = document.getElementById("cheatsheet-main-content");
    if (!navEl || !mainEl) return;

    navEl.innerHTML = "";
    CHAPTERS.forEach(function (ch) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chapter-item-btn" + (ui.activeCheatChapter === ch.id ? " is-selected" : "");
      btn.innerHTML =
        '<span class="ch-code-badge">บทที่ ' + ch.id + '</span>' +
        '<span class="ch-name-text">' + escapeHtml(ch.title) + '</span>';
      btn.addEventListener("click", function () {
        ui.activeCheatChapter = ch.id;
        renderCheatSheetView();
      });
      navEl.appendChild(btn);
    });

    const activeCh =
      CHAPTERS.find(function (c) {
        return c.id === ui.activeCheatChapter;
      }) || CHAPTERS[0];

    let html =
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;margin-bottom:1rem">' +
      '<div>' +
      '<h2 class="section-heading">บทที่ ' + activeCh.id + ': ' + escapeHtml(activeCh.title) + '</h2>' +
      '<p class="lead-paragraph" style="margin-bottom:0.25rem">' + escapeHtml(activeCh.subtitle) + ' · <em>(' + escapeHtml(activeCh.slideRef) + ')</em></p>' +
      '</div>' +
      '<button type="button" class="cta-primary-btn" id="btn-jump-quiz-from-sheet">ฝึกทำข้อสอบบทที่ ' + activeCh.id + ' (20 ข้อ)</button>' +
      '</div>' +
      '<p style="margin:0 0 1.25rem 0">' + escapeHtml(activeCh.cheatSheet.summary) + '</p>' +
      '<h3 class="sub-heading">ประเด็นเก็งข้อสอบสำคัญประจำบทที่ ' + activeCh.id + '</h3>' +
      '<ul class="highlight-list">';

    activeCh.keyTopics.forEach(function (topic) {
      html += "<li>" + escapeHtml(topic) + "</li>";
    });
    html += "</ul>";

    activeCh.cheatSheet.tables.forEach(function (tb) {
      html +=
        '<h3 class="sub-heading">' + escapeHtml(tb.title) + '</h3>' +
        '<div style="overflow-x:auto;margin-bottom:1.25rem"><table class="data-table"><thead><tr>';
      tb.headers.forEach(function (h) {
        html += "<th>" + escapeHtml(h) + "</th>";
      });
      html += "</tr></thead><tbody>";
      tb.rows.forEach(function (row) {
        html += "<tr>";
        row.forEach(function (cell) {
          html += "<td>" + escapeHtml(cell).replace(/\n/g, "<br>") + "</td>";
        });
        html += "</tr>";
      });
      html += "</tbody></table></div>";
    });

    html += '<h3 class="sub-heading">จุดระวังโดนหลอกในห้องสอบ</h3><ul class="highlight-list">';
    activeCh.cheatSheet.highlights.forEach(function (hl) {
      html += "<li>" + escapeHtml(hl) + "</li>";
    });
    html += "</ul>";

    // Add interactive 4-Band Resistor Calculator on Chapter 4
    if (activeCh.id === 4) {
      html +=
        '<div class="interactive-widget-box">' +
        '<h3 class="sub-heading" style="margin-top:0">เครื่องคำนวณรหัสแถบสีตัวต้านทาน 4 แถบ (Interactive Resistor Calculator)</h3>' +
        '<p style="margin:0;font-size:0.9rem;color:var(--ink-secondary)">ทดลองเลือกแถบสีทั้ง 4 แถบตามตารางในสไลด์บทที่ 4 หน้า 5 เพื่อดูค่าความต้านทานทันที</p>' +
        '<div class="resistor-calc-grid">' +
        '<div><label class="field-label">แถบที่ 1 (หลักที่ 1)</label><select id="res-band-1" class="resistor-select">' +
        '<option value="0">ดำ (0)</option><option value="1">น้ำตาล (1)</option><option value="2" selected>แดง (2)</option><option value="3">ส้ม (3)</option><option value="4">เหลือง (4)</option><option value="5">เขียว (5)</option><option value="6">น้ำเงิน (6)</option><option value="7">ม่วง (7)</option><option value="8">เทา (8)</option><option value="9">ขาว (9)</option></select></div>' +
        '<div><label class="field-label">แถบที่ 2 (หลักที่ 2)</label><select id="res-band-2" class="resistor-select">' +
        '<option value="0">ดำ (0)</option><option value="1">น้ำตาล (1)</option><option value="2" selected>แดง (2)</option><option value="3">ส้ม (3)</option><option value="4">เหลือง (4)</option><option value="5">เขียว (5)</option><option value="6">น้ำเงิน (6)</option><option value="7">ม่วง (7)</option><option value="8">เทา (8)</option><option value="9">ขาว (9)</option></select></div>' +
        '<div><label class="field-label">แถบที่ 3 (ตัวคูณ)</label><select id="res-band-3" class="resistor-select">' +
        '<option value="1">ดำ (×1)</option><option value="10" selected>น้ำตาล (×10¹)</option><option value="100">แดง (×10²)</option><option value="1000">ส้ม (×10³)</option><option value="10000">เหลือง (×10⁴)</option><option value="100000">เขียว (×10⁵)</option><option value="1000000">น้ำเงิน (×10⁶)</option><option value="0.1">ทอง (×10⁻¹)</option><option value="0.01">เงิน (×10⁻²)</option></select></div>' +
        '<div><label class="field-label">แถบที่ 4 (ความคลาดเคลื่อน)</label><select id="res-band-4" class="resistor-select">' +
        '<option value="±1%">น้ำตาล (±1%)</option><option value="±2%">แดง (±2%)</option><option value="±5%" selected>ทอง (±5%)</option><option value="±10%">เงิน (±10%)</option><option value="±20%">ไม่มีแถบสี (±20%)</option></select></div>' +
        '</div>' +
        '<div class="resistor-result-banner" id="res-calc-output">ค่าความต้านทาน: 220 Ω ±5% (ตัวต้านทานต่อ LED มาตรฐานในแล็บ)</div>' +
        '</div>';
    }

    mainEl.innerHTML = html;

    const jumpQuizBtn = document.getElementById("btn-jump-quiz-from-sheet");
    if (jumpQuizBtn) {
      jumpQuizBtn.addEventListener("click", function () {
        ui.selectedChapter = activeCh.id;
        ui.currentIndex = 0;
        switchView("practice");
        filterPracticeQuestions();
        renderChapterRail();
        renderPracticeQuestion();
      });
    }

    if (activeCh.id === 4) {
      ["res-band-1", "res-band-2", "res-band-3", "res-band-4"].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener("change", updateResistorCalc);
      });
      updateResistorCalc();
    }
  }

  function updateResistorCalc() {
    const b1 = Number(document.getElementById("res-band-1").value);
    const b2 = Number(document.getElementById("res-band-2").value);
    const mult = Number(document.getElementById("res-band-3").value);
    const tol = document.getElementById("res-band-4").value;
    const rawOhms = (b1 * 10 + b2) * mult;

    let formatted = rawOhms + " Ω";
    if (rawOhms >= 1000000) {
      formatted = (rawOhms / 1000000) + " MΩ (" + rawOhms.toLocaleString() + " Ω)";
    } else if (rawOhms >= 1000) {
      formatted = (rawOhms / 1000) + " kΩ (" + rawOhms.toLocaleString() + " Ω)";
    }

    setText("res-calc-output", "ค่าความต้านทาน: " + formatted + " " + tol);
  }

  // ==========================================
  // VIEW SWITCHING & EVENT LISTENERS
  // ==========================================
  function switchView(viewName) {
    cancelAutoAdvance();
    ui.activeView = viewName;
    document.querySelectorAll(".mode-tab").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-view") === viewName);
    });
    document.querySelectorAll(".view-panel").forEach(function (panel) {
      panel.classList.toggle("is-active", panel.id === "view-" + viewName);
    });

    if (viewName === "home") {
      renderChapterRail();
      updateMasteryStats();
      animateHomeEntrance();
    } else if (viewName === "practice") {
      renderPracticeQuestion();
      animateStageEntrance();
    } else if (viewName === "review") {
      renderReviewView();
    } else if (viewName === "cheatsheet") {
      renderCheatSheetView();
    }

    if (hasGsap()) {
      const activePanel = document.getElementById("view-" + viewName);
      if (activePanel && viewName !== "practice" && viewName !== "home") {
        window.gsap.fromTo(
          activePanel,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.32, ease: "power3.out", clearProps: "transform,opacity" }
        );
      }
    }
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initEvents() {
    // Mode Navigation Tabs
    document.querySelectorAll(".mode-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchView(btn.getAttribute("data-view"));
      });
    });

    // Back to Home Button inside Focus Quiz Screen
    const backHomeBtn = document.getElementById("btn-back-to-home");
    if (backHomeBtn) {
      backHomeBtn.addEventListener("click", function () {
        switchView("home");
      });
    }

    // Enter Quiz Now Button inside Home Screen
    const enterQuizBtn = document.getElementById("btn-enter-quiz-now");
    if (enterQuizBtn) {
      enterQuizBtn.addEventListener("click", function () {
        switchView("practice");
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById("btn-theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    }

    // Select All Chapters
    const allChaptersBtn = document.getElementById("btn-select-all-chapters");
    if (allChaptersBtn) {
      allChaptersBtn.addEventListener("click", function () {
        ui.selectedChapter = "all";
        ui.currentIndex = 0;
        filterPracticeQuestions();
        renderChapterRail();
        renderPracticeQuestion();
        switchView("practice");
      });
    }

    // Category Filter Pills
    document.querySelectorAll("#category-filter-group .filter-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        document.querySelectorAll("#category-filter-group .filter-pill").forEach(function (p) {
          p.classList.remove("is-active");
        });
        pill.classList.add("is-active");
        ui.selectedCategory = pill.getAttribute("data-category");
        ui.currentIndex = 0;
        filterPracticeQuestions();
        renderPracticeQuestion();
      });
    });

    // Difficulty Filter Pills
    document.querySelectorAll("#difficulty-filter-group .filter-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        document.querySelectorAll("#difficulty-filter-group .filter-pill").forEach(function (p) {
          p.classList.remove("is-active");
        });
        pill.classList.add("is-active");
        ui.selectedDifficulty = pill.getAttribute("data-difficulty");
        ui.currentIndex = 0;
        filterPracticeQuestions();
        renderPracticeQuestion();
      });
    });

    // Search Input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        ui.searchQuery = searchInput.value;
        ui.currentIndex = 0;
        filterPracticeQuestions();
        renderPracticeQuestion();
      });
    }

    // Shuffle Checkbox
    const shuffleChk = document.getElementById("chk-shuffle-questions");
    if (shuffleChk) {
      shuffleChk.addEventListener("change", function () {
        ui.shuffleQuestions = shuffleChk.checked;
        ui.currentIndex = 0;
        filterPracticeQuestions();
        renderPracticeQuestion();
      });
    }

    // Auto-Advance Controls
    const autoChk = document.getElementById("chk-auto-advance");
    if (autoChk) {
      autoChk.addEventListener("change", function () {
        ui.autoAdvance = autoChk.checked;
        if (!ui.autoAdvance) {
          cancelAutoAdvance();
        }
        syncAutoAdvanceUI();
      });
    }

    const autoDelaySel = document.getElementById("select-auto-delay");
    if (autoDelaySel) {
      autoDelaySel.addEventListener("change", function () {
        ui.autoAdvanceDelay = Number(autoDelaySel.value) || 2000;
        syncAutoAdvanceUI();
      });
    }

    const autoStatusPill = document.getElementById("auto-advance-status-pill");
    if (autoStatusPill) {
      autoStatusPill.addEventListener("click", function () {
        ui.autoAdvance = !ui.autoAdvance;
        if (!ui.autoAdvance) {
          cancelAutoAdvance();
        }
        syncAutoAdvanceUI();
      });
    }

    const cancelAutoBtn = document.getElementById("btn-cancel-auto");
    if (cancelAutoBtn) {
      cancelAutoBtn.addEventListener("click", function () {
        cancelAutoAdvance();
      });
    }

    // Hover over explanation box pauses auto-advance so user can read comfortably
    const expBoxEl = document.getElementById("practice-explanation-box");
    if (expBoxEl) {
      expBoxEl.addEventListener("mouseenter", function () {
        if (ui.autoAdvanceTween && !ui.autoAdvanceTween.paused()) {
          ui.autoAdvanceTween.pause();
          const cBtn = document.getElementById("btn-cancel-auto");
          if (cBtn) cBtn.textContent = "⏸ หยุดพักขณะอ่านเฉลย (คลิกเพื่อหยุดถาวร)";
        }
      });
      expBoxEl.addEventListener("mouseleave", function () {
        if (ui.autoAdvanceTween && ui.autoAdvanceTween.paused()) {
          ui.autoAdvanceTween.resume();
        }
      });
    }

    // Reset Progress
    const resetBtn = document.getElementById("btn-reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        cancelAutoAdvance();
        state.answeredMap = {};
        state.mistakes = [];
        ui.sessionAnswers = {};
        saveState();
        renderChapterRail();
        renderPracticeQuestion();
      });
    }

    // Bookmark Current Question
    const bmBtn = document.getElementById("btn-bookmark-current");
    if (bmBtn) {
      bmBtn.addEventListener("click", toggleCurrentBookmark);
    }

    // Open Chapter Cheat Sheet for current question
    const sheetBtn = document.getElementById("btn-open-chapter-sheet");
    if (sheetBtn) {
      sheetBtn.addEventListener("click", function () {
        const q = ui.filteredQuestions[ui.currentIndex];
        if (q) {
          ui.activeCheatChapter = q.chapter;
        }
        switchView("cheatsheet");
      });
    }

    // Prev / Next in Practice Mode (Animated)
    document.getElementById("btn-prev-question").addEventListener("click", function () {
      if (ui.currentIndex > 0) {
        animateToPracticeQuestion(ui.currentIndex - 1, -1);
      }
    });
    document.getElementById("btn-next-question").addEventListener("click", function () {
      if (ui.currentIndex < ui.filteredQuestions.length - 1) {
        animateToPracticeQuestion(ui.currentIndex + 1, 1);
      }
    });

    // Exam Simulation Controls
    document.getElementById("btn-start-exam").addEventListener("click", startExamSimulation);
    document.getElementById("btn-retake-exam").addEventListener("click", startExamSimulation);
    document.getElementById("btn-submit-exam").addEventListener("click", submitExamSimulation);
    document.getElementById("btn-exam-prev").addEventListener("click", function () {
      if (ui.exam.currentIndex > 0) {
        animateToExamQuestion(ui.exam.currentIndex - 1, -1);
      }
    });
    document.getElementById("btn-exam-next").addEventListener("click", function () {
      if (ui.exam.currentIndex < ui.exam.questions.length - 1) {
        animateToExamQuestion(ui.exam.currentIndex + 1, 1);
      }
    });

    // Review Subtabs
    document.querySelectorAll("[data-review-type]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll("[data-review-type]").forEach(function (b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        ui.reviewType = btn.getAttribute("data-review-type");
        renderReviewView();
      });
    });

    // Global Keyboard Shortcuts
    window.addEventListener("keydown", function (ev) {
      if (ev.target && (ev.target.tagName === "INPUT" || ev.target.tagName === "SELECT" || ev.target.tagName === "TEXTAREA")) {
        return;
      }

      const key = ev.key.toUpperCase();
      if (ui.activeView === "practice" && ui.filteredQuestions.length > 0) {
        const q = ui.filteredQuestions[ui.currentIndex];
        if (key === "1" || key === "A") {
          handlePracticeAnswer(q, 0);
        } else if (key === "2" || (key === "B" && ev.shiftKey)) {
          handlePracticeAnswer(q, 1);
        } else if (key === "3" || key === "C") {
          handlePracticeAnswer(q, 2);
        } else if (key === "4" || key === "D") {
          handlePracticeAnswer(q, 3);
        } else if (key === "B") {
          toggleCurrentBookmark();
        } else if (ev.key === "ArrowRight") {
          if (ui.currentIndex < ui.filteredQuestions.length - 1) {
            animateToPracticeQuestion(ui.currentIndex + 1, 1);
          }
        } else if (ev.key === "ArrowLeft") {
          if (ui.currentIndex > 0) {
            animateToPracticeQuestion(ui.currentIndex - 1, -1);
          }
        }
      }
    });
  }

  function toggleCurrentBookmark() {
    const q = ui.filteredQuestions[ui.currentIndex];
    if (!q) return;
    const idx = state.bookmarks.indexOf(q.id);
    if (idx === -1) {
      state.bookmarks.push(q.id);
    } else {
      state.bookmarks.splice(idx, 1);
    }
    saveState();
    renderPracticeQuestion();
  }

  // Initialize Workbench
  applyTheme(state.theme);
  filterPracticeQuestions();
  renderChapterRail();
  renderPracticeQuestion();
  initEvents();
  animateStageEntrance();
})();
