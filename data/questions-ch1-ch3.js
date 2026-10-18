window.IOT_QUESTIONS_CH1_CH3 = [
  // ==========================================
  // บทที่ 1: ความรู้เบื้องต้น IoT (20 ข้อ)
  // ==========================================
  {
    id: "ch1-q01",
    chapter: 1,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "ข้อใดอธิบายความหมายของเทคโนโลยี Internet of Things (IoT) และการสื่อสารแบบ M2M ตามเนื้อหาในสไลด์บทที่ 1 ได้ถูกต้องและครบถ้วนที่สุด?",
    choices: [
      "การใช้คอมพิวเตอร์แม่ข่ายควบคุมการทำงานของฐานข้อมูลขนาดใหญ่โดยไม่ต้องใช้เซ็นเซอร์ตรวจจับสภาพแวดล้อม",
      "การใช้เซ็นเซอร์รับรู้สภาวะแวดล้อมต่างๆ โดยมีระบบเครือข่ายทำหน้าที่รับ-ส่ง แลกเปลี่ยน ประมวลผลข้อมูล และติดต่อสื่อสารระหว่างอุปกรณ์ (Machine-to-Machine Communication)",
      "การเชื่อมต่อสมาร์ทโฟนเข้ากับเครือข่ายโซเชียลมีเดียเพื่อแลกเปลี่ยนข้อความระหว่างผู้ใช้งานเป็นหลัก",
      "การออกแบบเว็บไซต์อีคอมเมิร์ซบนระบบคลาวด์ที่ทำงานเฉพาะบนเครื่องคอมพิวเตอร์ส่วนบุคคลเท่านั้น"
    ],
    answer: 1,
    explanation: "ตามสไลด์บทที่ 1 หน้า 3 นิยามของ IoT คือการใช้เซ็นเซอร์ในการรับรู้สภาวะแวดล้อมต่างๆ โดยมีระบบเครือข่ายทำหน้าที่รับ-ส่งข้อมูล แลกเปลี่ยนข้อมูล ประมวลผลข้อมูล ควบคุมการทำงานสิ่งของต่างๆ หรือติดต่อสื่อสารส่งข้อมูลกันระหว่างอุปกรณ์ (Machine-to-Machine Communication: M2M) เช่น ระบบเปิด/ปิดไฟอัตโนมัติใน Smart Home",
    source: "สไลด์บทที่ 1 หน้า 3 (ความหมาย IoT)"
  },
  {
    id: "ch1-q02",
    chapter: 1,
    category: "applied",
    difficulty: "พื้นฐาน",
    question: "ระบบเปิด-ปิดไฟอัตโนมัติในบ้านอัจฉริยะ (Smart Home) ที่ยกตัวอย่างในสไลด์บทที่ 1 อาศัยอุปกรณ์ใดในการรับรู้ว่ามีผู้อยู่อาศัยอยู่ในบ้าน?",
    choices: [
      "เซ็นเซอร์ตรวจวัดความชื้นในดิน",
      "เซ็นเซอร์ตรวจจับการเคลื่อนไหวของผู้อยู่อาศัย",
      "โมดูลขับมอเตอร์กระแสตรง L298N",
      "ระบบระบุตำแหน่งบนพื้นโลกผ่านดาวเทียม (GPS)"
    ],
    answer: 1,
    explanation: "ในสไลด์บทที่ 1 หน้า 3 ยกตัวอย่างชัดเจนว่า ระบบเปิด/ปิดไฟอัตโนมัติใน Smart Home จะมีการติดตั้ง 'เซ็นเซอร์ตรวจจับการเคลื่อนไหวของผู้อยู่อาศัย' ไว้ในบ้านเพื่อรับรู้สภาวะแวดล้อมแล้วสั่งควบคุมหลอดไฟ",
    source: "สไลด์บทที่ 1 หน้า 3"
  },
  {
    id: "ch1-q03",
    chapter: 1,
    category: "applied",
    difficulty: "พื้นฐาน",
    question: "ในการประยุกต์ใช้ IoT ด้านการเกษตร หรือที่เรียกว่า Smart Farm ตามเนื้อหาที่เรียน มีลำดับการทำงานอย่างไร?",
    choices: [
      "ใช้ RFID ตรวจสอบการเข้างานของคนงาน แล้วโอนเงินค่าจ้างอัตโนมัติ",
      "ใช้เซ็นเซอร์ตรวจสภาพอากาศและสภาพดิน รายงานเข้าสู่ระบบ แล้วสั่งให้เปิดระบบรดน้ำอัตโนมัติ",
      "ใช้ GPS ติดตามตำแหน่งรถแทรกเตอร์เพียงอย่างเดียวโดยไม่มีการใช้เซ็นเซอร์วัดสภาพแวดล้อม",
      "ใช้เซ็นเซอร์วัดชีพจรของพืชแล้วส่งแจ้งเตือนไปยังโรงพยาบาลใกล้เคียง"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 4 ระบุว่า ประโยชน์ด้านการเกษตร (Smart Farm) คือการใช้เซ็นเซอร์ตรวจสภาพอากาศ สภาพดิน แล้วรายงานเข้าสู่ระบบ จากนั้นสั่งให้เปิดระบบรดน้ำอัตโนมัติ",
    source: "สไลด์บทที่ 1 หน้า 4 (ประโยชน์ IoT)"
  },
  {
    id: "ch1-q04",
    chapter: 1,
    category: "applied",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ตามสไลด์บทที่ 1 การนำอุปกรณ์ RFID และ NFC มาใช้บันทึกคะแนน รวมถึงระบบบันทึกและตรวจสอบการมาเรียนของผู้เรียน จัดเป็นประโยชน์ของ IoT ในด้านใด?",
    choices: [
      "ด้านการเงิน",
      "ด้านการศึกษา",
      "ด้านอุตสาหกรรมและการผลิต",
      "ด้าน Smart City"
    ],
    answer: 1,
    explanation: "ในสไลด์บทที่ 1 หน้า 4 ระบุไว้ในหัวข้อ 'ด้านการศึกษา' คือ การจัดการเรียนการสอนโดยใช้อุปกรณ์ RFID, NFC การบันทึกคะแนน ระบบการบันทึกและตรวจสอบการมาเรียนของผู้เรียน",
    source: "สไลด์บทที่ 1 หน้า 4"
  },
  {
    id: "ch1-q05",
    chapter: 1,
    category: "applied",
    difficulty: "ปานกลาง",
    question: "ข้อใดกล่าวถึงประโยชน์ของ IoT 'ด้านการรักษาความปลอดภัย' ตามเนื้อหาในสไลด์บทที่ 1 ได้ถูกต้อง?",
    choices: [
      "การใช้เงินสดระบบอิเล็กทรอนิกส์เพื่อลดขั้นตอนการจัดการระหว่างผู้ซื้อและผู้ขาย",
      "การติดตั้งระบบ GPS กับยานพาหนะแล้วแจ้งเตือนมายังสมาร์ทโฟน และการใช้ RFID ID Card หรือสายรัดข้อมือตรวจสอบผู้ที่เข้ามาในสถานที่สำคัญ",
      "การจัดการพลังงานไฟฟ้า ระบบจัดการน้ำ และระบบจัดการขยะภายในเมือง",
      "การใช้อุปกรณ์อัตโนมัติบันทึกข้อมูลสายการผลิตเพื่อเพิ่มผลผลิตและลดต้นทุน"
    ],
    answer: 1,
    explanation: "ตามสไลด์บทที่ 1 หน้า 5 ด้านการรักษาความปลอดภัย ประกอบด้วย 1) ระบบตรวจจับตำแหน่ง ติดตั้ง GPS ยานพาหนะแจ้งเตือนมายังสมาร์ทโฟน และ 2) การใช้ RFID ID Card หรือสายรัดข้อมือตรวจสอบผู้เข้ามาในสถานที่ต่างๆ เพื่อป้องกันคนแปลกปลอม",
    source: "สไลด์บทที่ 1 หน้า 5"
  },
  {
    id: "ch1-q06",
    chapter: 1,
    category: "applied",
    difficulty: "พื้นฐาน",
    question: "การนำเทคโนโลยี IoT มาปรับใช้เพื่อบริหารจัดการพลังงานไฟฟ้า ระบบจัดการน้ำ และระบบจัดการขยะ เพื่อยกระดับคุณภาพชีวิตของประชากรให้ดีขึ้น ตรงกับแนวคิดใดในบทที่ 1?",
    choices: [
      "Smart Farm",
      "Smart City",
      "Smart Finance",
      "Smart Classroom"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 5 ระบุว่า Smart City คือการนำเทคโนโลยีมาปรับใช้เพื่อทำให้คุณภาพของประชากรดีขึ้น เช่น การจัดการพลังงานไฟฟ้า ระบบจัดการน้ำ จัดการขยะ เป็นต้น",
    source: "สไลด์บทที่ 1 หน้า 5"
  },
  {
    id: "ch1-q07",
    chapter: 1,
    category: "applied",
    difficulty: "พื้นฐาน",
    question: "เป้าหมายหลักของการนำอุปกรณ์อัตโนมัติและเซ็นเซอร์มาช่วยบันทึกและวิเคราะห์ข้อมูลใน 'ด้านอุตสาหกรรมและการผลิต' ตามสไลด์บทที่ 1 คือข้อใด?",
    choices: [
      "เพื่อเพิ่มจำนวนพนักงานฝ่ายเอกสารในโรงงาน",
      "เพื่อเพิ่มผลผลิตและลดต้นทุน",
      "เพื่อเปลี่ยนจากการใช้ไฟฟ้ากระแสตรงเป็นไฟฟ้ากระแสสลับทั้งหมด",
      "เพื่อยกเลิกการใช้งานระบบเครือข่ายอินเทอร์เน็ตในโรงงาน"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 5 ระบุชัดเจนว่า ด้านอุตสาหกรรมและการผลิต อุปกรณ์อัตโนมัติและเซ็นเซอร์ช่วยบันทึกและวิเคราะห์ข้อมูล 'เพื่อเพิ่มผลผลิตและลดต้นทุน'",
    source: "สไลด์บทที่ 1 หน้า 5"
  },
  {
    id: "ch1-q08",
    chapter: 1,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "จากแผนภาพสถาปัตยกรรม IoT (3–5 Layers) ในสไลด์บทที่ 1 หน้า 6 หากเรียงลำดับชั้นจาก 'ล่างสุด (ใกล้ตัวตรวจจับ)' ไปยัง 'บนสุด (ใกล้ผู้ใช้งาน)' ข้อใดเรียงลำดับได้ถูกต้อง?",
    choices: [
      "Application Layer → Data Processing Layer → Network Layer → Sensing Layer",
      "Sensing Layer → Network Layer → Data Processing Layer → Application Layer",
      "Network Layer → Sensing Layer → Application Layer → Data Processing Layer",
      "Data Processing Layer → Sensing Layer → Network Layer → Application Layer"
    ],
    answer: 1,
    explanation: "ในแผนภาพสไลด์บทที่ 1 หน้า 6 ลูกศรชี้จากชั้นล่างสุดขึ้นบนสุดตามลำดับคือ: 1. Sensing Layer (Sensors) → 2. Network Layer (Gateways) → 3. Data Processing Layer (Processing Unit) → 4. Application Layer (Application)",
    source: "สไลด์บทที่ 1 หน้า 6 (สถาปัตยกรรม IoT)"
  },
  {
    id: "ch1-q09",
    chapter: 1,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "ในสถาปัตยกรรม IoT แบบ Layer ชั้นใดที่ทำหน้าที่เป็น Gateways เชื่อมต่อผ่านเทคโนโลยีอย่าง Bluetooth, Wi-Fi, เครือข่ายโทรศัพท์เคลื่อนที่ เพื่อส่งต่อข้อมูลจากเซ็นเซอร์ไปยังหน่วยประมวลผล?",
    choices: [
      "Sensing Layer",
      "Network Layer",
      "Data Processing Layer",
      "Application Layer"
    ],
    answer: 1,
    explanation: "ตามแผนภาพในสไลด์บทที่ 1 หน้า 6 ชั้น Network Layer มีกล่อง 'Gateways' และสัญลักษณ์ Bluetooth, Wi-Fi, เสาสัญญาณ Cellular และ Cloud ทำหน้าที่รับ-ส่งข้อมูลระหว่าง Sensing Layer กับ Data Processing Layer",
    source: "สไลด์บทที่ 1 หน้า 6"
  },
  {
    id: "ch1-q10",
    chapter: 1,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "จากแผนภาพ Cloud and Fog Architecture ในสไลด์บทที่ 1 หน้า 7 ข้อใดจับคู่ 'ระดับของสถาปัตยกรรม' กับ 'ปริมาณอุปกรณ์ (Scale)' และตำแหน่งจากล่างขึ้นบนได้ถูกต้อง?",
    choices: [
      "EDGE Devices (Thousands) → FOG Nodes (Millions) → Cloud Data Center (Billions)",
      "EDGE Devices (Billions) → FOG Nodes (Millions) → Cloud Data Center (Thousands)",
      "FOG Nodes (Billions) → EDGE Devices (Millions) → Cloud Data Center (Thousands)",
      "Cloud Data Center (Billions) → FOG Nodes (Thousands) → EDGE Devices (Millions)"
    ],
    answer: 1,
    explanation: "ในสไลด์บทที่ 1 หน้า 7 แผนภาพ Cloud and Fog Architecture แสดงฐานล่างสุดคือ EDGE Devices มีจำนวนระดับ Billions (พันล้านชิ้น เช่น นาฬิกาสมาร์ทวอทช์ หลอดไฟ มือถือ บอร์ด) เชื่อมต่อไปยังชั้นกลางคือ FOG Nodes ระดับ Millions (ล้านโหนด) และขึ้นไปยังยอดบนสุดคือ Cloud Data Center ระดับ Thousands (พันศูนย์ข้อมูล)",
    source: "สไลด์บทที่ 1 หน้า 7 (Cloud and Fog Architecture)"
  },
  {
    id: "ch1-q11",
    chapter: 1,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "ตามสไลด์บทที่ 1 หน้า 8 ความรู้พื้นฐาน 'ด้านฮาร์ดแวร์' ที่ผู้พัฒนา IoT ควรมี ได้แก่ข้อใด?",
    choices: [
      "การออกแบบฐานข้อมูล SQL และการเขียนภาษา PHP",
      "ไฟฟ้าอิเล็กทรอนิกส์เบื้องต้น เช่น กระแสไฟตรง (DC) สถานะดิจิทัล วงจรอนุกรม วงจรขนาน และอุปกรณ์อิเล็กทรอนิกส์พื้นฐาน",
      "การติดตั้งระบบปฏิบัติการ Windows Server และการจัดทำบัญชีการเงิน",
      "การตัดต่อวิดีโอและออกแบบกราฟิก 3 มิติ"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 8 ระบุชัดเจนว่า ด้านฮาร์ดแวร์ ควรมีความรู้พื้นฐานไฟฟ้าอิเล็กทรอนิกส์เบื้องต้น เช่น กระแสไฟตรง (DC) สถานะดิจิทัล วงจรอนุกรม วงจรขนาน และความรู้ด้านอุปกรณ์อิเล็กทรอนิกส์พื้นฐาน",
    source: "สไลด์บทที่ 1 หน้า 8"
  },
  {
    id: "ch1-q12",
    chapter: 1,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "ในสไลด์บทที่ 1 หน้า 8 ได้ระบุภาษาคอมพิวเตอร์พื้นฐานที่ควรมีสำหรับงานพัฒนา IoT ด้านซอฟต์แวร์ไว้ได้แก่ภาษาใดบ้าง?",
    choices: [
      "ภาษา C, Python หรือ Java",
      "ภาษา HTML, CSS และ SQL เท่านั้น",
      "ภาษา COBOL, Fortran และ Pascal",
      "ภาษา Swift และ Kotlin เท่านั้น"
    ],
    answer: 0,
    explanation: "ในสไลด์บทที่ 1 หน้า 8 ระบุไว้ตรงตัวว่า 'ด้านซอฟต์แวร์ ควรมีพื้นฐานการเขียนโปรแกรมคอมพิวเตอร์ เช่น ภาษาซี python หรือ Java'",
    source: "สไลด์บทที่ 1 หน้า 8"
  },
  {
    id: "ch1-q13",
    chapter: 1,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ข้อใดคือลักษณะเด่นที่สำคัญที่สุดของบอร์ดกลุ่ม Microcontroller Unit (MCU) ตามที่ระบุในสไลด์บทที่ 1 หน้า 9?",
    choices: [
      "ต้องติดตั้งระบบปฏิบัติการ Windows 10 IoT Core หรือ Ubuntu MATE ก่อนเสมอจึงจะใช้งานได้",
      "ภายในชิปมี CPU, Memory และ Peripherals บรรจุไว้ และไม่จำเป็นต้องติดตั้งระบบปฏิบัติการใดๆ แต่ใช้วิธีเขียนโปรแกรมควบคุมอุปกรณ์ผ่านขา Input/Output",
      "มีชิป GPU ความเร็วสูงสำหรับต่อจอภาพ HDMI หลายจอพร้อมกันเหมือนคอมพิวเตอร์ตั้งโต๊ะ",
      "ไม่สามารถเชื่อมต่อกับเซ็นเซอร์หรืออุปกรณ์ภายนอกผ่านขา Input/Output ได้"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 9 ระบุเน้นด้วยตัวอักษรสีแดงว่า Microcontroller Unit (MCU) เป็นบอร์ดขนาดเล็กเท่านามบัตรหรือเล็กกว่า มีชิปไมโครคอนโทรลเลอร์เป็นศูนย์กลาง (ภายในมี CPU, Memory, Peripherals) 'ไม่จำเป็นต้องติดตั้งระบบปฏิบัติการใดๆ แต่จะใช้วิธีการเขียนโปรแกรมเพื่อใช้ควบคุมการทำงานให้กับอุปกรณ์ต่างๆ ที่เชื่อมต่ออยู่กับขา Input/Output บนบอร์ด'",
    source: "สไลด์บทที่ 1 หน้า 9"
  },
  {
    id: "ch1-q14",
    chapter: 1,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "บอร์ดที่มีโครงสร้างทางสถาปัตยกรรมใกล้เคียงกับคอมพิวเตอร์มากที่สุด ใช้ชิปแบบ SoC (System On Chip) ที่รวม CPU, GPU, RAM ไว้ในชิปเดียว และ 'ต้องติดตั้งระบบปฏิบัติการ (OS)' เช่น Raspbian หรือ Ubuntu MATE คือบอร์ดกลุ่มใด?",
    choices: [
      "Microcontroller Unit (MCU)",
      "Microprocessor Unit (MPU)",
      "Breadboard Unit (BBU)",
      "Analog to Digital Unit (ADU)"
    ],
    answer: 1,
    explanation: "ตามสไลด์บทที่ 1 หน้า 10 Microprocessor Unit (MPU) มีโครงสร้างใกล้เคียงคอมพิวเตอร์มากที่สุด ชิปเป็นแบบ SoC (รวม CPU, GPU, RAM) และที่สำคัญต้องติดตั้งระบบปฏิบัติการให้ด้วย อาทิ Raspbian, Ubuntu MATE, Android Things และ Windows 10 IoT Core",
    source: "สไลด์บทที่ 1 หน้า 10"
  },
  {
    id: "ch1-q15",
    chapter: 1,
    category: "hardware",
    difficulty: "พื้นฐาน",
    question: "บอร์ด Arduino จัดอยู่ในกลุ่มเดียวกับบอร์ดประเภทใดตามเนื้อหาในสไลด์บทที่ 1 หน้า 11?",
    choices: [
      "กลุ่มเดียวกับบอร์ดไมโครโปรเซสเซอร์ (MPU) ที่ต้องลงระบบปฏิบัติการ Raspbian",
      "กลุ่มเดียวกับบอร์ดไมโครคอนโทรลเลอร์ (MCU) ที่มีราคาถูกและใช้งานง่าย",
      "กลุ่มคอมพิวเตอร์แม่ข่าย (Cloud Data Center Server)",
      "กลุ่มอุปกรณ์แปลงสัญญาณไฟฟ้ากระแสสลับเป็นกระแสตรง (Rectifier)"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 11 ระบุว่า 'Arduino เป็นบอร์ดที่อยู่ในกลุ่มเดียวกับบอร์ดไมโครคอนโทรลเลอร์ ที่กำลังได้รับความนิยมอย่างสูง เนื่องจากตัวฮาร์ดแวร์มีราคาถูกและใช้งานง่าย ใช้ในงานด้านอิเล็กทรอนิกส์ควบคุม และ IoT'",
    source: "สไลด์บทที่ 1 หน้า 11"
  },
  {
    id: "ch1-q16",
    chapter: 1,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "จากแผนภาพภาษาโปรแกรมของ Eclipse Foundation ในสไลด์บทที่ 1 หน้า 8 ภาษาใดที่ปรากฏอยู่ในฝั่ง Cloud แต่ไม่ได้อยู่ในแถวของ Devices (อุปกรณ์ปลายทาง)?",
    choices: [
      "ภาษา C และ C++",
      "ภาษา JavaScript (JS) และ PHP",
      "ภาษา Python",
      "ภาษา Java"
    ],
    answer: 1,
    explanation: "ในแผนภาพมุมขวาล่างของสไลด์บทที่ 1 หน้า 8 แถว Devices มี C, C++, Python, Java; แถว Gateways มี Java, Python, C, C++; ส่วนแถว Cloud มี Java, JS (JavaScript), Python และ PHP",
    source: "สไลด์บทที่ 1 หน้า 8"
  },
  {
    id: "ch1-q17",
    chapter: 1,
    category: "applied",
    difficulty: "ปานกลาง",
    question: "ข้อใดเป็นการประยุกต์ใช้ IoT 'ด้านการเงิน' ตามที่ระบุไว้ในสไลด์บทที่ 1?",
    choices: [
      "การใช้เซ็นเซอร์วัดความชื้นสัมพัทธ์ในคลังสินค้าเพื่อปรับอุณหภูมิแอร์",
      "การใช้เงินสดระบบอิเล็กทรอนิกส์ ลดขั้นตอนหรือลดคนที่จะต้องดำเนินการจัดการระหว่างผู้ซื้อและผู้ขาย",
      "การใช้สายรัดข้อมือวัดอัตราการเต้นของหัวใจพนักงานธนาคาร",
      "การติดตั้งกล้องวงจรปิดและ GPS บนรถขนส่งสินค้าเกษตร"
    ],
    answer: 1,
    explanation: "ในสไลด์บทที่ 1 หน้า 4 ระบุว่า ด้านการเงิน คือ การใช้เงินสดระบบอิเล็กทรอนิกส์ ลดขั้นตอนหรือลดคนที่จะต้องดำเนินการ ลดการจัดการระหว่างผู้ซื้อและผู้ขาย",
    source: "สไลด์บทที่ 1 หน้า 4"
  },
  {
    id: "ch1-q18",
    chapter: 1,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "คำย่อ SoC ที่กล่าวถึงในหัวข้อบอร์ด Microprocessor Unit (MPU) ย่อมาจากคำว่าอะไร และมีความหมายอย่างไร?",
    choices: [
      "Sensor On Cloud หมายถึงการนำเซ็นเซอร์ไปไว้บนระบบคลาวด์",
      "System On Chip หมายถึงการรวมส่วนประกอบสำคัญๆ เช่น CPU, GPU, RAM ไว้ในชิปเดียว",
      "Serial Output Controller หมายถึงพอร์ตสื่อสารอนุกรมความเร็วสูง",
      "Switch Open Circuit หมายถึงสวิตช์ที่อยู่ในสถานะวงจรเปิด"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 1 หน้า 10 อธิบายว่า โครงสร้างภายในชิปของ MPU จะเป็นแบบ SOC หรือ System On Chip ที่รวมส่วนประกอบสำคัญๆ ไว้ในชิปเดียวทั้ง CPU, GPU, RAM ฯลฯ",
    source: "สไลด์บทที่ 1 หน้า 10"
  },
  {
    id: "ch1-q19",
    chapter: 1,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ตามเกณฑ์การวัดผลของรายวิชา 05413303 และประกาศข้อสอบปลายภาคของอาจารย์จตุพร ข้อใดกล่าวถูกต้องเกี่ยวกับการสอบปลายภาค?",
    choices: [
      "คะแนนเก็บ 50 : สอบปลายภาค 50 ข้อสอบอัตนัยเขียนโค้ดลงกระดาษทั้งหมด",
      "คะแนนเก็บ 70 : สอบปลายภาค 30 ข้อสอบปรนัย 60 ข้อ (4 ตัวเลือก A-D บนกระดาษคำตอบ 5 ตัวเลือก A-E) ใช้ดินสอ 2B และฝนรหัสนักศึกษา 3 ตัวหลัง",
      "คะแนนเก็บ 80 : สอบปลายภาค 20 อนุญาตให้นำสมาร์ทโฟนเข้าห้องสอบเพื่อเปิดดูสไลด์ได้",
      "คะแนนเก็บ 60 : สอบปลายภาค 40 ใช้ปากกาลูกลื่นสีน้ำเงินฝนกระดาษคำตอบคอมพิวเตอร์"
    ],
    answer: 1,
    explanation: "ตามประกาศข้อสอบปลายภาค (section-20) และไฟล์เกณฑ์คะแนนใน LMS: สัดส่วนคะแนนคือ 70:30 (เก็บ 70 ปลายภาค 30), ข้อสอบมี 60 ข้อ (ข้อละ 1 คะแนน), ตัวเลือกข้อสอบมี 4 ตัว (A B C D) แต่กระดาษคำตอบมี 5 ตัว (A B C D E), ต้องใช้ดินสอ 2B เท่านั้น (ไม่ใช้ได้ 0 อัตโนมัติ), ห้ามใช้มือถือ และช่อง Student ID ให้ระบายเฉพาะตัวเลข 3 ตัวหลังสุด",
    source: "ประกาศข้อสอบปลายภาค & มคอ.3 ใน LMS"
  },
  {
    id: "ch1-q20",
    chapter: 1,
    category: "applied",
    difficulty: "ปานกลาง",
    question: "หากธุรกิจโรงพยาบาลต้องการพัฒนาระบบเฝ้าระวังผู้ป่วยที่ต้องดูแลเป็นพิเศษโดยแจ้งเตือนเมื่ออัตราการเต้นของหัวใจผิดปกติ จะตรงกับประโยชน์ของ IoT ด้านใด และเริ่มรับข้อมูลที่ชั้นใดของสถาปัตยกรรม?",
    choices: [
      "ด้านสุขภาพและการแพทย์ โดยเริ่มรับข้อมูลที่ชั้น Sensing Layer",
      "ด้านการรักษาความปลอดภัย โดยเริ่มรับข้อมูลที่ชั้น Application Layer",
      "ด้าน Smart City โดยเริ่มรับข้อมูลที่ชั้น Network Layer",
      "ด้านอุตสาหกรรมและการผลิต โดยเริ่มรับข้อมูลที่ชั้น Data Processing Layer"
    ],
    answer: 0,
    explanation: "การตรวจวัดชีพจรหรือค่าสุขภาพของผู้ที่ต้องการดูแลเป็นพิเศษคือประโยชน์ด้านสุขภาพและการแพทย์ (หน้า 4) และตัวเซ็นเซอร์วัดชีพจรทำหน้าที่อยู่ในชั้นล่างสุดคือ Sensing Layer (หน้า 6)",
    source: "สไลด์บทที่ 1 หน้า 4 และ หน้า 6"
  },

  // ==========================================
  // บทที่ 2: อุปกรณ์และโปรแกรมที่เกี่ยวข้อง (20 ข้อ)
  // ==========================================
  {
    id: "ch2-q01",
    chapter: 2,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "บนบอร์ด NodeMCU ESP8266 ขาใดถูกกำหนดให้ทำหน้าที่เป็นขา SDA และ SCL สำหรับสื่อสารผ่านอินเตอร์เฟส I2C (เช่น ต่อโมดูลจอ LCD หรือ OLED) ตามลำดับ?",
    choices: [
      "SDA = ขา D1 (GPIO5) และ SCL = ขา D2 (GPIO4)",
      "SDA = ขา D2 (GPIO4) และ SCL = ขา D1 (GPIO5)",
      "SDA = ขา D5 (GPIO14) และ SCL = ขา D6 (GPIO12)",
      "SDA = ขา D0 (GPIO16) และ SCL = ขา D4 (GPIO2)"
    ],
    answer: 1,
    explanation: "ตามสไลด์บทที่ 2 หน้า 4 (และแผนผังขาหน้า 3) ระบุชัดเจนว่า ขา D2/GPIO4 ถูกกำหนดให้เป็นขา SDA (Serial Data) และขา D1/GPIO5 ถูกกำหนดให้เป็นขา SCL (Serial Clock) สำหรับอินเตอร์เฟส I2C",
    source: "สไลด์บทที่ 2 หน้า 3–4"
  },
  {
    id: "ch2-q02",
    chapter: 2,
    category: "hardware",
    difficulty: "พื้นฐาน",
    question: "ขา A0 (หรือ ADC) บนบอร์ด NodeMCU ESP8266 มีหน้าที่หลักคือข้อใด?",
    choices: [
      "จ่ายแรงดันไฟฟ้ากระแสตรง 5 โวลต์ที่มาจากพอร์ต USB",
      "เป็นขา Input ที่ใช้อ่านค่าจากเซ็นเซอร์อนาล็อก (Analog) มาแปลงเป็นดิจิทัล (Digital)",
      "ใช้รีเซ็ตการทำงานของบอร์ดเมื่อต่อเข้ากับกราวด์",
      "ใช้เชื่อมต่อกับการ์ดหน่วยความจำ SD Card ผ่านอินเตอร์เฟส SDIO"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 5 ระบุว่า 'A0 หรือ ADC เป็นขา Input ที่ใช้อ่านค่าจากเซ็นเซอร์อนาล็อก (Analog) มาแปลงเป็นดิจิทัล (Digital) ทำให้บอร์ดนี้สามารถใช้งานกับเซ็นเซอร์อนาล็อกได้'",
    source: "สไลด์บทที่ 2 หน้า 5"
  },
  {
    id: "ch2-q03",
    chapter: 2,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ข้อใดเปรียบเทียบความแตกต่างของขาไฟเลี้ยง '3V', 'VU (V USB)' และ 'VIN' บนบอร์ด NodeMCU ESP8266 ได้ถูกต้องตามสไลด์บทที่ 2?",
    choices: [
      "3V มีแรงดัน 3.3V, VU มีแรงดัน 5V จากพอร์ต USB, ส่วน VIN ใช้รับไฟเข้าจากแหล่งจ่ายภายนอกโดยตรง (ไม่เกิน 5V)",
      "3V มีแรงดัน 3.0V, VU ใช้รับไฟเข้า 12V, ส่วน VIN จ่ายไฟออก 3.3V เท่านั้น",
      "ทั้ง 3V, VU และ VIN มีแรงดันไฟฟ้าเท่ากันทั้งหมดคือ 5 โวลต์",
      "3V เป็นขากราวด์, VU เป็นขาอนาล็อก, ส่วน VIN เป็นขาสำหรับอัปโหลดโค้ด"
    ],
    answer: 0,
    explanation: "ตามสไลด์บทที่ 2 หน้า 5–6: ขา 3V มีแรงดันไฟ 3.3 โวลต์, ขา VU (V USB) มีแรงดันไฟ 5 โวลต์ที่มาจากพอร์ต USB, และขา VIN ใช้รับไฟเข้าจากแหล่งจ่ายภายนอกเพื่อจ่ายไฟให้บอร์ดและอุปกรณ์อื่นโดยตรง ซึ่งไฟที่จ่ายให้ควรมีขนาดไม่เกิน 5V",
    source: "สไลด์บทที่ 2 หน้า 5–6"
  },
  {
    id: "ch2-q04",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "ขา D5 ถึง D8 บนบอร์ด NodeMCU ESP8266 นอกจากจะเป็นขา GPIO ทั่วไปแล้ว ยังทำหน้าที่สื่อสารกับโมดูลอื่นผ่านอินเตอร์เฟสใด?",
    choices: [
      "อินเตอร์เฟส I2C",
      "อินเตอร์เฟส HSPI",
      "อินเตอร์เฟส SDIO สำหรับการ์ดจอ",
      "อินเตอร์เฟส Analog ADC"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 5 ระบุว่า 'D5 - D8 เป็นทั้งขา GPIO และขาที่ใช้ติดต่อสื่อสารกับโมดูลอื่นผ่านอินเตอร์เฟส HSPI' (ได้แก่ HSCLK, HMISO, HMOSI, HCS)",
    source: "สไลด์บทที่ 2 หน้า 3 และ หน้า 5"
  },
  {
    id: "ch2-q05",
    chapter: 2,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ข้อใดกล่าวถึงสถานะการทำงานของขา 'EN' และขา 'RST' บนบอร์ด NodeMCU ESP8266 ได้ถูกต้องตามสไลด์บทที่ 2 หน้า 6?",
    choices: [
      "EN ทำงานแบบ Active Low ส่วน RST ทำงานแบบ Active High",
      "EN ควบคุมให้โมดูลทำงานเมื่อเป็น Active High ส่วน RST ใช้รีเซ็ตโมดูลเมื่อต่อกับกราวด์หรือเป็น Active Low",
      "ทั้งขา EN และขา RST ทำงานแบบ Active Low เมื่อต่อลงกราวด์ทั้งคู่",
      "EN ใช้สำหรับอ่านค่าอนาล็อก ส่วน RST ใช้สำหรับจ่ายไฟ 5 โวลต์"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 6 ระบุชัดเจนว่า: 'EN เป็นขาที่ควบคุมให้โมดูลทำงาน เมื่อมีการจ่ายไฟหรือกำหนดสถานะให้เป็น Active High' และ 'RST เป็นขาที่ใช้เซ็ตโมดูล เมื่อต่อกับกราวด์หรือกำหนดสถานะให้เป็น Active Low'",
    source: "สไลด์บทที่ 2 หน้า 6"
  },
  {
    id: "ch2-q06",
    chapter: 2,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ชิปหลัก ESP8266 รุ่น ESP-12E ที่ติดตั้งอยู่บนบอร์ด NodeMCU มีคุณสมบัติด้านหน่วยประมวลผล ความถี่ หน่วยความจำ และมาตรฐาน Wi-Fi ตรงกับข้อใด?",
    choices: [
      "8-bit ความถี่ 16 MHz, RAM 2 KB + Flash 32 KB, Wi-Fi 802.11 ac",
      "32-bit ความถี่ 80–160 MHz, 128 KB internal RAM + 4 MB external Flash, Wi-Fi มาตรฐาน 802.11 b/g/n",
      "64-bit ความถี่ 2.4 GHz, RAM 4 GB + Flash 64 GB, Wi-Fi 6 (802.11 ax)",
      "16-bit ความถี่ 40 MHz, 64 KB internal RAM + 1 MB external Flash, รองรับเฉพาะ Bluetooth"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 7 ระบุตรงตัวว่า ชิปหลัก ESP8266 รุ่น ESP-12E เป็นชิปที่มีหน่วยประมวลผล 32-bit ความถี่ 80-160 MHz, หน่วยความจำ (128 KB internal RAM + 4MB external Flash) และตัวรับส่งสัญญาณ Wi-Fi มาตรฐาน 802.11 b/g/n อยู่ในตัว",
    source: "สไลด์บทที่ 2 หน้า 7"
  },
  {
    id: "ch2-q07",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "ขา S3 และ S2 รวมถึงชุดขา S1, SC, SO และ SK บนบอร์ด NodeMCU ESP8266 ใช้ติดต่อสื่อสารกับอุปกรณ์เก็บข้อมูลชนิดใดโดยตรงผ่านอินเตอร์เฟส SDIO?",
    choices: [
      "ฮาร์ดดิสก์แบบจานหมุน SATA",
      "อุปกรณ์ SD Card",
      "แฟลชไดรฟ์ USB 3.0",
      "โมดูลจอแสดงผล LCD 16x2"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 6 ระบุว่า S3, S2 และ S1, SC, SO, SK เป็นทั้งขา GPIO และขาที่ใช้ติดต่อสื่อสารกับอุปกรณ์ SD Card โดยตรงผ่านอินเตอร์เฟส SDIO (Secure Digital Input/Output)",
    source: "สไลด์บทที่ 2 หน้า 6"
  },
  {
    id: "ch2-q08",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "ตามสไลด์บทที่ 2 หน้า 6 ชุดขา S1, SC, SO และ SK นอกจากจะใช้กับ SDIO แล้ว ยังใช้ติดต่อสื่อสารกับโมดูลอื่นผ่านอินเตอร์เฟส SPI ซึ่งมีจุดเด่นอย่างไรเมื่อเทียบกับ I2C?",
    choices: [
      "ใช้สายสัญญาณน้อยกว่า I2C เหลือเพียงเส้นเดียว",
      "มีความเร็วในการรับ-ส่งข้อมูลเร็วกว่าอินเตอร์เฟส I2C",
      "สามารถส่งพลังงานไฟฟ้ากระแสสลับ 220V ผ่านสายข้อมูลได้",
      "ไม่ต้องต่อขากราวด์ (GND) ร่วมกับอุปกรณ์อื่น"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 6 ระบุว่า ชุดขา S1, SC, SO และ SK ใช้ติดต่อสื่อสารกับโมดูลอื่นผ่านอินเตอร์เฟส SPI 'ที่เร็วกว่า I2C'",
    source: "สไลด์บทที่ 2 หน้า 6"
  },
  {
    id: "ch2-q09",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "จากแผนผังขา NodeMCU ESP8266 ในสไลด์บทที่ 2 หน้า 3 ข้อใดจับคู่ชื่อขาบนบอร์ด (D0–D8) กับหมายเลข GPIO ภายในชิปได้ถูกต้องทั้งหมด?",
    choices: [
      "D0 = GPIO0, D1 = GPIO1, D2 = GPIO2, D4 = GPIO4",
      "D0 = GPIO16, D1 = GPIO5, D2 = GPIO4, D5 = GPIO14, D6 = GPIO12",
      "D0 = GPIO12, D1 = GPIO14, D2 = GPIO15, D5 = GPIO5, D6 = GPIO4",
      "D0 = GPIO3, D1 = GPIO1, D2 = GPIO16, D5 = GPIO0, D6 = GPIO2"
    ],
    answer: 1,
    explanation: "จากแผนผัง Pinout ในสไลด์บทที่ 2 หน้า 3 (และบทที่ 4 หน้า 2): D0 = GPIO16, D1 = GPIO5, D2 = GPIO4, D3 = GPIO0, D4 = GPIO2, D5 = GPIO14, D6 = GPIO12, D7 = GPIO13, D8 = GPIO15",
    source: "สไลด์บทที่ 2 หน้า 3 (แผนผังขา NodeMCU ESP8266)"
  },
  {
    id: "ch2-q10",
    chapter: 2,
    category: "hardware",
    difficulty: "พื้นฐาน",
    question: "ขา RX และ TX บนบอร์ด NodeMCU ESP8266 มีหน้าที่หลักในการเชื่อมต่อแบบใด?",
    choices: [
      "เป็นขา GPIO และขาที่ใช้รับ-ส่งข้อมูลแบบ Serial กับอุปกรณ์อื่น",
      "เป็นขาจ่ายไฟเลี้ยง 3.3V และ 5V ให้กับมอเตอร์",
      "เป็นขาสำหรับวัดค่าความสว่างของแสงแบบอนาล็อกโดยเฉพาะ",
      "เป็นขาสวิตช์สำหรับกดรีเซ็ตบอร์ด"
    ],
    answer: 0,
    explanation: "สไลด์บทที่ 2 หน้า 5 ระบุว่า 'RX/TX เป็นขา GPIO และขาที่ใช้รับส่งข้อมูลแบบ Serial กับอุปกรณ์อื่น'",
    source: "สไลด์บทที่ 2 หน้า 5"
  },
  {
    id: "ch2-q11",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "สำหรับบอร์ด NodeMCU ESP8266 รุ่น V3 ที่ใช้ชิปแปลงสัญญาณ USB TTL เป็นรุ่น CH340 หลอดไฟ LED บนบอร์ดมีหน้าที่อะไรตามสไลด์บทที่ 2 หน้า 7?",
    choices: [
      "ใช้เป็นไฟฉายส่องสว่างเมื่อไฟดับเท่านั้น",
      "ใช้แสดงสถานะการอัปโหลดโปรแกรม และยังสามารถใช้แสดงสถานะการทำงานของโปรแกรมได้ด้วย",
      "ใช้แจ้งเตือนเฉพาะเมื่อบอร์ดเกิดการลัดวงจรเสียหายเท่านั้น",
      "ใช้ปล่อยคลื่นความถี่เสียงอัลตร้าโซนิค 40 kHz"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 7 ระบุว่า 'หลอดไฟ LED ใช้แสดงสถานะการอัพโหลดโปรแกรม (สำหรับบอร์ด V3 ที่ใช้ชิป USB TTL เป็น CH340 หลอดไฟนี้ยังสามารถใช้แสดงสถานะการทำงานของโปรแกรม)'",
    source: "สไลด์บทที่ 2 หน้า 7"
  },
  {
    id: "ch2-q12",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "จากรูปแผนผังบอร์ด NodeMCU ESP8266 ในสไลด์บทที่ 4 หน้า 2 ปุ่มกดขนาดเล็ก 2 ปุ่มที่อยู่ขนาบข้างพอร์ต Micro USB ด้านล่างของบอร์ด มีชื่อกำกับไว้ว่าอย่างไร?",
    choices: [
      "ปุ่ม START และปุ่ม STOP",
      "ปุ่ม RST และปุ่ม FLASH",
      "ปุ่ม SDA และปุ่ม SCL",
      "ปุ่ม TX และปุ่ม RX"
    ],
    answer: 1,
    explanation: "สังเกตที่มุมล่างซ้ายและล่างขวาของบอร์ด NodeMCU ข้างพอร์ต USB ในสไลด์บทที่ 2 หน้า 3 และบทที่ 4 หน้า 2 จะมีปุ่มกด 2 ปุ่มพิมพ์กำกับบนแผ่น PCB ว่า RST (ด้านซ้าย) และ FLASH (ด้านขวา)",
    source: "สไลด์บทที่ 2 หน้า 3 และ บทที่ 4 หน้า 2"
  },
  {
    id: "ch2-q13",
    chapter: 2,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "หากผู้เรียนเขียนโค้ดสั่งงานขา GPIO13 ในโปรแกรม Arduino IDE (เช่น pinMode(13, OUTPUT); ในสไลด์บทที่ 4) จะตรงกับขาหมายเลขใดที่พิมพ์อยู่บนขอบบอร์ด NodeMCU ESP8266?",
    choices: [
      "ขา D4",
      "ขา D5",
      "ขา D6",
      "ขา D7"
    ],
    answer: 3,
    explanation: "จากตารางแผนผังขา NodeMCU ESP8266: GPIO14 = D5, GPIO12 = D6, GPIO13 = D7 และ GPIO15 = D8 ดังนั้น GPIO13 จึงตรงกับขา D7 (ซึ่งตรงกับรูปวงจร test03 ในสไลด์บทที่ 4 หน้า 7–8 ที่ลากสายไฟออกจากขา D7)",
    source: "สไลด์บทที่ 2 หน้า 3 และ บทที่ 4 หน้า 7–8"
  },
  {
    id: "ch2-q14",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "บนบอร์ด NodeMCU ESP8266 ขาใดที่มีฟังก์ชันพิเศษกำกับว่า 'FLASH' และตรงกับหมายเลข GPIO0?",
    choices: [
      "ขา D0",
      "ขา D1",
      "ขา D3",
      "ขา D8"
    ],
    answer: 2,
    explanation: "จากแผนผังขาในสไลด์บทที่ 2 หน้า 3 ขา D3 ตรงกับ GPIO0 และมีป้ายกำกับฟังก์ชันว่า FLASH (ส่วน D0 คือ GPIO16 WAKE, D4 คือ GPIO2 TXD1)",
    source: "สไลด์บทที่ 2 หน้า 3"
  },
  {
    id: "ch2-q15",
    chapter: 2,
    category: "hardware",
    difficulty: "พื้นฐาน",
    question: "สัญลักษณ์ขา 'G' หรือ 'GND' บนบอร์ด NodeMCU ESP8266 หมายถึงขาใด?",
    choices: [
      "ขาสัญญาณนาฬิกา (Generator Clock)",
      "ขากราวด์ (Ground) หรือขั้วลบของวงจร",
      "ขาจ่ายไฟแรงดันสูง (Gain Voltage)",
      "ขาเชื่อมต่อเกตเวย์ (Gateway Pin)"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 5 ระบุไว้ชัดเจนว่า 'G เป็นขากราวด์ (Ground)'",
    source: "สไลด์บทที่ 2 หน้า 5"
  },
  {
    id: "ch2-q16",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "หากต้องการจ่ายไฟเข้าที่ขา VIN ของบอร์ด NodeMCU ESP8266 จากแหล่งจ่ายไฟภายนอก สไลด์บทที่ 2 หน้า 6 แนะนำว่าไฟที่จ่ายให้ควรมีแรงดันขนาดเท่าใด?",
    choices: [
      "ไม่เกิน 5V",
      "ต้องใช้ไฟกระแสสลับ 220V เท่านั้น",
      "ต้องอยู่ระหว่าง 24V ถึง 48V",
      "ไม่เกิน 1.5V"
    ],
    answer: 0,
    explanation: "สไลด์บทที่ 2 หน้า 6 ระบุว่า 'VIN เป็นขาที่ใช้รับไฟเข้าจากแหล่งจ่ายภายนอกเพื่อจ่ายไฟให้กับบอร์ด และอุปกรณ์เชื่อมต่ออื่นๆ โดยตรง ซึ่งไฟที่จ่ายให้ควรมีขนาดไม่เกิน 5V'",
    source: "สไลด์บทที่ 2 หน้า 6"
  },
  {
    id: "ch2-q17",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "ในแผนผังขาของ NodeMCU ESP8266 (สไลด์บทที่ 2 หน้า 3) ขาที่อยู่ถัดจากขา A0 (ADC0) ลงมา 2 ขา มีป้ายกำกับว่าอย่างไร?",
    choices: [
      "RESERVED (ขาที่สงวนไว้ไม่ใช้งานทั่วไป)",
      "PWM1 และ PWM2",
      "DAC0 และ DAC1",
      "HDMI1 และ HDMI2"
    ],
    answer: 0,
    explanation: "ในแผนผังขาฝั่งซ้ายบนของบอร์ด NodeMCU (สไลด์บทที่ 2 หน้า 3) ใต้ขา ADC0 (A0) ลงมา 2 ขา (RSV) มีป้ายกำกับว่า RESERVED ทั้งสองขา ก่อนจะถึงขา SDD3 (GPIO10)",
    source: "สไลด์บทที่ 2 หน้า 3"
  },
  {
    id: "ch2-q18",
    chapter: 2,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "ซอฟต์แวร์หลักที่ใช้สำหรับเขียนโค้ด คอมไพล์ และอัปโหลดโปรแกรมลงสู่บอร์ด NodeMCU ESP8266 ในรายวิชานี้คือโปรแกรมใด?",
    choices: [
      "Microsoft Visual FoxPro",
      "Arduino IDE",
      "Android Studio",
      "Adobe Dreamweaver"
    ],
    answer: 1,
    explanation: "สไลด์บทที่ 2 หน้า 8 ระบุว่า 'สำหรับการเรียนในรายวิชานี้เราจะใช้ซอฟต์แวร์ที่ชื่อว่า Arduino IDE'",
    source: "สไลด์บทที่ 2 หน้า 8"
  },
  {
    id: "ch2-q19",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "บนบอร์ด NodeMCU ESP8266 มีขาที่ใช้อ่านค่าสัญญาณอนาล็อก (ADC) ได้ทั้งหมดกี่ขา และคือขาใด?",
    choices: [
      "มี 1 ขา คือขา A0 (ADC0)",
      "มี 6 ขา คือขา A0 ถึง A5 เหมือนบอร์ด Arduino Uno",
      "มี 4 ขา คือขา D1 ถึง D4",
      "มี 2 ขา คือขา RX และ TX"
    ],
    answer: 0,
    explanation: "จากแผนผังบอร์ด NodeMCU ESP8266 ในสไลด์บทที่ 2 หน้า 3 และคำอธิบายหน้า 5 บอร์ด NodeMCU ESP8266 มีขาอนาล็อกเพียงขาเดียวคือขา A0 (ADC0 / TOUT)",
    source: "สไลด์บทที่ 2 หน้า 3 และ หน้า 5"
  },
  {
    id: "ch2-q20",
    chapter: 2,
    category: "hardware",
    difficulty: "ปานกลาง",
    question: "ขา D0 (GPIO16) บนบอร์ด NodeMCU ESP8266 มีป้ายกำกับฟังก์ชันพิเศษในแผนผัง Pinout (สไลด์บทที่ 2 หน้า 3) ว่าอย่างไร?",
    choices: [
      "SCL และ SDA",
      "USER และ WAKE",
      "MOSI และ MISO",
      "RXD0 และ TXD0"
    ],
    answer: 1,
    explanation: "ในแผนผังสไลด์บทที่ 2 หน้า 3 ขาบนสุดฝั่งขวาคือ D0 ซึ่งตรงกับ GPIO16 และมีป้ายกำกับว่า USER และ WAKE (ใช้ปลุกชิปจากโหมด Deep Sleep)",
    source: "สไลด์บทที่ 2 หน้า 3"
  },

  // ==========================================
  // บทที่ 3: การติดตั้งโปรแกรมและติดตั้ง Library (20 ข้อ)
  // ==========================================
  {
    id: "ch3-q01",
    chapter: 3,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "ตามเอกสารบทที่ 3 เว็บไซต์ทางการสำหรับดาวน์โหลดโปรแกรม Arduino IDE คือเว็บไซต์ใด และแนะนำให้ใช้เวอร์ชันใดในการเรียน?",
    choices: [
      "https://www.arduino.cc/en/software (เวอร์ชัน Arduino IDE 1.8.19 หรือ 2.0 RC)",
      "https://www.esp8266.org/download (เวอร์ชัน 5.0 เท่านั้น)",
      "https://www.python.org/downloads (เวอร์ชัน 3.11)",
      "https://www.blynk.io/ide (เวอร์ชัน 1.0)"
    ],
    answer: 0,
    explanation: "เอกสารบทที่ 3 หน้า 1 ระบุให้เข้าเว็บไซต์ https://www.arduino.cc/en/software และดาวน์โหลดซอฟต์แวร์ Arduino IDE 1.8.19 หรือ Arduino IDE 2.0 RC ก็ได้",
    source: "เอกสารบทที่ 3 หน้า 1"
  },
  {
    id: "ch3-q02",
    chapter: 3,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ในขั้นตอนการตั้งค่าเพื่อให้ Arduino IDE รู้จักบอร์ด ESP8266 ขั้นตอนแรกต้องไปที่เมนูใดเพื่อวางลิงก์ JSON ลงในช่อง Additional Boards Manager URLs?",
    choices: [
      "Sketch > Include Library > Manage Libraries...",
      "File > Preferences (คีย์ลัด Ctrl + Comma)",
      "Tools > Serial Monitor",
      "Edit > Find..."
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 1–2 ระบุชัดเจนว่า ใน Arduino IDE ให้ไปที่เมนู File > Preferences (Ctrl+Comma) แล้วที่ช่อง Additional Boards Manager URLs ให้เพิ่มลิงก์ JSON ของ esp8266",
    source: "เอกสารบทที่ 3 หน้า 1–2"
  },
  {
    id: "ch3-q03",
    chapter: 3,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "URL ใดต่อไปนี้คือลิงก์ที่ต้องนำไปใส่ในช่อง Additional Boards Manager URLs เพื่อเพิ่มบอร์ดตระกูล ESP8266 ใน Arduino IDE ตามเอกสารบทที่ 3?",
    choices: [
      "http://arduino.esp8266.com/stable/package_esp8266com_index.json",
      "https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library",
      "https://github.com/me-no-dev/ESPAsyncWebServer",
      "https://moodle.rmutsv.ac.th/course/view.php"
    ],
    answer: 0,
    explanation: "เอกสารบทที่ 3 หน้า 2 ระบุให้เพิ่มคำว่า http://arduino.esp8266.com/stable/package_esp8266com_index.json ในช่อง Additional Boards Manager URLs",
    source: "เอกสารบทที่ 3 หน้า 2"
  },
  {
    id: "ch3-q04",
    chapter: 3,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "หลังจากใส่ลิงก์ JSON ใน Preferences เรียบร้อยแล้ว ต้องไปที่เมนูใดเพื่อพิมพ์ค้นหาคำว่า 'esp8266' และกดปุ่ม Install?",
    choices: [
      "File > Examples > ESP8266",
      "Tools > Board > Boards Manager...",
      "Sketch > Upload Using Programmer",
      "Help > About Arduino"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 3–4 ระบุให้ไปเพิ่มบอร์ดที่เมนู Tools > Board > Boards Manager... แล้วพิมพ์ค้นหาคำว่า esp8266 จากนั้นกดปุ่ม Install",
    source: "เอกสารบทที่ 3 หน้า 3–4"
  },
  {
    id: "ch3-q05",
    chapter: 3,
    category: "hardware",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "เมื่อติดตั้งแพ็กเกจบอร์ด esp8266 เสร็จแล้ว ในการใช้งานจริงกับบอร์ดของรายวิชานี้ ต้องไปเลือกชื่อรุ่นบอร์ดในเมนู Tools > Board เป็นข้อใด?",
    choices: [
      "Arduino/Genuino Uno",
      "NodeMCU 1.0 (ESP-12E Module)",
      "Arduino Mega or Mega 2560",
      "Generic ESP8285 Module"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 5 ระบุขั้นตอนชัดเจนพร้อมกรอบสีแดงว่า ให้ไปที่ Tools -> Board -> เลือก 'NodeMCU 1.0 (ESP-12E Module)' (เนื่องจากชิปหลักบนบอร์ดคือรุ่น ESP-12E)",
    source: "เอกสารบทที่ 3 หน้า 5"
  },
  {
    id: "ch3-q06",
    chapter: 3,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ในการติดตั้ง Library สำหรับใช้งานเซนเซอร์วัดอุณหภูมิและความชื้น DHT บน Arduino IDE เอกสารบทที่ 3 ระบุว่าควรติดตั้ง Library 2 ตัวใดคู่กัน?",
    choices: [
      "DHT sensor library และ Adafruit Unified Sensor",
      "LiquidCrystal_I2C และ Wire",
      "NewPing และ ESPAsyncTCP",
      "BlynkSimpleEsp8266 และ Servo"
    ],
    answer: 0,
    explanation: "เอกสารบทที่ 3 หน้า 6 ระบุชัดเจนว่า 'ในการติดตั้ง DHT ควรติดตั้ง 2 ตัว คือ 1. DHT sensor library และ 2. Adafruit Unified Sensor' (และใน LMS บทที่ 6 อาจารย์ก็อัปโหลดไฟล์ zip ของทั้ง 2 ตัวนี้ไว้คู่กัน)",
    source: "เอกสารบทที่ 3 หน้า 6 และ LMS บทที่ 6"
  },
  {
    id: "ch3-q07",
    chapter: 3,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "การเปิดหน้าต่าง Library Manager เพื่อค้นหาและติดตั้ง DHT sensor library by Adafruit ต้องเข้าผ่านเมนูใดใน Arduino IDE?",
    choices: [
      "File > New",
      "Sketch > Include Library > Manage Libraries...",
      "Tools > Serial Plotter",
      "Edit > Copy for Forum"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 6 ระบุว่า ให้เลือกที่เมนู Sketch > Include Library > Manage Libraries... (หรือกดคีย์ลัด Ctrl+Shift+I)",
    source: "เอกสารบทที่ 3 หน้า 6"
  },
  {
    id: "ch3-q08",
    chapter: 3,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "หากดาวน์โหลด Library มาจากเว็บไซต์ GitHub หรือ Bitbucket ในรูปแบบไฟล์บีบอัด (.ZIP) จะต้องใช้เมนูใดใน Arduino IDE เพื่อติดตั้ง Library นั้น?",
    choices: [
      "File > Open...",
      "Sketch > Include Library > Add .ZIP Library...",
      "Tools > Burn Bootloader",
      "Sketch > Export compiled Binary"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 12, 14, 19, 23 ระบุตรงกันว่า สำหรับไฟล์ ZIP ที่ดาวน์โหลดมา ให้เปิด Arduino IDE แล้วกดที่เมนู Sketch >> Include Library >> Add .ZIP Library...",
    source: "เอกสารบทที่ 3 หน้า 12"
  },
  {
    id: "ch3-q09",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "ไฟล์ Library สำหรับการแสดงผลบนหน้าจอ LCD แบบ I2C ที่ดาวน์โหลดจาก GitHub ในเอกสารบทที่ 3 มีชื่อไฟล์เมื่อนำไป Add .ZIP Library ว่าอย่างไร?",
    choices: [
      "Arduino-LiquidCrystal-I2C-library-master",
      "NewPing_v1.9.4",
      "Adafruit_Sensor-master",
      "OLED_Display_128x64"
    ],
    answer: 0,
    explanation: "เอกสารบทที่ 3 หน้า 10–13 ระบุให้ดาวน์โหลดจาก https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library แล้วเลือกไฟล์ชื่อ 'Arduino-LiquidCrystal-I2C-library-master' กด Open",
    source: "เอกสารบทที่ 3 หน้า 10–13"
  },
  {
    id: "ch3-q10",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "ในการติดตั้ง Library สำหรับเซนเซอร์ Ultrasonic ตามเอกสารบทที่ 3 หน้า 14–15 ผู้เรียนต้องดาวน์โหลดไฟล์ชื่อใดมาติดตั้งผ่าน Add .ZIP Library?",
    choices: [
      "Ultrasonic_HC_SR04_v1.0",
      "NewPing_v1.9.4",
      "SoundWave_40kHz",
      "ESPAsyncUltrasonic"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 14–15 ระบุให้ดาวน์โหลดจากลิงก์ Bitbucket (arduino-new-ping) แล้วเลือกไฟล์ชื่อ 'NewPing_v1.9.4' กด Open",
    source: "เอกสารบทที่ 3 หน้า 14–15"
  },
  {
    id: "ch3-q11",
    chapter: 3,
    category: "concept",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "เมื่อดาวน์โหลด Library 'ESPAsyncTCP' และ 'ESPAsyncWebServer' จาก GitHub มาเสร็จแล้ว เอกสารบทที่ 3 เน้นย้ำว่าต้องทำขั้นตอนสำคัญใดก่อนนำไป Add .ZIP Library ใน Arduino IDE?",
    choices: [
      "ต้องแปลงไฟล์จาก .zip ให้เป็นไฟล์ .pdf ก่อนเสมอ",
      "ต้องเปลี่ยนชื่อไฟล์โดยตัดคำว่า '-master' ออก (เช่น เปลี่ยนจาก ESPAsyncTCP-master เป็น ESPAsyncTCP)",
      "ต้องลบไฟล์โค้ดภาษา C ข้างในทิ้งทั้งหมดเหลือไว้เฉพาะไฟล์ README.md",
      "ต้องคัดลอกไฟล์ไปวางไว้ในโฟลเดอร์ Windows\\System32"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 19 และ 23 ระบุชัดเจนว่า เมื่อ Download เสร็จจะได้ไฟล์ชื่อ ESPAsyncTCP-master และ ESPAsyncWebServer-master ให้ทำการเปลี่ยนชื่อไฟล์เป็น 'ESPAsyncTCP' และ 'ESPAsyncWebServer' ก่อนนำไป Add .ZIP Library",
    source: "เอกสารบทที่ 3 หน้า 19 และ หน้า 23"
  },
  {
    id: "ch3-q12",
    chapter: 3,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "บนหน้าเว็บไซต์ GitHub ของโปรเจกต์ Library ต่างๆ (เช่น LiquidCrystal-I2C หรือ ESPAsyncTCP) หากต้องการดาวน์โหลดไฟล์ทั้งหมดเป็น .ZIP ต้องกดที่ปุ่มใด?",
    choices: [
      "กดปุ่มสีเขียวที่ชื่อว่า Code แล้วเลือก Download ZIP",
      "กดปุ่ม Issues แล้วเลือก New Issue",
      "กดปุ่ม Pull requests แล้วเลือก Compare",
      "กดปุ่ม Insights แล้วเลือก Network"
    ],
    answer: 0,
    explanation: "เอกสารบทที่ 3 หน้า 11, 18, 22 แสดงภาพและระบุขั้นตอนว่า ให้กดปุ่มสีเขียวที่ชื่อว่า 'Code' -> เลือก 'Download ZIP'",
    source: "เอกสารบทที่ 3 หน้า 11, 18, 22"
  },
  {
    id: "ch3-q13",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "จากภาพหน้าจอ Arduino IDE ในเอกสารบทที่ 3 ปุ่มไอคอนรูป 'เครื่องหมายถูก (✓)' และปุ่มรูป 'ลูกศรชี้ไปทางขวา (→)' ที่มุมซ้ายบนของโปรแกรม มีหน้าที่อะไรตามลำดับ?",
    choices: [
      "เครื่องหมายถูก = บันทึกไฟล์ (Save), ลูกศรชี้ขวา = ลบโค้ดทั้งหมด",
      "เครื่องหมายถูก = ตรวจสอบ/คอมไพล์โค้ด (Verify/Compile), ลูกศรชี้ขวา = อัปโหลดโค้ดลงบอร์ด (Upload)",
      "เครื่องหมายถูก = เปิด Serial Monitor, ลูกศรชี้ขวา = เปิด Library Manager",
      "เครื่องหมายถูก = เชื่อมต่อ WiFi, ลูกศรชี้ขวา = ปิดโปรแกรม"
    ],
    answer: 1,
    explanation: "ในแถบเครื่องมือมาตรฐานของ Arduino IDE (ดังแสดงในเมนู Sketch หน้า 6): ปุ่มเครื่องหมายถูก (✓) คือ Verify/Compile (Ctrl+R) ใช้ตรวจสอบความถูกต้องของโค้ด ส่วนปุ่มลูกศรชี้ขวา (→) คือ Upload (Ctrl+U) ใช้ส่งโปรแกรมลงบอร์ด",
    source: "เอกสารบทที่ 3 หน้า 6"
  },
  {
    id: "ch3-q14",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "ในหน้าต่าง Library Manager เมื่อเราเลือก DHT sensor library by Adafruit แล้วกดปุ่ม Install สังเกตได้อย่างไรว่าการติดตั้งเสร็จสมบูรณ์แล้วตามที่ระบุในเอกสารบทที่ 3 หน้า 9?",
    choices: [
      "โปรแกรม Arduino IDE จะปิดตัวเองลงอัตโนมัติทันที",
      "แถบกราฟสถานะการดาวน์โหลดด้านล่างจะหายไป และมีข้อความสีฟ้าคำว่า INSTALLED ปรากฏขึ้นท้ายชื่อไลบรารี",
      "หน้าจอคอมพิวเตอร์จะเปลี่ยนเป็นสีน้ำเงินทั้งหมด",
      "ชื่อไลบรารีจะถูกลบหายไปจากรายการค้นหา"
    ],
    answer: 1,
    explanation: "เอกสารบทที่ 3 หน้า 9 ระบุว่า 'เมื่อติดตั้งเสร็จแล้วกราฟด้านล่างจะหายไป' และปรากฏสถานะ INSTALLED ข้างชื่อไลบรารี",
    source: "เอกสารบทที่ 3 หน้า 8–9"
  },
  {
    id: "ch3-q15",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "คีย์ลัด (Shortcut Key) สำหรับเปิดหน้าต่าง Serial Monitor ในโปรแกรม Arduino IDE (ปรากฏในเมนู Tools เอกสารบทที่ 3 หน้า 3) คือข้อใด?",
    choices: [
      "Ctrl + Shift + M",
      "Ctrl + Shift + I",
      "Ctrl + Comma (,)",
      "Ctrl + Alt + Delete"
    ],
    answer: 0,
    explanation: "จากภาพเมนู Tools ในเอกสารบทที่ 3 หน้า 3: Manage Libraries คือ Ctrl+Shift+I, Serial Monitor คือ Ctrl+Shift+M, และ Serial Plotter คือ Ctrl+Shift+L",
    source: "เอกสารบทที่ 3 หน้า 3"
  },
  {
    id: "ch3-q16",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "ผู้พัฒนา (Author/Repository Owner) ของไลบรารี ESPAsyncTCP และ ESPAsyncWebServer บน GitHub ตามลิงก์ในเอกสารบทที่ 3 คือชื่อบัญชีใด?",
    choices: [
      "fdebrabander",
      "me-no-dev",
      "teckel12",
      "adafruit"
    ],
    answer: 1,
    explanation: "ในเอกสารบทที่ 3 หน้า 17 และ 21 ลิงก์ GitHub คือ https://github.com/me-no-dev/ESPAsyncTCP และ https://github.com/me-no-dev/ESPAsyncWebServer (ส่วน fdebrabander คือ LCD I2C และ teckel12 คือ NewPing)",
    source: "เอกสารบทที่ 3 หน้า 17 และ 21"
  },
  {
    id: "ch3-q17",
    chapter: 3,
    category: "applied",
    difficulty: "เก็งข้อสอบเน้นๆ",
    question: "ถ้านักศึกษานำคอมพิวเตอร์โน้ตบุ๊กส่วนตัวมาเขียนโปรแกรมในห้อง Lab แล้วพบว่าในเมนู Tools > Board มีแต่บอร์ด Arduino Uno ไม่มีบอร์ด NodeMCU 1.0 (ESP-12E Module) ให้เลือก สาเหตุเกิดจากข้ามขั้นตอนใดในบทที่ 3?",
    choices: [
      "ยังไม่ได้ติดตั้ง Library LiquidCrystal_I2C",
      "ยังไม่ได้เพิ่ม URL ของ esp8266 ใน File > Preferences และยังไม่ได้กด Install แพ็กเกจ esp8266 ใน Boards Manager",
      "ยังไม่ได้เสียบสายไฟเข้าที่ขา A0 ของบอร์ด",
      "ยังไม่ได้เปลี่ยนความเร็ว Baud Rate ใน Serial Monitor"
    ],
    answer: 1,
    explanation: "โดยค่าเริ่มต้น Arduino IDE จะมีเฉพาะบอร์ดตระกูล Arduino AVR (เช่น Uno, Mega) หากต้องการใช้งาน NodeMCU 1.0 (ESP-12E Module) ต้องเพิ่ม Additional Boards Manager URL ของ esp8266 ใน Preferences แล้วเข้าไปกด Install ใน Boards Manager ก่อน (เอกสารบทที่ 3 หน้า 1–5)",
    source: "เอกสารบทที่ 3 หน้า 1–5"
  },
  {
    id: "ch3-q18",
    chapter: 3,
    category: "applied",
    difficulty: "ปานกลาง",
    question: "หากนักศึกษาเขียนโค้ด `#include <LiquidCrystal_I2C.h>` แล้วกด Verify ปรากฏข้อความแจ้งเตือนว่า `LiquidCrystal_I2C.h: No such file or directory` ต้องแก้ไขตามวิธีในบทที่ 3 อย่างไร?",
    choices: [
      "ดาวน์โหลดไฟล์ ZIP ของ Arduino-LiquidCrystal-I2C-library จาก GitHub แล้วนำเข้าผ่านเมนู Sketch > Include Library > Add .ZIP Library",
      "เปลี่ยนบอร์ดจาก NodeMCU 1.0 เป็น Arduino Uno",
      "ถอดสาย USB ออกแล้วเสียบใหม่โดยไม่ต้องลงไฟล์ใดๆ เพิ่ม",
      "ลบคำสั่ง void setup() และ void loop() ออกจากโปรแกรม"
    ],
    answer: 0,
    explanation: "ข้อผิดพลาด `No such file or directory` สำหรับไฟล์ `.h` หมายถึงยังไม่ได้ติดตั้ง Library ของอุปกรณ์นั้นลงใน Arduino IDE ต้องดาวน์โหลดไฟล์ ZIP แล้วติดตั้งผ่านเมนู Sketch > Include Library > Add .ZIP Library ตามขั้นตอนในหน้า 10–13",
    source: "เอกสารบทที่ 3 หน้า 10–13"
  },
  {
    id: "ch3-q19",
    chapter: 3,
    category: "concept",
    difficulty: "พื้นฐาน",
    question: "ในลิงก์ของ LMS บทที่ 3 อาจารย์ได้แนบลิงก์ร้านจำหน่ายอุปกรณ์อิเล็กทรอนิกส์และชุดฝึก IoT ในพื้นที่หาดใหญ่ไว้ 2 แห่ง คือร้านใด?",
    choices: [
      "ร้าน analogread และ ร้านไพศาลอิเล็คโทรนิคส์ สาขาหาดใหญ่",
      "ร้าน Advice และ ร้าน Banana IT",
      "ร้าน JIB และ ร้าน IT City",
      "ร้าน Power Buy และ ร้าน HomePro"
    ],
    answer: 0,
    explanation: "ในหน้า LMS บทที่ 3 (และในโค้ดตัวอย่างบทที่ 5 หน้า 8 `lcd.print(\"analogread.com\");`) มีลิงก์แนะนำร้านอุปกรณ์คือ ร้าน analogread ที่หาดใหญ่ และ ไพศาลอิเล็คโทรนิคส์ สาขาหาดใหญ่",
    source: "LMS บทที่ 3 และ สไลด์บทที่ 5 หน้า 8"
  },
  {
    id: "ch3-q20",
    chapter: 3,
    category: "concept",
    difficulty: "ปานกลาง",
    question: "เมื่อติดตั้งไฟล์ .ZIP ของไลบรารีผ่านเมนู Sketch > Include Library > Add .ZIP Library สำเร็จแล้ว จะมีข้อความแจ้งเตือนสีดำบนแถบสถานะสีเขียวด้านล่างของหน้าต่าง Arduino IDE ว่าอย่างไร (ตามภาพในเอกสารบทที่ 3 หน้า 20)?",
    choices: [
      "Error compiling for board NodeMCU 1.0",
      "Library added to your libraries. Check \"Include library\" menu",
      "Board at COM1 is not available",
      "Done uploading."
    ],
    answer: 1,
    explanation: "จากภาพหน้าจอจริงในเอกสารบทที่ 3 หน้า 20 และ 24 เมื่อกด Open ไฟล์ ZIP เสร็จ แถบสีเขียวด้านล่างจะแสดงข้อความว่า 'Library added to your libraries. Check \"Include library\" menu'",
    source: "เอกสารบทที่ 3 หน้า 20 และ 24"
  }
];
