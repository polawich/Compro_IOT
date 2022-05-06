
![Logo](https://cdn.discordapp.com/attachments/950776439643443231/971790818958540911/kk.png)


# KUK KUK Project 🐣

โปรเจค เกี่ยวกับ Smart Home เปิดปิดไฟในเเต่ละห้อง โดยใช้ Line Oa (Official account) เเละใช้ Service ที่ชื่อว่า Line massage Api ในการรับค่า เเล้ว พวกเราใช้ Dialogflow ในการับค่าจาก Line เเล้วส่งต่อไปที่ Mqtt Server เเล้วทำการสั่งคำสั่งให้กับ Wokwi ในการเปิดไฟเเละปิดไฟ

## Server Diagram 🖥️

![App Screenshot](https://cdn.discordapp.com/attachments/892342982148243466/972002105340608613/unknown.png)

## องค์ประกอบในส่วนต่างๆ

 - [Poster 📜](https://github.com/polawich/Compro_IOT/tree/main/POSTER)
 - [Video(พรีเซนต์) 📽️](https://www.youtube.com/watch?v=FzFw8zSZ1-I)
 - [Dialogflow 🌞](https://github.com/polawich/Compro_IOT/tree/main/dialogflow)
 - [iot-lighting 💫](https://github.com/polawich/Compro_IOT/tree/main/iot-lighting)
 - [mqtt-broker/mqtt 🎟️](https://github.com/polawich/Compro_IOT/tree/main/mqtt-broker/mqtt)
 - [Wokwi 💡](https://wokwi.com/projects/330789921500430932?fbclid=IwAR19xQWXtqnYwg8qSAiK_XSdOguZsKszrEENQUICY7I9Ajk5Szlz1DKzNEM)
 - [GoogleDoc(เล่มรายงาน) 📝](https://docs.google.com/document/d/1B2vesRoJ_wooTOi0qDm4Dvbo-mLvShKH0nfEBOc8fNs/edit?usp=sharing)
 

## ขั้นตอนการใช้งาน
![App Screenshot](https://cdn.discordapp.com/attachments/950776439643443231/971792035684188180/279471152_514769850133143_2943252035943131087_n.png)

ขั้นแรก สแกน QR code เพื่อแอดไลน์เข้าไปใช้งานในการเปิด/ปิดไฟ

![App Screenshot](https://cdn.discordapp.com/attachments/950776439643443231/971794605559402496/unknown.png)

ขั้นสอง เข้า Wokwi เพื่อเปิดดูว่าไฟแต่ละห้องที่เราสร้างไว้นั้นติดไหม โดยจะต้องกดปุ่มสีเขียวเพื่อเมื่อการทำงาน

![App Screenshot](https://cdn.discordapp.com/attachments/950776439643443231/971791125822181457/S__4538376.jpg)

ขั้นสาม เลือกที่จะกดรูปภาพในแต่ละช่องให้ทำการเปิด/ปิดไฟ หรือ พิมข้อความดังนี้ on1 -> เปิดไฟห้องนอน , on2 -> เปิดไฟห้องนั่งเล่น , onall -> เปิดไฟทั้งหมด , off1 -> ปิดไฟห้องนอน , off2 -> ปิดไฟห้องนั่งเล่น , offall -> ปิดไฟทั้งหมด


