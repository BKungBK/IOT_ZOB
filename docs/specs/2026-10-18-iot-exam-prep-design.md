# Design Specification: RUTS 05413303 IoT Exam Prep Workbench

## 1. Overview & Shared Understanding
- **Target Course:** `05413303 อินเทอร์เน็ตของสรรพสิ่งเพื่อธุรกิจ` (ผศ.จตุพร จิรันดร)
- **Source Material Verified:**
  - **บทที่ 1:** ความรู้เบื้องต้น IoT (ความหมาย, M2M, ประโยชน์ 7 ด้าน, สถาปัตยกรรม 3-5 Layers & Cloud/Fog/Edge, พื้นฐาน Hardware/Software, บอร์ด MCU vs MPU vs Arduino)
  - **บทที่ 2:** อุปกรณ์และโปรแกรมที่เกี่ยวข้อง (ส่วนประกอบและขาของบอร์ด NodeMCU ESP8266: D0-D8, SDA/SCL บน D2/D1, A0, VU, VIN, S1-S3/SC/SO/SK, EN, RST, ชิป ESP-12E 32-bit 80-160MHz 128KB RAM + 4MB Flash, Wi-Fi 802.11 b/g/n)
  - **บทที่ 3:** การติดตั้ง Arduino IDE (1.8.19 / 2.0 RC), การเพิ่ม Additional Boards Manager URL ของ ESP8266, การติดตั้ง Library ผ่าน Library Manager (`DHT sensor library` + `Adafruit Unified Sensor`) และแบบ Add .ZIP Library (`LiquidCrystal_I2C`, `NewPing_v1.9.4`, การเปลี่ยนชื่อตัด `-master` ของ `ESPAsyncTCP` และ `ESPAsyncWebServer`)
  - **บทที่ 4:** อุปกรณ์พื้นฐานและการต่อวงจร (LED ขา Anode/Cathode, โครงสร้าง Breadboard, ตารางรหัสแถบสีตัวต้านทาน 4 แถบ, Switch, โค้ด `test01.ino` Toggle ขา D4 ด้วย `!digitalRead()`, `test03` ขา 13, และ `1_Switch_1_LED.ino` ทั้งแบบ Active High และสลับลอจิก)
  - **บทที่ 5:** ADC & LCD 16x2 (วงจรแปลงสัญญาณอนาล็อกเป็นดิจิทัลขา A0 0-1023, โพเทนชิโอมิเตอร์ 3 ขา, จอ LCD 16x2 I2C ขา GND/VCC/SDA=D2/SCL=D1, Address `0x27`, คำสั่ง `lcd.begin()`, `lcd.backlight()`, `lcd.clear()`, `lcd.setCursor(col, row)`, `lcd.print()`)
  - **บทที่ 6:** Sensor & Function เบื้องต้น (LDR ช่วงค่า 0-1023 และอาการเริ่มต้น 0-28, Ultrasonic HC-SR04 ความถี่ 40kHz ระยะ 2-400cm ขา Trig=D6/GPIO12 Echo=D5/GPIO14 คำสั่ง `pulseIn()` และสูตร `duration * 0.034 / 2`, DHT11 รุ่นโมดูล 3 ขา Pull-up 10K Ohm คำสั่ง `dht.readHumidity()` / `dht.readTemperature()`, และการทำงานของ Function `void HelloWorld()`)
  - **บทที่ 7:** Pulse Width Modulation (PWM รูปคลื่นสี่เหลี่ยม Square Wave, Duty Cycle %, คำสั่ง `analogWrite(pin, duty)` ช่วง 0-1023 บน ESP8266 ขา GPIO14(D5)/12(D6)/15(D8), ลูป `for` เพิ่ม/ลดความสว่าง, และการรับค่าผ่าน `Serial.available()` + `Serial.parseInt()`)
  - **บทที่ 8:** Actuators & C Functions (การขับมอเตอร์ผ่าน MOSFET + R 220Ω / 47kΩ, โมดูล L298N Dual H-Bridge ขา ENA/ENB/IN1-IN4/5V Jumper และตารางทิศทาง IN1/IN2 Forward/Backward/OFF, โมดูล Relay โครงสร้าง Coil & Contact ขา COM/NC/NO การทริกเกอร์แบบ Active LOW, และโครงสร้าง C Function ทั้งแบบ `void` และมีค่า `return`)
  - **บทที่ 9:** Blynk & WiFi Connect (โครงสร้าง Blynk App - Blynk Server - Blynk Libraries, โค้ด `Print_IP_Address.ino` ด้วย `ESP8266WiFi.h` / `WiFi.begin()` / `WiFi.status() != WL_CONNECTED` / `WiFi.localIP()`, และโค้ด `Blynk_Version_1.ino` / `Blynk_LCD_LED.ino` ด้วย `BLYNK_TEMPLATE_ID`, `BlynkSimpleEsp8266.h`, `BLYNK_WRITE(V0)`, `param.asInt()`, `Blynk.begin()`, `Blynk.run()`)
  - **ข้อสอบปลายภาค:** 60 ข้อ (ข้อละ 1 คะแนน คิดเป็น 30% ของเกรดรวม), ตัวเลือก A B C D บนกระดาษคำตอบคอมพิวเตอร์ที่มี A B C D E, ฝนรหัสนักศึกษา 3 ตัวท้ายด้วยดินสอ 2B

## 2. Architecture & Component Isolation
- `index.html`: Semantic application shell with 4 primary workspaces:
  1. **ฝึกทำข้อสอบรายบท (Chapter & Topic Practice)**
  2. **จำลองสอบปลายภาค 60 ข้อ (Final Exam 60-Question OMR Simulator)**
  3. **คลังทบทวนจุดอ่อน & ข้อปักหมุด (Mistake Retry & Bookmarks)**
  4. **สรุปเนื้อหาเก็งสอบ & ผังขาฮาร์ดแวร์ (9-Chapter Cheat-Sheets & Hardware Pinout Reference)**
- `styles.css`: Clean token-based CSS implementing the Hardware Lab & OMR Exam Workbench aesthetic (Light & Dark themes, responsive layout, tabular numerals, OMR bubble grid, syntax-highlighted Arduino code blocks).
- `data/chapters.js`: Structured metadata and comprehensive study cheat-sheets (pinout tables, resistor color code interactive reference, L298N truth table, key code templates) for all 9 chapters.
- `data/questions-ch1-ch5.js` & `data/questions-ch6-ch9.js`: 180 meticulously authored 4-choice questions (20 per chapter × 9 chapters) with full code snippets, difficulty tags, category tags (`concept`, `hardware`, `code`, `applied`), detailed explanations, choice-by-choice distractor breakdowns, and slide/file citations.
- `app.js`: Exam engine, instant feedback inspector, 60-question OMR simulator (with 3-digit Student ID header, A–E bubble sheet warning if E is clicked, timer, and post-exam chapter radar/breakdown), filtering/search, keyboard navigation (`1-4` or `A-D`, `Enter`/`ArrowRight`, `B` for bookmark), and `localStorage` mastery persistence.
