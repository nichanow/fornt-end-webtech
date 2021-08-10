# webtech-project
(ในส่วนของ back-end อยู่ที่ https://github.com/nichanow/back-end-webtech)

"การติดตั้งโปรเจค"
1. git clone https://github.com/nichanow/front-end-webtech.git
2. หลังจาก clone เสร็จแล้วให้พิมพ์คำสั่ง 'npm install'
3. เมื่อ install เสร็จแล้วให้พิมพ์คำสั่งว่า 'npm run serve' จากนั้นจะได้ path ของโปรเจคมาให้ทำการเปิด path

วิธีการใช้งาน
1. หน้า CS SHOP เมื่อเปิดหน้านี้ขึ้นมาโดยที่ไม่ได้ login ผู้ใช้จะเห็นหน้าเว็บที่รวบรวมสินค้าที่ขายไว้ที่หน้าเว็บแต่ยังไม่สามารถเลือกซื้อได้ จะต้องทำการสมัครบัญชีหรือเข้าสู่ระบบก่อน 
2. หน้า LOGIN สำหรับเข้าสู่ระบบ, หน้า Register สำหรับสมัครสมาชิก
3. เมื่อเข้าสู่ระบบหรือสมัครบัญชีแล้ว
    - กรณีของ admin : ในหน้า HOME ของ admin จะมี 2 ปุ่มให้เลือกคือ Leaderboard ที่ไว้ดูลำดับการสะสมแต้ม, การได้แต้ม, การใช้แต้มโดยเรียงลำดับจากสูงไปต่ำ admin สามารถเลือกช่วงเวลาในการดูลำดับได้ และหน้า Prize สำหรับเพิ่ม, แก้ไข, ลบ รางวัลได้
    - กรณีของ user : เมื่อ login เข้ามาแล้วจะเจอกับหน้า CS SHOP ซึ่งสามารถกดปุ่มซื้อสินค้าได้แล้ว,
    หน้า Recive point เป็นหน้าประวัติการได้รับแต้มของ User,
    หน้า Reward เป็นไว้รับ Point ประจำวันและ อีกส่วนเป็น hot item reward ไว้ให้แลกของ สามารถกดปุ่ม History point เพื่อดูประวัติการใช้แต้มได้
    หน้า Profile เป็นข้อมูลของเจ้าของบัญชี

"บัญชีตัวอย่าง"
1. Username: admin, Password: admin123
2. Username: Tim หรือ Email: tim@cs.com, Password: 123456


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
