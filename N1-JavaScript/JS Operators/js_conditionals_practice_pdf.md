# JavaScript Conditional Statements - 30 Practice Problems

## 📋 Table of Contents
1. [Oson darajadagi masalalar (1-10)](#oson-darajadagi-masalalar)
2. [O'rtacha darajadagi masalalar (11-20)](#ortacha-darajadagi-masalalar)
3. [Murakkab darajadagi masalalar (21-30)](#murakkab-darajadagi-masalalar)

---

## ✅ Oson darajadagi masalalar

### 1. Harorat tekshirish
```javascript
// Agar harorat 30 dan yuqori bo'lsa "Issiq kun" chiqaring
let temperature = 35;
if (temperature > 30) {
  console.log("Issiq kun");
}
```

### 2. Kitob sahifasi
```javascript
// Agar kitob 200 sahifadan ko'p bo'lsa "Qalin kitob" chiqaring
let pages = 350;
if (pages > 200) {
  console.log("Qalin kitob");
}
```

### 3. Imtihon natijasi
```javascript
// Agar ball 60 dan yuqori bo'lsa "O'tdingiz" chiqaring
let score = 75;
if (score >= 60) {
  console.log("O'tdingiz");
}
```

### 4. Telefon batareyasi
```javascript
// Agar batareya 20% dan kam bo'lsa "Quvvatlash kerak" chiqaring
let battery = 15;
if (battery < 20) {
  console.log("Quvvatlash kerak");
}
```

### 5. Yoshga qarab kirish
```javascript
// Agar yosh 16 dan katta bo'lsa "Kirishingiz mumkin" chiqaring
let age = 18;
if (age > 16) {
  console.log("Kirishingiz mumkin");
}
```

### 6. Parol uzunligi
```javascript
// Agar parol 6 ta belgidan kam bo'lsa "Parol juda qisqa" chiqaring
let password = "123";
if (password.length < 6) {
  console.log("Parol juda qisqa");
}
```

### 7. Maktab bahosi
```javascript
// Agar baho 5 ga teng bo'lsa "A'lo baho" chiqaring
let grade = 5;
if (grade === 5) {
  console.log("A'lo baho");
}
```

### 8. Oylik maosh
```javascript
// Agar maosh 5 million so'mdan ko'p bo'lsa "Yaxshi maosh" chiqaring
let salary = 7000000;
if (salary > 5000000) {
  console.log("Yaxshi maosh");
}
```

### 9. Dushanba tekshirish
```javascript
// Agar kun "Dushanba" bo'lsa "Ish kuni boshlanadi" chiqaring
let day = "Dushanba";
if (day === "Dushanba") {
  console.log("Ish kuni boshlanadi");
}
```

### 10. Internet tezligi
```javascript
// Agar internet tezligi 50 Mbps dan past bo'lsa "Sekin internet" chiqaring
let speed = 25;
if (speed < 50) {
  console.log("Sekin internet");
}
```

---

## 🟡 O'rtacha darajadagi masalalar

### 11. Restoran ochiq vaqti
```javascript
// Agar soat 9 dan 22 gacha bo'lsa "Restoran ochiq" chiqaring
let hour = 15;
if (hour >= 9 && hour <= 22) {
  console.log("Restoran ochiq");
}
```

### 12. Yo'lchi yoshi va paspor
```javascript
// Agar yosh 18 dan katta va pasport bor bo'lsa "Safar qilish mumkin" chiqaring
let age = 25;
let hasPassport = true;
if (age >= 18 && hasPassport) {
  console.log("Safar qilish mumkin");
}
```

### 13. Kino bileti
```javascript
// Agar yosh 65 dan katta yoki 12 dan kichik bo'lsa "Chegirmali bilet" chiqaring
let age = 70;
if (age > 65 || age < 12) {
  console.log("Chegirmali bilet");
}
```

### 14. Onlayn xarid
```javascript
// Agar kartada pul bor va mahsulot mavjud bo'lsa "Xarid amalga oshirildi" chiqaring
let cardBalance = 150000;
let productAvailable = true;
let productPrice = 100000;
if (cardBalance >= productPrice && productAvailable) {
  console.log("Xarid amalga oshirildi");
}
```

### 15. Haydovchilik guvohnomasi
```javascript
// Agar yosh 18 dan katta va imtihon topshirgan bo'lsa "Guvohnoma olish mumkin" chiqaring
let age = 20;
let passedExam = true;
if (age >= 18 && passedExam) {
  console.log("Guvohnoma olish mumkin");
}
```

### 16. Ishchi soatlari
```javascript
// Agar soat 8 dan kichik yoki 18 dan katta bo'lsa "Ish vaqti emas" chiqaring
let time = 19;
if (time < 8 || time > 18) {
  console.log("Ish vaqti emas");
}
```

### 17. Talaba stipendiyasi
```javascript
// Agar o'rtacha baho 4.5 dan yuqori va qarzi yo'q bo'lsa "Stipendiya oladi" chiqaring
let averageGrade = 4.7;
let hasDebt = false;
if (averageGrade > 4.5 && !hasDebt) {
  console.log("Stipendiya oladi");
}
```

### 18. Ob-havo va sayohat
```javascript
// Agar yomg'ir yog'masa yoki soyabon bor bo'lsa "Sayrga chiqish mumkin" chiqaring
let isRaining = true;
let hasUmbrella = true;
if (!isRaining || hasUmbrella) {
  console.log("Sayrga chiqish mumkin");
}
```

### 19. Elektr energiyasi
```javascript
// Agar elektr tugagan yoki generator ishlamasa "Qorong'ulik" chiqaring
let powerOn = false;
let generatorWorking = false;
if (!powerOn && !generatorWorking) {
  console.log("Qorong'ulik");
}
```

### 20. Kutubxona kitob berish
```javascript
// Agar a'zo va kitob mavjud bo'lsa "Kitob berildi" chiqaring
let isMember = true;
let bookAvailable = true;
if (isMember && bookAvailable) {
  console.log("Kitob berildi");
}
```

---

## 🔴 Murakkab darajadagi masalalar

### 21. Bank kredit berish
```javascript
// Kredit berish uchun: yosh 21+, oylik maosh 3mln+, ish staji 2+ yil
let age = 28;
let monthlyIncome = 4000000;
let workExperience = 3;
if (age >= 21 && monthlyIncome >= 3000000 && workExperience >= 2) {
  console.log("Kredit beriladi");
} else {
  console.log("Kredit berilmaydi");
}
```

### 22. Universitet qabul
```javascript
// Qabul uchun: DTM ball 190+, til sertifikati bor, tibbiy ko'rik o'tgan
let dtmScore = 200;
let hasLanguageCert = true;
let passedMedical = true;
if (dtmScore >= 190 && hasLanguageCert && passedMedical) {
  console.log("Universitega qabul qilindi");
} else {
  console.log("Qabul qilinmadi");
}
```

### 23. Maxfiy loyiha kirish
```javascript
// Kirish uchun: admin huquqi, maxfiy ruxsat, biometrik tasdiqlash
let isAdmin = true;
let hasSecurityClearance = true;
let biometricVerified = true;
if (isAdmin && hasSecurityClearance && biometricVerified) {
  console.log("Maxfiy loyihaga kirish ruxsat etildi");
} else {
  console.log("Kirish rad etildi");
}
```

### 24. Onlayn imtihon
```javascript
// Imtihon uchun: ro'yxatdan o'tgan, to'lov qilgan, vaqt tugamagan
let isRegistered = true;
let hasPaid = true;
let timeRemaining = 45;
if (isRegistered && hasPaid && timeRemaining > 0) {
  console.log("Imtihon boshlash mumkin");
} else {
  console.log("Imtihon boshlanmaydi");
}
```

### 25. Elektron tijorat
```javascript
// Xarid uchun: mahsulot mavjud, yetkazib berish hududi, to'lov usuli
let productInStock = true;
let deliveryAvailable = true;
let paymentMethodValid = true;
if (productInStock && deliveryAvailable && paymentMethodValid) {
  console.log("Buyurtma qabul qilindi");
} else {
  console.log("Buyurtma amalga oshmadi");
}
```

### 26. Tibbiy ko'rik
```javascript
// Operatsiya uchun: kasallik bosqichi, shifokor tavsiyasi, bemor roziligi
let diseaseStage = 2;
let doctorRecommendation = true;
let patientConsent = true;
if (diseaseStage <= 3 && doctorRecommendation && patientConsent) {
  console.log("Operatsiya o'tkaziladi");
} else {
  console.log("Operatsiya o'tkazilmaydi");
}
```

### 27. Avtomobil ijara berish
```javascript
// Ijara uchun: haydovchilik staji, yoshi, kredit tarixi, kafolat
let drivingExperience = 5;
let age = 30;
let creditHistory = "good";
let hasDeposit = true;
if (drivingExperience >= 2 && age >= 25 && creditHistory === "good" && hasDeposit) {
  console.log("Avtomobil ijaraga berildi");
} else {
  console.log("Ijara berilmadi");
}
```

### 28. Dasturiy ta'minot litsenziyasi
```javascript
// Litsenziya uchun: to'lov, platforma mos kelishi, internet ulanish
let licensePaid = true;
let platformCompatible = true;
let internetConnected = true;
if (licensePaid && platformCompatible && internetConnected) {
  console.log("Dastur faollashtirildi");
} else {
  console.log("Dastur faollashtirilmadi");
}
```

### 29. Pochta xizmati
```javascript
// Xat yuborish uchun: manzil to'liq, kuryer mavjud, ob-havo yaxshi
let addressComplete = true;
let courierAvailable = true;
let goodWeather = false;
let urgentDelivery = true;
if (addressComplete && courierAvailable && (goodWeather || urgentDelivery)) {
  console.log("Xat yetkazib beriladi");
} else {
  console.log("Xat yetkazib berilmaydi");
}
```

### 30. Onlayn kurs
```javascript
// Kursga qatnashish uchun: ro'yxat, to'lov, texnik talablar, vaqt
let enrolled = true;
let courseFee = 500000;
let userBalance = 600000;
let systemRequirements = true;
let courseStarted = true;
if (enrolled && userBalance >= courseFee && systemRequirements && courseStarted) {
  console.log("Kursga qatnashish mumkin");
} else {
  console.log("Kursga qatnasha olmaysiz");
}
```

---

## 📊 Masalalar bo'yicha statistika

### Foydalanilgan operatorlar:
- **Taqqoslash operatorlari**: `>`, `<`, `>=`, `<=`, `===`, `!==`
- **Mantiqiy operatorlar**: `&&` (VA), `||` (YOKI), `!` (EMAS)
- **Qavs guruhlash**: `()` murakkab shartlar uchun

### Masalalar taqsimoti:
- **Oson (1-10)**: Bir shartli operatorlar
- **O'rtacha (11-20)**: Ikki yoki uch shartli operatorlar
- **Murakkab (21-30)**: Ko'p shartli va real hayot masalalari

### Amaliy sohalari:
- Bank va moliya
- Ta'lim tizimi
- Elektron tijorat
- Tibbiyot
- Transport
- Texnologiya
- Xavfsizlik tizimlari

---

## 📝 Mashq qilish ko'rsatmalari

### 1. Har bir masalani o'zingiz yechib ko'ring
### 2. Turli qiymatlar bilan sinab ko'ring
### 3. Else va else if qismlarini qo'shing
### 4. Console.log o'rniga boshqa harakatlar qo'shing
### 5. O'zingizning masalalaringizni yarating

---

## 🎯 Xulosa

Ushbu 30 ta masala JavaScript shartli operatorlarni o'rganish uchun mo'ljallangan. Har bir masala real hayotdagi vaziyatlarni aks ettiradi va dasturlashda tez-tez uchraydigan mantiqiy shartlarni o'rgatadi.

Masalalar boshlang'ich darajadan murakkab darajagacha taqsimlangan va turli sohalardagi amaliy vaziyatlarni o'z ichiga oladi.

---

*Masalalar to'plami yaratilgan: 2025-yil 10-iyul*
*Mualliflik huquqi: JavaScript o'rganuvchilari uchun*