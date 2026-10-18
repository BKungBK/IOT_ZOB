# DESIGN.md — Hardware Lab & OMR Exam Workbench

## Visual World & Thesis
- **World:** Technical Hardware Datasheet & Optical Mark Recognition (OMR) Exam Workbench.
- **Thesis:** An engineering study instrument that pairs the tactile clarity of a NodeMCU ESP8266 hardware reference manual with the disciplined grid of a computerized 2B answer sheet.
- **Scene:** Used by RUTS students studying for hours on laptops or tablets under both bright library/dorm lighting (Light Drafting Paper mode, default) and late-night desk lighting (Dark PCB Silkscreen mode).

## Color Tokens

### Light Workbench Mode (Default)
- `--bg-canvas`: `#F4F3EE` (Drafting vellum paper)
- `--bg-surface`: `#FFFFFF` (Crisp exam sheet)
- `--bg-elevated`: `#EAE8E0` ( recessed technical tray)
- `--bg-code`: `#141920` (Arduino IDE dark code block for high-contrast syntax clarity)
- `--ink-primary`: `#12171C` (Deep carbon ink, contrast > 14:1)
- `--ink-secondary`: `#38434F` (Slate-tinted ink, contrast > 7.5:1)
- `--ink-muted`: `#556270` (Technical annotation ink, contrast > 4.8:1)
- `--accent-primary`: `#007573` (Arduino/NodeMCU Silkscreen Teal)
- `--accent-primary-hover`: `#005A58`
- `--accent-surface`: `#E3F3F2`
- `--omr-bubble`: `#243447` (2B graphite lead fill)
- `--status-high`: `#147A3B` (Logic HIGH / Correct LED Green)
- `--status-high-bg`: `#E7F6EC`
- `--status-low`: `#C42525` (Logic LOW / Error Red)
- `--status-low-bg`: `#FDECEC`
- `--status-pwm`: `#B25000` (PWM Duty Amber)
- `--status-pwm-bg`: `#FEF3C7`
- `--border-hairline`: `#D5D2C8`
- `--border-strong`: `#B5B1A4`

### Dark PCB Mode
- `--bg-canvas`: `#0D1217` (Matte black PCB substrate)
- `--bg-surface`: `#141C24` (IC package surface)
- `--bg-elevated`: `#1B2530`
- `--bg-code`: `#090D11`
- `--ink-primary`: `#ECF1F6`
- `--ink-secondary`: `#A8B6C4`
- `--ink-muted`: `#7D8E9E`
- `--accent-primary`: `#14B8A6`
- `--accent-primary-hover`: `#2DD4BF`
- `--accent-surface`: `#112E2E`
- `--omr-bubble`: `#38BDF8`
- `--status-high`: `#22C55E`
- `--status-high-bg`: `#0F291E`
- `--status-low`: `#EF4444`
- `--status-low-bg`: `#2C1418`
- `--status-pwm`: `#F59E0B`
- `--status-pwm-bg`: `#2B2111`
- `--border-hairline`: `#253240`
- `--border-strong`: `#36485C`

## Typography
- **UI & Thai Exam Body:** `'Sarabun'`, `'IBM Plex Sans Thai'`, system sans-serif. Line width constrained to `65ch–74ch` for effortless scanning of question stems and 4 choices.
- **Technical & Code Monospace:** `'JetBrains Mono'`, `'Consolas'`, monospace — strictly reserved for C/C++ Arduino sketches, GPIO/Pin identifiers (`D0–D8`, `GPIO14`, `0x27`), and tabular OMR timers/counters (`font-variant-numeric: tabular-nums`).
- **Discipline:**
  - No kicker/eyebrow labels above headings.
  - No gradient text or decorative blur halos.
  - All icons drawn as crisp inline SVGs with consistent `1.75px` stroke weight.
  - Custom `::selection`, `:focus-visible`, and scrollbar styling bound to palette tokens.
