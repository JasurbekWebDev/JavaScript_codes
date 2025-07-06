# JavaScript O'zgaruvchilari - To'liq Qo'llanma

## Mundarija
1. [O'zgaruvchi nima?](#ozgaruvchi-nima)
2. [O'zgaruvchilarni e'lon qilish](#ozgaruvchilarni-elon-qilish)
3. [O'zgaruvchi nomlash qoidalari](#ozgaruvchi-nomlash-qoidalari)
4. [O'zgaruvchilarni ishlatish bo'yicha maslahatlar](#ozgaruvchilarni-ishlatish-boyicha-maslahatlar)
5. [Amaliy misollar](#amaliy-misollar)

---

## 1. O'zgaruvchi nima?

**O'zgaruvchi** - bu ma'lumotlarni saqlash uchun ishlatiladi. Ular xotirada joy ajratib, ma'lumotlarni vaqtinchalik saqlaydi va keyinchalik bu ma'lumotlarni o'qish yoki o'zgartirish imkonini beradi.

O'zgaruvchilar quyidagicha ishlaydi:
- **Konteyner** vazifasini bajaradi
- **Ma'lumotlarni saqlaydi** (raqamlar, matnlar, obyektlar va h.k.)
- **Qayta ishlatiladi** kod davomida
- **Qiymati o'zgarishi mumkin** (ba'zi hollarda)

### O'zgaruvchilarning afzalliklari:
- Kodni o'qishga oson qiladi
- Ma'lumotlarni qayta ishlatish imkonini beradi
- Kodni boshqarish va debug qilishni osonlashtiradi
- Xotirani samarali ishlatadi

---

## 2. O'zgaruvchilarni e'lon qilish

JavaScript-da o'zgaruvchilarni e'lon qilishning uch yo'li mavjud:

### 2.1 `var` kalit so'zi
```javascript
var ism = "Ali";
var yosh = 25;
var narx;  // undefined qiymat
```

**Xususiyatlari:**
- Function scope yoki global scope
- Hoisting qo'llab-quvvatlaydi
- Qayta e'lon qilish mumkin
- Eski uslub (ES5 va avvalgi)

### 2.2 `let` kalit so'zi
```javascript
let ism = "Olima";
let yosh = 30;
let narx;  // undefined qiymat
```

**Xususiyatlari:**
- Block scope
- Hoisting yo'q
- Qayta e'lon qilish mumkin emas
- Zamonaviy uslub (ES6+)

### 2.3 `const` kalit so'zi
```javascript
const PI = 3.14159;
const MAMLAKAT = "O'zbekiston";
const FOYDALANUVCHI = {
    ism: "Javohir",
    yosh: 28
};
```

**Xususiyatlari:**
- Block scope
- Hoisting yo'q
- Qayta e'lon qilish mumkin emas
- Qiymati o'zgarmas (immutable)
- E'lon qilishda qiymat berish majburiy

### Scope farqlari:
```javascript
// Global scope
var globalVar = "Global";

function myFunction() {
    // Function scope
    var functionVar = "Function";
    
    if (true) {
        // Block scope
        let blockLet = "Block Let";
        const blockConst = "Block Const";
        var functionVar2 = "Function 2";
    }
    
    console.log(blockLet); // Error: blockLet is not defined
    console.log(functionVar2); // "Function 2" - var function scope
}
```

---

## 3. O'zgaruvchi nomlash qoidalari

### 3.1 Majburiy qoidalar:
1. **Harf, _, yoki $ bilan boshlanishi kerak**
   ```javascript
   let ism = "To'g'ri";
   let _maxsus = "To'g'ri";
   let $narx = "To'g'ri";
   let 1raqam = "Xato"; // Raqam bilan boshlanmaydi
   ```

2. **Faqat harf, raqam, _, $ bo'lishi mumkin**
   ```javascript
   let ism123 = "To'g'ri";
   let _sana_2024 = "To'g'ri";
   let ism-familiya = "Xato"; // Tire ishlatilmaydi
   ```

3. **Kalit so'zlar ishlatilmaydi**
   ```javascript
   let if = "Xato";      // if - kalit so'z
   let function = "Xato"; // function - kalit so'z
   let myIf = "To'g'ri";  // Buni ishlatish mumkin
   ```

### 3.2 Tavsiya etiladigan qoidalar:

#### CamelCase uslubi:
```javascript
let foydalanuvchiIsmi = "Ali";
let maksimalNarx = 1000;
let joriyVaqt = new Date();
```

#### Konstantalar uchun UPPER_SNAKE_CASE:
```javascript
const MAKSIMAL_YOSH = 100;
const PI_QIYMATI = 3.14159;
const MAMLAKAT_KODI = "UZ";
```

#### Ma'noli nomlar:
```javascript
// Yomon:
let x = 5;
let a = "Ali";
let d = new Date();

// Yaxshi:
let foydalanuvchilarSoni = 5;
let foydalanuvchiIsmi = "Ali";
let joriyVaqt = new Date();
```

### 3.3 Nom berish bo'yicha maslahatlar:
- **Qisqa va aniq** bo'lsin
- **Ma'noli** bo'lsin
- **Ingliz tilidagi** so'zlardan foydalaning
- **Izchil** bo'ling (bir xil uslubda)

---

## 4. O'zgaruvchilarni ishlatish bo'yicha maslahatlar

### 4.1 Qaysi kalit so'zni ishlatish:

#### `const` - birinchi tanlov:
```javascript
const foydalanuvchiIsmi = "Ali";
const maksimalBall = 100;
const sozlamalar = {
    rang: "ko'k",
    hajm: "katta"
};
```

#### `let` - qiymat o'zgarsa:
```javascript
let hisoblash = 0;
let joriyIndeks = 0;
let faol = false;

// Sikl davomida o'zgaradi
for (let i = 0; i < 10; i++) {
    hisoblash += i;
}
```

#### `var` - ishlatmang (zamonaviy kodda):
```javascript
// Eski uslub - ishlatmang
var x = 10;

// Zamonaviy uslub - ishlating
const x = 10;
```

### 4.2 Xatoliklardan qochish:

#### Hoisting muammosi:
```javascript
// Noto'g'ri:
console.log(x); // undefined
var x = 5;

// To'g'ri:
const x = 5;
console.log(x); // 5
```

#### Scope muammosi:
```javascript
// Noto'g'ri:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // 3, 3, 3
}

// To'g'ri:
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // 0, 1, 2
}
```

### 4.3 Xotira boshqaruvi:
```javascript
// Katta obyektlar uchun
let kattaObyek = {
    // katta ma'lumotlar
};

// Ishlatgandan keyin tozalash
kattaObyek = null;
```

---

## 5. Amaliy misollar

### 5.1 Oddiy o'zgaruvchilar:
```javascript
// Shaxsiy ma'lumotlar
const ism = "Dilfuza";
const familiya = "Karimova";
let yosh = 25;
let tugilganYil = 2024 - yosh;

console.log(`Mening ismim ${ism} ${familiya}`);
console.log(`Men ${yosh} yoshdaman`);
console.log(`Men ${tugilganYil}-yilda tug'ilganman`);
```

### 5.2 Raqamlar bilan ishlash:
```javascript
// Hisoblash
const birinchiRaqam = 15;
const ikkinchiRaqam = 25;
let yigindi = birinchiRaqam + ikkinchiRaqam;
let kopaytma = birinchiRaqam * ikkinchiRaqam;

console.log(`Yig'indi: ${yigindi}`);
console.log(`Ko'paytma: ${kopaytma}`);

// Foizni hisoblash
const asosiyNarx = 1000;
const chegirmaFoizi = 15;
let chegirmaNarxi = asosiyNarx * (chegirmaFoizi / 100);
let yakuniyNarx = asosiyNarx - chegirmaNarxi;

console.log(`Chegirma: ${chegirmaNarxi} so'm`);
console.log(`Yakuniy narx: ${yakuniyNarx} so'm`);
```

### 5.3 Matnlar bilan ishlash:
```javascript
// Matn bilan operatsiyalar
const ism = "Aziz";
const familiya = "Rahimov";
let tuliqIsm = ism + " " + familiya;

// Template literal ishlatish
let salomlashish = `Salom, ${tuliqIsm}!`;
let uzunlik = tuliqIsm.length;

console.log(salomlashish);
console.log(`Ismingiz uzunligi: ${uzunlik} ta harf`);

// Matnni o'zgartirish
let kattaHarf = tuliqIsm.toUpperCase();
let kichikHarf = tuliqIsm.toLowerCase();

console.log(`Katta harf: ${kattaHarf}`);
console.log(`Kichik harf: ${kichikHarf}`);
```

### 5.4 Massivlar bilan ishlash:
```javascript
// Massiv yaratish
const mevalar = ["olma", "nok", "uzum", "banan"];
const raqamlar = [1, 2, 3, 4, 5];

// Massiv ma'lumotlari
console.log(`Mevalar soni: ${mevalar.length}`);
console.log(`Birinchi meva: ${mevalar[0]}`);
console.log(`Oxirgi meva: ${mevalar[mevalar.length - 1]}`);

// Massivga element qo'shish
mevalar.push("apelsin");
console.log(`Yangi meva qo'shildi: ${mevalar}`);

// Massiv elementlarini ko'rish
for (let i = 0; i < mevalar.length; i++) {
    console.log(`${i + 1}. ${mevalar[i]}`);
}
```

### 5.5 Obyektlar bilan ishlash:
```javascript
// Obyekt yaratish
const talaba = {
    ism: "Muhammadali",
    yosh: 20,
    kurs: 2,
    fakultet: "Informatika",
    baholar: [5, 4, 5, 3, 4]
};

// Obyekt ma'lumotlarini chiqarish
console.log(`Talaba: ${talaba.ism}`);
console.log(`Yoshi: ${talaba.yosh}`);
console.log(`Kursi: ${talaba.kurs}`);

// O'rtacha bahoni hisoblash
let yigindi = 0;
for (let i = 0; i < talaba.baholar.length; i++) {
    yigindi += talaba.baholar[i];
}
let ortachaBaho = yigindi / talaba.baholar.length;
console.log(`O'rtacha baho: ${ortachaBaho.toFixed(2)}`);

// Obyektga yangi xususiyat qo'shish
talaba.telefon = "+998901234567";
console.log(`Telefon: ${talaba.telefon}`);
```

### 5.6 Shartli operatorlar:
```javascript
// Yosh bo'yicha kategoriya
const yosh = 18;
let kategoriya;

if (yosh < 13) {
    kategoriya = "Bola";
} else if (yosh < 18) {
    kategoriya = "O'smir";
} else if (yosh < 60) {
    kategoriya = "Kattalar";
} else {
    kategoriya = "Keksa";
}

console.log(`Siz ${kategoriya} kategoriyasiga kirasiz`);

// Bahoni harf bilan ifodalash
const baho = 85;
let harfBaho;

if (baho >= 90) {
    harfBaho = "A";
} else if (baho >= 80) {
    harfBaho = "B";
} else if (baho >= 70) {
    harfBaho = "C";
} else if (baho >= 60) {
    harfBaho = "D";
} else {
    harfBaho = "F";
}

console.log(`Sizning bahoyingiz: ${harfBaho}`);
```

### 5.7 Funksiyalar bilan ishlash:
```javascript
// Oddiy funksiya
function salomlash(ism) {
    return `Salom, ${ism}!`;
}

// Funksiyani chaqirish
const salom = salomlash("Dilnoza");
console.log(salom);

// Hisoblash funksiyasi
function togriBurchakYuzi(uzunlik, kenglik) {
    return uzunlik * kenglik;
}

const uzunlik = 10;
const kenglik = 5;
const yuza = togriBurchakYuzi(uzunlik, kenglik);
console.log(`To'g'ri burchak yuzi: ${yuza} kv.sm`);

// Arrow function
const kvadrat = (raqam) => raqam * raqam;
const natija = kvadrat(7);
console.log(`7 ning kvadrati: ${natija}`);
```

### 5.8 Vaqt bilan ishlash:
```javascript
// Joriy vaqt
const hozir = new Date();
const yil = hozir.getFullYear();
const oy = hozir.getMonth() + 1; // 0 dan boshlanadi
const kun = hozir.getDate();
const soat = hozir.getHours();
const minut = hozir.getMinutes();

console.log(`Bugun: ${kun}/${oy}/${yil}`);
console.log(`Vaqt: ${soat}:${minut < 10 ? '0' + minut : minut}`);

// Yosh hisoblash
const tugilganYil = 1995;
const hozirgiYosh = yil - tugilganYil;
console.log(`Sizning yoshingiz: ${hozirgiYosh}`);
```

---

## Xulosa

JavaScript o'zgaruvchilari dasturlashning asosiy qismidir. Ularni to'g'ri ishlatish:

1. **Kodni o'qishga oson** qiladi
2. **Xatolarni kamaytiradi**
3. **Kodni boshqarishni osonlashtiradi**
4. **Samaradorlikni oshiradi**

### Asosiy qoidalar:
- `const` dan foydalaning (imkon qadar)
- `let` dan foydalaning (qiymat o'zgarsa)
- `var` dan foydalanmang (zamonaviy kodda)
- Ma'noli nomlar bering
- Izchil uslubda yozing

### Keyingi qadamlar:
- Obyektlar va massivlar bilan chuqurroq ishlash
- Funksiyalar va scope haqida o'rganish
- Asinxron dasturlash
- ES6+ yangi imkoniyatlari

JavaScript o'zgaruvchilarini o'zlashtirib, siz dasturlashda katta qadam tashlaganingiz bo'ladi!