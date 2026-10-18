window.IOT_CHAPTERS = [
  {
    id: 1,
    code: "CH01",
    title: "ความรู้เบื้องต้น IoT (Introduction to IoT)",
    subtitle: "ความหมาย, M2M, ประโยชน์ 7 ด้าน, สถาปัตยกรรม 3-5 Layers & Cloud/Fog/Edge, บอร์ด MCU vs MPU",
    slideRef: "สไลด์บทที่ 1 ความรู้เบื้องต้น IoT (12 หน้า)",
    examWeight: 6,
    keyTopics: [
      "ความหมายของ IoT และการสื่อสารแบบ M2M (Machine-to-Machine Communication)",
      "ประโยชน์ของ IoT ทั้ง 7 ด้าน: Smart Farm, การแพทย์, การศึกษา (RFID/NFC), การเงิน, ความปลอดภัย (GPS/RFID), อุตสาหกรรม, Smart City",
      "สถาปัตยกรรม IoT แบบ 3-5 Layers (Sensing → Network → Data Processing → Application)",
      "สถาปัตยกรรม Cloud and Fog (EDGE Devices หลักพันล้าน → FOG Nodes หลักล้าน → Cloud Data Center หลักพัน)",
      "ความแตกต่างระหว่างบอร์ด MCU (ไม่มี OS เช่น Arduino, NodeMCU) และ MPU (เป็น SoC ต้องลง OS เช่น Raspberry Pi)"
    ],
    cheatSheet: {
      summary: "บทที่ 1 ปูพื้นฐานแนวคิด Internet of Things (IoT) ตั้งแต่การใช้เซ็นเซอร์รับรู้สภาพแวดล้อมส่งผ่านเครือข่ายเพื่อประมวลผลและสั่งงานอุปกรณ์อัตโนมัติ (M2M) ประโยชน์ในภาคธุรกิจ 7 ด้าน โครงสร้างสถาปัตยกรรมทั้งแบบ Layer และ Cloud/Fog/Edge ตลอดจนการแยกแยะบอร์ดพัฒนาแบบ MCU และ MPU",
      tables: [
        {
          title: "เปรียบเทียบบอร์ดพัฒนา IoT: MCU vs MPU (ออกสอบบ่อยมาก)",
          headers: ["หัวข้อเปรียบเทียบ", "Microcontroller Unit (MCU)", "Microprocessor Unit (MPU)"],
          rows: [
            ["โครงสร้างชิปหลัก", "รวม CPU, Memory และ Peripherals ไว้ในชิปไมโครคอนโทรลเลอร์ขนาดเล็ก", "เป็นแบบ SoC (System On Chip) รวม CPU, GPU, RAM โครงสร้างใกล้เคียงคอมพิวเตอร์ที่สุด"],
            ["ระบบปฏิบัติการ (OS)", "ไม่จำเป็นต้องติดตั้งระบบปฏิบัติการ (เขียนโปรแกรมอัปโหลดคุมขา I/O โดยตรง)", "ต้องติดตั้งระบบปฏิบัติการ เช่น Raspbian, Ubuntu MATE, Android Things, Windows 10 IoT Core"],
            ["ตัวอย่างบอร์ด", "Arduino Uno/Nano/Mega, NodeMCU ESP8266, ESP32", "Raspberry Pi"],
            ["ลักษณะงานเด่น", "งานอิเล็กทรอนิกส์ควบคุม อ่านค่าเซ็นเซอร์ สั่งงานรีเลย์/มอเตอร์ ราคาถูก ใช้งานง่าย", "งานประมวลผลซับซ้อน ต่อพอร์ตภายนอกครบครันเหมือนคอมพิวเตอร์ขนาดเล็ก"]
          ]
        },
        {
          title: "สถาปัตยกรรม IoT (3-5 Layers & Cloud-Fog-Edge)",
          headers: ["ชั้นสถาปัตยกรรม", "หน้าที่และอุปกรณ์สำคัญ", "ลำดับในแผนภาพสไลด์"],
          rows: [
            ["Sensing Layer", "ชั้นล่างสุด: เซ็นเซอร์ตรวจวัดสภาพแวดล้อม (GPS, กล้อง, ไมค์, วัดชีพจร, อุณหภูมิ, แสง)", "ชั้นที่ 1 (ล่างสุด)"],
            ["Network Layer", "ชั้นเครือข่าย/Gateways: ส่งผ่านข้อมูลผ่าน Bluetooth, Wi-Fi, Cellular, Cloud", "ชั้นที่ 2"],
            ["Data Processing Layer", "ชั้นประมวลผล (Processing Unit): CPU, ฐานข้อมูล (Database), วิเคราะห์ข้อมูล", "ชั้นที่ 3"],
            ["Application Layer", "ชั้นบนสุด: แอปพลิเคชันที่ผู้ใช้สัมผัส เช่น Smart Home, Smart Watch, สมาร์ทโฟน, รถยนต์อัจฉริยะ", "ชั้นที่ 4 (บนสุด)"],
            ["EDGE → FOG → Cloud", "EDGE Devices (Billions / พันล้านชิ้น) ↔ FOG Nodes (Millions / ล้านโหนด) ↔ Cloud Data Center (Thousands / พันศูนย์)", "ลำดับสเกลจากล่างขึ้นบน"]
          ]
        }
      ],
      highlights: [
        "ด้านการศึกษาในสไลด์เน้นการใช้ RFID และ NFC บันทึกคะแนนและตรวจสอบการมาเรียน",
        "ด้านการรักษาความปลอดภัยเน้น GPS ติดตามยานพาหนะแจ้งเตือนเข้าสมาร์ทโฟน และ RFID ID Card / สายรัดข้อมือคัดกรองบุคคล",
        "ความรู้พื้นฐานฮาร์ดแวร์ที่ต้องมี: ไฟกระแสตรง (DC), สถานะดิจิทัล, วงจรอนุกรม, วงจรขนาน; ด้านซอฟต์แวร์: ภาษา C, Python หรือ Java"
      ]
    }
  },
  {
    id: 2,
    code: "CH02",
    title: "อุปกรณ์และโปรแกรมที่เกี่ยวข้อง (NodeMCU ESP8266)",
    subtitle: "โครงสร้างบอร์ด NodeMCU ESP8266, หน้าที่ขา Pin ทั้งหมด, ชิป ESP-12E, อินเตอร์เฟส I2C/SPI/UART",
    slideRef: "สไลด์บทที่ 2 อุปกรณ์และโปรแกรมที่เกี่ยวข้อง (9 หน้า)",
    examWeight: 8,
    keyTopics: [
      "ขา D0-D4 (GPIO) และขาพิเศษ I2C: D2 (GPIO4) = SDA, D1 (GPIO5) = SCL สำหรับต่อจอ LCD/OLED",
      "ขา D5-D8 สำหรับ GPIO และอินเตอร์เฟส HSPI, ขา RX/TX สำหรับ Serial",
      "ขา A0 (ADC) แปลงสัญญาณอนาล็อกเป็นดิจิทัล, ขาไฟเลี้ยง 3V (3.3V), VU (5V จาก USB), VIN (รับไฟภายนอกไม่เกิน 5V), G (GND)",
      "ขาควบคุม EN (Active High) และ RST (Active Low), ขา SDIO/SPI (S1, S2, S3, SC, SO, SK)",
      "สเปคชิปหลัก ESP8266 รุ่น ESP-12E: 32-bit, 80-160 MHz, 128 KB RAM + 4 MB Flash, Wi-Fi 802.11 b/g/n"
    ],
    cheatSheet: {
      summary: "บทที่ 2 เจาะลึกรายละเอียดทุกขาของบอร์ด NodeMCU ESP8266 ซึ่งเป็นหัวใจสำคัญของข้อสอบทั้งภาคทฤษฎีและการอ่านโค้ด โดยเฉพาะการจับคู่ชื่อขาบนบอร์ด (D0-D8) กับหมายเลข GPIO จริง และหน้าที่พิเศษของแต่ละขา",
      tables: [
        {
          title: "ตารางจับคู่ขา NodeMCU ESP8266 กับหมายเลข GPIO และหน้าที่พิเศษ (ต้องจำแม่น!)",
          headers: ["ชื่อขาบนบอร์ด", "หมายเลข GPIO", "หน้าที่หลักและอินเตอร์เฟสพิเศษตามสไลด์"],
          rows: [
            ["D0", "GPIO16", "ขาดิจิทัล Input/Output (USER / WAKE)"],
            ["D1", "GPIO5", "ขาดิจิทัล I/O และเป็นขา SCL สำหรับสื่อสารแบบ I2C (เช่น ต่อจอ LCD / OLED)"],
            ["D2", "GPIO4", "ขาดิจิทัล I/O และเป็นขา SDA สำหรับสื่อสารแบบ I2C (เช่น ต่อจอ LCD / OLED)"],
            ["D3", "GPIO0", "ขาดิจิทัล I/O (FLASH)"],
            ["D4", "GPIO2", "ขาดิจิทัล I/O (TXD1 / ไฟ LED บนบอร์ดบางรุ่น)"],
            ["D5", "GPIO14", "ขาดิจิทัล I/O และอินเตอร์เฟส HSPI (HSCLK / SCLK) — ใช้ต่อ Echo ของ Ultrasonic และ LED สีแดงในบท PWM"],
            ["D6", "GPIO12", "ขาดิจิทัล I/O และอินเตอร์เฟส HSPI (HMISO / MISO) — ใช้ต่อ Trig ของ Ultrasonic และ LED สีเหลืองในบท PWM"],
            ["D7", "GPIO13", "ขาดิจิทัล I/O และอินเตอร์เฟส HSPI (HMOSI / RXD2)"],
            ["D8", "GPIO15", "ขาดิจิทัล I/O และอินเตอร์เฟส HSPI (HCS / TXD2) — ใช้ขับมอเตอร์/ENB และ LED สีเขียวในบท PWM"],
            ["RX / TX", "GPIO3 / GPIO1", "ขา GPIO และใช้รับ-ส่งข้อมูลแบบ Serial กับอุปกรณ์อื่น"],
            ["A0 (ADC0)", "ADC0 (TOUT)", "ขา Input อ่านค่าจากเซ็นเซอร์อนาล็อก (Analog) มาแปลงเป็นดิจิทัล (Digital) ช่วง 0–1023"],
            ["3V / G", "3.3V / GND", "3V จ่ายแรงดันไฟ 3.3 โวลต์ / G เป็นขากราวด์ (Ground)"],
            ["VU (V USB)", "5V USB आउटพุต", "ขาที่มีแรงดันไฟ 5 โวลต์ ที่มาจากพอร์ต USB"],
            ["VIN", "External 5V In", "ขารับไฟเข้าจากแหล่งจ่ายภายนอกเพื่อจ่ายให้บอร์ดและอุปกรณ์อื่น (ไฟที่จ่ายควรมีขนาดไม่เกิน 5V)"],
            ["EN / RST", "Enable / Reset", "EN ควบคุมให้โมดูลทำงานแบบ Active High / RST ใช้รีเซ็ตโมดูลเมื่อต่อกราวด์แบบ Active Low"],
            ["S3, S2 / S1, SC, SO, SK", "GPIO10, GPIO9 / SDIO", "ติดต่อ SD Card ผ่านอินเตอร์เฟส SDIO และชุด S1/SC/SO/SK ติดต่อผ่าน SPI ซึ่งเร็วกว่า I2C"]
          ]
        }
      ],
      highlights: [
        "สเปคชิป ESP8266 รุ่น ESP-12E: ซีพียู 32-bit ความถี่ 80–160 MHz, 128 KB internal RAM + 4 MB external Flash, Wi-Fi มาตรฐาน 802.11 b/g/n",
        "บอร์ด NodeMCU V3 ที่ใช้ชิป USB TTL เป็น CH340 หลอดไฟ LED บนบอร์ดสามารถแสดงได้ทั้งสถานะการอัปโหลดโปรแกรมและสถานะการทำงานของโปรแกรม",
        "ระวังข้อสอบหลอกสลับขา I2C: จำไว้ว่า D1 = GPIO5 = SCL (Clock) และ D2 = GPIO4 = SDA (Data)"
      ]
    }
  },
  {
    id: 3,
    code: "CH03",
    title: "การติดตั้งโปรแกรม Arduino IDE และ Library",
    subtitle: "การตั้งค่า Additional Boards Manager URL, การลงบอร์ด ESP8266, การลง Library ผ่าน Manager และไฟล์ .ZIP",
    slideRef: "เอกสารบทที่ 3 การติดตั้ง Arduino IDE & Library (24 หน้า)",
    examWeight: 5,
    keyTopics: [
      "การเพิ่ม URL บอร์ด ESP8266 ที่เมนู File > Preferences > Additional Boards Manager URLs",
      "การติดตั้งแพ็กเกจ esp8266 ที่ Tools > Board > Boards Manager แล้วเลือก NodeMCU 1.0 (ESP-12E Module)",
      "การติดตั้ง Library DHT ผ่าน Manage Libraries ต้องลงคู่กัน 2 ตัว: DHT sensor library และ Adafruit Unified Sensor",
      "การติดตั้ง Library แบบ Add .ZIP Library สำหรับ LCD I2C และ Ultrasonic (NewPing_v1.9.4)",
      "ขั้นตอนพิเศษของการลง ESPAsyncTCP และ ESPAsyncWebServer ที่ต้องเปลี่ยนชื่อตัดคำว่า -master ออกก่อน"
    ],
    cheatSheet: {
      summary: "บทที่ 3 เน้นขั้นตอนปฏิบัติในโปรแกรม Arduino IDE ตั้งแต่การเพิ่่มบอร์ด NodeMCU ESP8266 เข้าไปในระบบ ไปจนถึงวิธีการติดตั้ง Library ทั้ง 2 รูปแบบ (ค้นหาผ่าน Library Manager และการนำเข้าไฟล์ .ZIP จาก GitHub/Bitbucket)",
      tables: [
        {
          title: "สรุปการติดตั้ง Library ทั้งหมดในรายวิชา (จุดออกสอบความจำขั้นตอน)",
          headers: ["ชื่อ Library / อุปกรณ์", "เมนูที่ใช้ติดตั้งใน Arduino IDE", "ชื่อไฟล์ / รายละเอียดสำคัญที่อาจารย์เน้น"],
          rows: [
            ["บอร์ด ESP8266", "File > Preferences แล้วไปที่ Tools > Board > Boards Manager", "URL: http://arduino.esp8266.com/stable/package_esp8266com_index.json แล้วเลือกบอร์ด NodeMCU 1.0 (ESP-12E Module)"],
            ["DHT11 Sensor", "Sketch > Include Library > Manage Libraries... (Ctrl+Shift+I)", "ต้องติดตั้ง 2 ตัวคู่กันเสมอ คือ 1) DHT sensor library (by Adafruit) และ 2) Adafruit Unified Sensor"],
            ["LCD I2C", "Sketch > Include Library > Add .ZIP Library...", "ดาวน์โหลดจาก GitHub (fdebrabander) เลือกไฟล์ Arduino-LiquidCrystal-I2C-library-master"],
            ["Ultrasonic Sensor", "Sketch > Include Library > Add .ZIP Library...", "ดาวน์โหลดจาก Bitbucket เลือกไฟล์ NewPing_v1.9.4"],
            ["ESPAsyncTCP", "Sketch > Include Library > Add .ZIP Library...", "ดาวน์โหลดจาก GitHub (me-no-dev) ได้ไฟล์ ESPAsyncTCP-master ต้องเปลี่ยนชื่อเป็น ESPAsyncTCP ก่อนเปิด"],
            ["ESPAsyncWebServer", "Sketch > Include Library > Add .ZIP Library...", "ดาวน์โหลดจาก GitHub (me-no-dev) ได้ไฟล์ ESPAsyncWebServer-master ต้องเปลี่ยนชื่อเป็น ESPAsyncWebServer ก่อนเปิด"]
          ]
        }
      ],
      highlights: [
        "เวอร์ชันของ Arduino IDE ที่แนะนำในเอกสารคือ Arduino IDE 1.8.19 หรือ Arduino IDE 2.0 RC ดาวน์โหลดจาก https://www.arduino.cc/en/software",
        "คีย์ลัดสำคัญในเมนู Arduino IDE: File > Preferences คือ Ctrl+Comma, Manage Libraries คือ Ctrl+Shift+I, Serial Monitor คือ Ctrl+Shift+M"
      ]
    }
  },
  {
    id: 4,
    code: "CH04",
    title: "เรียนรู้อุปกรณ์ก่อนเรียน + หลอดไฟกระพริบและสวิตช์กับบอร์ด 8266",
    subtitle: "ขั้วหลอด LED, โครงสร้าง Breadboard, รหัสแถบสีตัวต้านทาน, สวิตช์, และการเขียนโค้ด Lap01 / Lab02",
    slideRef: "สไลด์บทที่ 4 LAB EP01 (17 หน้า) + ไฟล์ test01.ino & 1_Switch_1_LED.ino",
    examWeight: 8,
    keyTopics: [
      "ขั้วของหลอด LED: ขายาว = Anode (+), ขาสั้นและด้านปาดแบน (flat side) = Cathode (-)",
      "การเชื่อมต่อภายในของ Breadboard (แถบไฟเลี้ยง + / - แนวยาว vs ช่องเสียบ a-e และ f-j แนวขวาง)",
      "การอ่านค่ารหัสแถบสีตัวต้านทาน 4 แถบ (ดำ 0 ถึง ขาว 9, ทอง ±5%, เงิน ±10%, ไม่มีแถบสี ±20%)",
      "การวิเคราะห์โค้ดไฟกระพริบ test01.ino (ใช้ !digitalRead(LED_PIN) สลับสถานะ) และ test03 (ขา 13)",
      "การวิเคราะห์โค้ดปุ่มกดสวิตช์ 1_Switch_1_LED.ino ทั้งแบบกดติด-ปล่อยดับ และแบบสลับลอจิกกดดับ-ปล่อยติด"
    ],
    cheatSheet: {
      summary: "บทที่ 4 เป็นบทปฏิบัติการฮาร์ดแวร์บทแรก ต้องแม่นทั้งการดูขา LED การไล่วงจรบน Breadboard การคำนวณค่าตัวต้านทานจากแถบสี และการอ่านโค้ด digitalWrite / digitalRead / delay ในฟังก์ชัน setup() และ loop()",
      tables: [
        {
          title: "ตารางรหัสแถบสีตัวต้านทาน 4 แถบ (จากสไลด์บทที่ 4 หน้า 5)",
          headers: ["สี", "แถบที่ 1 (หลักหน้า)", "แถบที่ 2 (หลักที่สอง)", "แถบที่ 3 (ตัวคูณ)", "แถบที่ 4 (ความคลาดเคลื่อน)"],
          rows: [
            ["ดำ (Black)", "0", "0", "1 (10⁰)", "-"],
            ["น้ำตาล (Brown)", "1", "1", "10¹ (×10)", "±1%"],
            ["แดง (Red)", "2", "2", "10² (×100)", "±2%"],
            ["ส้ม (Orange)", "3", "3", "10³ (×1,000 / 1k)", "-"],
            ["เหลือง (Yellow)", "4", "4", "10⁴ (×10,000 / 10k)", "-"],
            ["เขียว (Green)", "5", "5", "10⁵ (×100,000)", "-"],
            ["น้ำเงิน (Blue)", "6", "6", "10⁶ (×1,000,000 / 1M)", "-"],
            ["ม่วง (Violet)", "7", "7", "-", "-"],
            ["เทา (Grey)", "8", "8", "-", "-"],
            ["ขาว (White)", "9", "9", "-", "-"],
            ["ทอง (Gold)", "-", "-", "10⁻¹ (×0.1)", "±5%"],
            ["เงิน (Silver)", "-", "-", "10⁻² (×0.01)", "±10%"],
            ["ไม่มีแถบสี", "-", "-", "-", "±20%"]
          ]
        }
      ],
      highlights: [
        "ตัวอย่างค่าความต้านทานที่ใช้ในวิชา: แดง-แดง-น้ำตาล-ทอง = 22 × 10¹ = 220 Ω ±5% | เหลือง-ม่วง-ส้ม-ทอง = 47 × 10³ = 47 kΩ ±5%",
        "ในไฟล์ test01.ino คำสั่ง digitalWrite(LED_PIN, !digitalRead(LED_PIN)); ใช้เครื่องหมาย ! (NOT) เพื่อกลับสถานะขา D4 สลับติด-ดับทุกๆ รอบ",
        "ฟังก์ชัน delay() รับค่าเป็นมิลลิวินาที (ms): delay(500) = 0.5 วินาที, delay(1000) = 1 วินาที, delay(3000) = 3 วินาที, delay(5000) = 5 วินาที"
      ]
    }
  },
  {
    id: 5,
    code: "CH05",
    title: "ทำความรู้จัก ADC & LCD 16x2",
    subtitle: "วงจรแปลงสัญญาณอนาล็อกเป็นดิจิทัล (ADC), โพเทนชิโอมิเตอร์ (Pot), และการเขียนโปรแกรมแสดงผลจอ LCD 16x2 I2C",
    slideRef: "สไลด์บทที่ 5 ทำความรู้จัก ADC & LCD (12 หน้า)",
    examWeight: 7,
    keyTopics: [
      "หลักการทำงานของ ADC (Analog to Digital Converter) บนขา A0 ของ ESP8266 และคำสั่ง analogRead(A0)",
      "โครงสร้างของโพเทนชิโอมิเตอร์ (Potentiometer) ตัวต้านทานปรับค่าได้ 3 ขั้ว และการต่อวงจรเข้าขา A0",
      "ขนาดและการแสดงผลของจอ LCD 16x2 (2 แถว แถวละ 16 ตัวอักษร) และการต่อขา I2C 4 ขา (GND, VCC->Vin, SDA->D2, SCL->D1)",
      "การประกาศ LiquidCrystal_I2C lcd(0x27, 16, 2); และลำดับพารามิเตอร์ใน lcd.setCursor(col, row)"
    ],
    cheatSheet: {
      summary: "บทที่ 5 เชื่อมโยงการอ่านค่าอนาล็อกจากตัวต้านทานปรับค่าได้ (Potentiometer) ผ่านขา A0 เข้ากับการแสดงผลข้อความและตัวเลขออกทางหน้าจอ LCD 16x2 ผ่านโมดูล I2C ซึ่งใช้สายสัญญาณเพียง 2 เส้นคือ SDA (D2) และ SCL (D1)",
      tables: [
        {
          title: "ตารางการเชื่อมต่อขาจอ LCD 16x2 I2C กับบอร์ด NodeMCU ESP8266 (สไลด์หน้า 6–8)",
          headers: ["ลำดับขาโมดูล LCD", "ชื่อขาบนโมดูล LCD", "ความหมาย / หน้าที่", "ต่อเข้ากับขาของ ESP8266"],
          rows: [
            ["Pin 1", "GND", "Ground (กราวด์)", "GND (G)"],
            ["Pin 2", "VCC", "5 Vdc Input (ไฟเลี้ยง 5 โวลต์)", "Vin (หรือ VU)"],
            ["Pin 3", "SDA", "Serial Data (สายข้อมูล I2C)", "D2 (GPIO 4)"],
            ["Pin 4", "SCL", "Serial Clock (สายสัญญาณนาฬิกา I2C)", "D1 (GPIO 5)"]
          ]
        },
        {
          title: "คำสั่งมาตรฐานของไลบรารี LiquidCrystal_I2C (สไลด์หน้า 8)",
          headers: ["คำสั่งในโค้ด", "หน้าที่การทำงาน"],
          rows: [
            ["LiquidCrystal_I2C lcd(0x27, 16, 2);", "กำหนด I2C Address เป็น 0x27 ขนาดจอ 16 ตัวอักษร 2 แถว"],
            ["lcd.begin();", "เริ่มต้นการทำงานของหน้าจอ LCD"],
            ["lcd.display();", "เปิดการแสดงผลข้อความบนหน้าจอ"],
            ["lcd.backlight();", "เปิดไฟพื้นหลัง (Backlight) ของหน้าจอ LCD"],
            ["lcd.clear();", "ล้างข้อความทั้งหมดบนหน้าจอ LCD"],
            ["lcd.setCursor(col, row);", "ย้ายเคอร์เซอร์ไปที่คอลัมน์ col (0–15) และแถว row (0 = แถวบน, 1 = แถวล่าง)"],
            ["lcd.print(\"...\");", "แสดงข้อความหรือค่าตัวแปรออกทางหน้าจอ ณ ตำแหน่งเคอร์เซอร์ปัจจุบัน"]
          ]
        }
      ],
      highlights: [
        "ระวังโดนหลอกเรื่องพิกัด lcd.setCursor(col, row): ตัวเลขตัวแรกคือ คอลัมน์ (แนวนอน 0–15) ตัวเลขตัวที่สองคือ แถว (แนวตั้ง 0 คือแถวที่ 1 บนสุด, 1 คือแถวที่ 2 ล่างสุด)",
        "ตัวอย่างในสไลด์หน้า 8: lcd.setCursor(0, 0) พิมพ์ \"num = \", lcd.setCursor(9, 0) พิมพ์ \"ESP8266\", lcd.setCursor(0, 1) พิมพ์ \"analogread.com\" และใน loop() ใช้ lcd.setCursor(6, 0) พิมพ์ค่าตัวแปร num ที่เพิ่มขึ้นทีละ 1 ทุกๆ 1 วินาที"
      ]
    }
  },
  {
    id: 6,
    code: "CH06",
    title: "Sensor (LDR, Ultrasonic HC-SR04, DHT11) & Function",
    subtitle: "เซนเซอร์วัดแสง LDR, อัลตร้าโซนิค HC-SR04, เซนเซอร์วัดอุณหภูมิและความชื้น DHT11, และพื้นฐาน Function",
    slideRef: "สไลด์บทที่ 6 Sensor (16 หน้า)",
    examWeight: 8,
    keyTopics: [
      "เซนเซอร์วัดแสง LDR (Light Dependent Resistor): ช่วงค่า 0–1023 บนขา A0 และข้อควรรู้เมื่อเริ่มใช้งานใหม่ (ค่า 0–28)",
      "Ultrasonic Sensor (HC-SR04): คลื่นความถี่ 40 kHz, ระยะวัด 2–400 cm, ขา Trig=GPIO12(D6) / Echo=GPIO14(D5)",
      "การคำนวณระยะทาง Ultrasonic: pulseIn(echoPin, HIGH) และสูตร distanceCm = duration * SOUND_VELOCITY / 2",
      "เซนเซอร์ DHT11: โมดูล 3 ขา (มีตัวต้านทาน Pull-Up 10K Ω บนบอร์ด) คำสั่ง dht.readHumidity() และ dht.readTemperature()",
      "การแยกโค้ดออกจาก void loop() มาสร้างเป็น Function ย่อย เช่น void HelloWorld()"
    ],
    cheatSheet: {
      summary: "บทที่ 6 รวบรวมเซนเซอร์หลักทั้ง 3 ชนิดที่ใช้ในงาน IoT ได้แก่ LDR (วัดความสว่างแบบอนาล็อก), Ultrasonic HC-SR04 (วัดระยะทางด้วยคลื่นเสียง 40 kHz), และ DHT11 (วัดอุณหภูมิและความชื้นแบบดิจิทัล) พร้อมการเขียนฟังก์ชันย่อย",
      tables: [
        {
          title: "เปรียบเทียบเซนเซอร์ทั้ง 3 ชนิดในบทที่ 6",
          headers: ["เซนเซอร์", "สิ่งที่ตรวจวัด / ช่วงค่า", "การต่อขากับ ESP8266 ในสไลด์", "คำสั่ง / สูตรสำคัญในโค้ด"],
          rows: [
            ["LDR", "ความสว่างของแสง (ค่าอนาล็อก 0 ถึง 1023)", "ต่อวงจรแบ่งแรงดันเข้าขา A0", "SenserValue = analogRead(analogInPin);"],
            ["Ultrasonic (HC-SR04)", "ระยะทางวัตถุ (2 cm ถึง 400 cm) ด้วยคลื่นความถี่ 40 kHz", "VCC→VIN, Trig→GPIO12 (D6), Echo→GPIO14 (D5), GND→GND", "duration = pulseIn(echoPin, HIGH);\ndistanceCm = duration * 0.034 / 2;"],
            ["DHT11", "ความชื้นสัมพัทธ์ (Humidity) และอุณหภูมิ (Temperature)", "Signal (S)→D1, Vcc (+)→3V/Vin, GND (-)→GND (โมดูลมี 10K Pull-Up ในตัว)", "float h = dht.readHumidity();\nfloat t = dht.readTemperature();"]
          ]
        }
      ],
      highlights: [
        "ทำไมสูตรคำนวณระยะทาง Ultrasonic ต้องหาร 2? เพราะค่า duration จาก pulseIn(echoPin, HIGH) คือเวลาที่คลื่นเสียงเดินทางจากขา Trig ไปกระทบวัตถุแล้วสะท้อนกลับมาที่ขา Echo (ไป+กลับ)",
        "ในการสั่งให้ขา Trig ปล่อยคลื่นอัลตร้าโซนิค ต้องสั่ง digitalWrite(trigPin, HIGH); แล้วหน่วงเวลาด้วย delayMicroseconds(10); (10 ไมโครวินาที) ก่อนสั่งเป็น LOW",
        "ค่าคงที่ในโค้ด Ultrasonic ของอาจารย์: SOUND_VELOCITY = 0.034 (ซม./ไมโครวินาที) และ CM_TO_INCH = 0.393701"
      ]
    }
  },
  {
    id: 7,
    code: "CH07",
    title: "Pulse Width Modulation (PWM)",
    subtitle: "รูปคลื่นสี่เหลี่ยม Square Wave, Duty Cycle, คำสั่ง analogWrite(), ลูปเพิ่ม/ลดความสว่าง LED และ Serial.parseInt()",
    slideRef: "สไลด์บทที่ 7 Pulse Width Modulation (11 หน้า)",
    examWeight: 6,
    keyTopics: [
      "หลักการของ PWM: สัญญาณดิจิทัลรูปคลื่นสี่เหลี่ยม (Square Wave) ที่มีความถี่/คาบเวลา (Period) คงที่ แต่ปรับความกว้างพัลส์ (Pulse Width)",
      "ความหมายของ Duty Cycle (% ของสถานะ HIGH เทียบกับ 1 คาบเวลา Full Cycle เช่น 10%, 40%, 80%)",
      "การใช้คำสั่ง analogWrite(pin, duty) บน ESP8266 (ช่วงค่า duty 0 ถึง 1023) เพื่อหรี่ไฟ LED 3 ดวง (GPIO 14/D5, 12/D6, 15/D8)",
      "การใช้ลูป for สองลูปคู่กันเพื่อค่อยๆ เพิ่มความสว่าง (duty+=10) และค่อยๆ ลดความสว่าง (duty-=10)",
      "การรับค่าตัวเลขจาก Serial Monitor ด้วย Serial.available() > 0 และ duty = Serial.parseInt()"
    ],
    cheatSheet: {
      summary: "บทที่ 7 อธิบายเทคนิคการใช้สัญญาณดิจิทัลจำลองเป็นแรงดันอนาล็อกด้วยวิธี PWM (Pulse Width Modulation) เพื่อใช้หรี่ความสว่างหลอดไฟ LED หรือปรับความเร็วมอเตอร์ โดยควบคุมผ่านสัดส่วน Duty Cycle และคำสั่ง analogWrite()",
      tables: [
        {
          title: "สรุปขาและคำสั่งสำคัญใน Workshop บทที่ 7 (PWM)",
          headers: ["องค์ประกอบ / คำสั่ง", "รายละเอียดตามสไลด์ของอาจารย์"],
          rows: [
            ["ขาที่ต่อหลอด LED 3 สี", "ledRed = 14 (GPIO14 หรือ D5), ledYellow = 12 (GPIO12 หรือ D6), ledGreen = 15 (GPIO15 หรือ D8)"],
            ["ช่วงค่า PWM (duty)", "ตั้งแต่น้อยสุด 0 (ไฟดับ 0% duty) ถึงสูงสุด 1023 (สว่างสุด 100% duty บน ESP8266 ในสไลด์)"],
            ["for (duty=0; duty<1023; duty+=10)", "ลูปค่อยๆ ปรับแสงไฟสว่างขึ้นเรื่อยๆ ครั้งละ 10 โดยมี delay(50); คั่นแต่ละระดับ"],
            ["for (duty=1023; duty>0; duty-=10)", "ลูปค่อยๆ ลดความสว่างลงครั้งละ 10 (ถ้าไม่มีลูปนี้ หลอดไฟจะสว่างสุดแล้วดับวูบไปเริ่มต้นใหม่ทันที)"],
            ["if (Serial.available() > 0)", "ตรวจสอบว่ามีข้อมูลถูกส่งเข้ามาทางหน้าต่าง Serial Monitor หรือไม่"],
            ["duty = Serial.parseInt();", "อ่านข้อมูลตัวเลขจำนวนเต็ม (Integer) ที่ผู้ใช้พิมพ์ใน Serial Monitor มาเก็บไว้ในตัวแปร duty"]
          ]
        }
      ],
      highlights: [
        "จำภาพเปรียบเทียบ Duty Cycle ในสไลด์หน้า 5: 10% duty (คลื่น HIGH แคบมาก หลอดไฟแทบไม่สว่าง), 40% duty (คลื่น HIGH กว้างขึ้น หลอดสว่างปานกลาง), 80% duty (คลื่น HIGH กว้างเกือบเต็ม Full Cycle หลอดไฟสว่างจ้า)",
        "ระวังความแตกต่างในสไลด์หน้า 11 (Arduino Uno): โค้ดตัวอย่างใช้ digitalWrite(11, HIGH) และ digitalWrite(11, LOW) ในลูป for เพื่อเปรียบเทียบกับการใช้ analogWrite()"
      ]
    }
  },
  {
    id: 8,
    code: "CH08",
    title: "Actuators (Motor, L298N, Relay) และการเขียน Function",
    subtitle: "การขับมอเตอร์ DC, โมดูล L298N H-Bridge, รีเลย์ (Relay COM/NC/NO), และการเขียนฟังก์ชันภาษา C",
    slideRef: "สไลด์บทที่ 8 Actuator (38 หน้า)",
    examWeight: 9,
    keyTopics: [
      "การขับมอเตอร์ DC เบื้องต้นด้วย MOSFET (ขา motorPin = 15 / D8) ร่วมกับตัวต้านทาน 220Ω และ 47kΩ",
      "โครงสร้างและขาของโมดูล L298N Dual H-Bridge (OUT1-4, ENA/ENB รับ PWM คุมความเร็ว, IN1-IN4 คุมทิศทาง, 5V Regulator Jumper)",
      "ตารางทิศทางการหมุนของ L298N: IN1=1,IN2=1 (OFF) | IN1=1,IN2=0 (Backward) | IN1=0,IN2=1 (Forward) | IN1=0,IN2=0 (OFF)",
      "ส่วนประกอบและหลักการทำงานของ Relay: ขดลวด (Coil) และหน้าสัมผัส (Contact: COM, NC ปกติปิด, NO ปกติเปิด) และการสั่งงานแบบ Active LOW",
      "โครงสร้างการเขียน Function ในภาษา C (Return datatype, Function name, Parameters, Return statement)"
    ],
    cheatSheet: {
      summary: "บทที่ 8 เป็นบทใหญ่และมีเนื้อหาออกสอบเยอะที่สุด ครอบคลุมอุปกรณ์ Actuator ทั้งการขับมอเตอร์กระแสตรงด้วย L298N การใช้รีเลย์ (Relay) ตัดต่อวงจรไฟบ้าน/อุปกรณ์กินกระแสสูง และการแยกโครงสร้างโปรแกรมออกเป็น C Function ทั้งแบบไม่คืนค่า (void) และแบบคืนค่า (return)",
      tables: [
        {
          title: "ตารางทิศทางการหมุนของ L298N DC Motor Driver (สไลด์หน้า 9 — เก็งข้อสอบ 100%)",
          headers: ["สถานะขา IN1", "สถานะขา IN2", "การทำงานของมอเตอร์ (Motor Action)"],
          rows: [
            ["1 (HIGH)", "1 (HIGH)", "OFF (มอเตอร์หยุดทำงาน)"],
            ["1 (HIGH)", "0 (LOW)", "Backward (หมุนถอยหลัง)"],
            ["0 (LOW)", "1 (HIGH)", "Forward (หมุนเดินหน้า)"],
            ["0 (LOW)", "0 (LOW)", "OFF (มอเตอร์หยุดทำงาน)"]
          ]
        },
        {
          title: "เปรียบเทียบขาหน้าสัมผัสของ Relay (COM, NC, NO) และการสั่งงาน (สไลด์หน้า 15 & 25)",
          headers: ["ขาหน้าสัมผัส", "ชื่อเต็ม", "สภาวะปกติ (ยังไม่จ่ายไฟเข้าขดลวด)", "เมื่อมีกระแสไหลผ่านขดลวด (รีเลย์ทำงาน)", "การนำไปใช้งาน"],
          rows: [
            ["COM (C)", "Common", "ขาร่วมที่ต่ออยู่กับขา NC", "สลับหน้าสัมผัสไปต่อเข้ากับขา NO", "เป็นขาหลักสำหรับต่อสายไฟเข้าหน้าสวิตช์"],
            ["NC", "Normally Close (ปกติปิด)", "ต่อเชื่อมถึงกันกับขา COM (ไฟไหลผ่านได้)", "ลอย / ไม่สัมผัสกับขา COM (ตัดวงจร)", "ต่อกับอุปกรณ์ที่ต้องการให้ทำงานตลอดเวลา"],
            ["NO", "Normally Open (ปกติเปิด)", "ลอยอยู่ ไม่ต่อกับขา COM (ไฟไม่ไหล)", "เชื่อมต่อกับขา COM (ครบวงจร ไฟไหลผ่าน)", "ต่อกับอุปกรณ์ที่ต้องการให้ทำงานเฉพาะช่วงเวลาที่สั่งงาน"]
          ]
        }
      ],
      highlights: [
        "ในโค้ด Workshop 2 Test Relay (สไลด์หน้า 25): เมื่อต่อแบบ Normally Open (NO) การสั่ง digitalWrite(relay, LOW); จะทำให้กระแสไหล (Relay Working) และการสั่ง digitalWrite(relay, HIGH); จะหยุดการไหลของกระแส (Current not Flowing)",
        "ขา ENA และ ENB บนบอร์ด L298N ใช้รับสัญญาณ PWM (ผ่านคำสั่ง analogWrite) เพื่อปรับความเร็วมอเตอร์ A และ B ส่วนขา IN1/IN2 และ IN3/IN4 ใช้ควบคุมทิศทาง",
        "โครงสร้าง C Function (สไลด์หน้า 29): ถ้าระบุชนิดข้อมูลหน้าชื่อฟังก์ชันเป็น int (เช่น int myMultiplyFunction(int x, int y)) ต้องมีคำสั่ง return ค่าชนิด int กลับไป แต่ถ้าไม่ต้องการส่งค่ากลับ ให้ใช้ชนิดข้อมูลเป็น void"
      ]
    }
  },
  {
    id: 9,
    code: "CH09",
    title: "Blynk และการเชื่อมต่อ WiFi",
    subtitle: "สถาปัตยกรรม Blynk (App, Server, Libraries), การเชื่อมต่อ WiFi (ESP8266WiFi.h), และการควบคุม LED/LCD ผ่าน Virtual Pin",
    slideRef: "สไลด์บทที่ 9 Blynk (7 หน้า) + ไฟล์โค้ด Print_IP_Address.ino",
    examWeight: 6,
    keyTopics: [
      "สถาปัตยกรรมของระบบ Blynk 3 ส่วน: Blynk App (มือถือ), Blynk Server (แม่ข่าย), และ Blynk Libraries (บนบอร์ดลูกข่าย)",
      "การเชื่อมต่อ WiFi ด้วยไลบรารี ESP8266WiFi.h: คำสั่ง WiFi.begin(ssid, password), WiFi.status() != WL_CONNECTED, และ WiFi.localIP()",
      "ค่าคงที่ 3 บรรทัดแรกจาก Blynk Cloud: BLYNK_TEMPLATE_ID, BLYNK_TEMPLATE_NAME, BLYNK_AUTH_TOKEN",
      "การรับค่าปุ่มกดจากแอปผ่าน Virtual Pin ด้วยฟังก์ชัน BLYNK_WRITE(V0) และคำสั่ง param.asInt()",
      "การทำงานร่วมกันของ Blynk กับจอ LCD 16x2 และหลอดไฟ LED (Blynk.begin(auth, ssid, pass) ใน setup และ Blynk.run() ใน loop)"
    ],
    cheatSheet: {
      summary: "บทที่ 9 เป็นบทสรุปการนำบอร์ด NodeMCU ESP8266 ออกสู่อินเทอร์เน็ตจริง ทั้งการเชื่อมต่อกับ Router WiFi เพื่อขอรับ IP Address และการผูกกับแพลตฟอร์ม Blynk เพื่อสั่งเปิด-ปิดไฟ LED และแสดงสถานะข้อความบนจอ LCD ผ่านสมาร์ทโฟน",
      tables: [
        {
          title: "สรุปคำสั่งสำคัญในการเชื่อมต่อ WiFi และ Blynk (จาก Print_IP_Address.ino และสไลด์บทที่ 9)",
          headers: ["คำสั่ง / โครงสร้างโค้ด", "หน้าที่การทำงาน"],
          rows: [
            ["#include <ESP8266WiFi.h>", "เรียกใช้ไลบรารีมาตรฐานสำหรับเชื่อมต่อ Wi-Fi ของบอร์ด ESP8266"],
            ["#include <BlynkSimpleEsp8266.h>", "เรียกใช้ไลบรารี Blynk สำหรับบอร์ด ESP8266"],
            ["WiFi.begin(ssid, password);", "เริ่มต้นสั่งให้บอร์ดเชื่อมต่อเข้ากับเครือข่าย WiFi ตามชื่อ ssid และรหัสผ่าน password"],
            ["while (WiFi.status() != WL_CONNECTED)", "วนลูปรอตราบใดที่สถานะการเชื่อมต่อ WiFi ยังไม่สำเร็จ (พิมพ์จุด . ทุก 500 ms)"],
            ["WiFi.localIP()", "คืนค่าหมายเลข IP Address ของบอร์ดที่ได้รับแจกมาจาก Router"],
            ["BLYNK_TEMPLATE_ID / NAME / AUTH_TOKEN", "ข้อมูล 3 บรรทัดแรกสุดของโค้ดที่ได้จากการสร้าง Template และอุปกรณ์บนระบบ Blynk"],
            ["BLYNK_WRITE(V0) { ... }", "ฟังก์ชันที่ถูกเรียกอัตโนมัติเมื่อมีการส่งค่ามาจากแอป Blynk ที่ขา Virtual Pin V0"],
            ["param.asInt()", "อ่านค่าที่ส่งมาจาก Widget ปุ่มกดในแอป Blynk แปลงเป็นตัวเลขจำนวนเต็ม (เช่น 1 หรือ 0)"],
            ["Blynk.begin(auth, ssid, pass);", "คำสั่งใน setup() เพื่อเชื่อมต่อ WiFi และยืนยันตัวตนเข้าสู่ Blynk Server ด้วย Token"],
            ["Blynk.run();", "คำสั่งใน loop() ที่ต้องทำงานตลอดเวลาเพื่อรักษาการเชื่อมต่อและรับ-ส่งข้อมูลกับ Blynk Server"]
          ]
        }
      ],
      highlights: [
        "ในโค้ด Blynk_LCD_LED.ino (สไลด์หน้า 5–6): กำหนด #define LED1_PIN D3 เมื่อกดปุ่ม V0 ในแอป (buttonState == 1) จะสั่ง digitalWrite(LED1_PIN, HIGH) และแสดง \"LED 1: ON\" ที่บรรทัดแรก (0,0) ส่วนบรรทัดที่สองแสดง \"IF Process\" ที่ตำแหน่ง lcd.setCursor(3, 1)",
        "กฎเหล็กของการสอบปลายภาควิชานี้ (ประกาศใน LMS): ข้อสอบปรนัย 60 ข้อ (30 คะแนน) ตัวเลือกในข้อสอบมี 4 ตัว (A, B, C, D) แต่กระดาษคำตอบคอมพิวเตอร์มี 5 ช่อง (A, B, C, D, E) ต้องใช้ดินสอ 2B เท่านั้น และช่อง Student ID ให้ฝนเฉพาะตัวเลข 3 ตัวหลังสุด!"
      ]
    }
  }
];
