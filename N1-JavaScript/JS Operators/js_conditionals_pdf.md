# JavaScript Conditional Statements - 30 Examples

## 📋 Table of Contents
1. [Oson darajadagi misollar (1-10)](#oson-darajadagi-misollar)
2. [O'rtacha darajadagi misollar (11-20)](#ortacha-darajadagi-misollar)
3. [Murakkab darajadagi misollar (21-30)](#murakkab-darajadagi-misollar)

---

## ✅ Oson darajadagi misollar

### 1. Foydalanuvchi yoshi 18 dan katta
```javascript
let age = 20;
if (age >= 18) {
  console.log("Kirish ruxsat etildi");
}
```

### 2. Ikkala input bo'sh emas
```javascript
let name = 'Ali';
let password = '123'
if (name !== '' && password !== '') {
  console.log("Ma'lumotlar to'ldirildi");
}
```

### 3. Parol uzunligi 8 dan ko'p yoki email bor
```javascript
let password = 'securepass';
let email = "user@mail.com";
if (password.length > 8 || email !== "") {
  console.log("Ro'yxatdan o'tishga tayyor");
}
```

### 4. Foydalanuvchi admin emas
```javascript
let role = "guest";
if (role !== 'admin') {
  console.log("Oddiy foydalanuvchi");
}
```

### 5. Foydalanuvchi avtorizatsiyadan o'tmagan
```javascript
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Avtorizatsiya kerak");
}
```

### 6. Narx 0 dan katta
```javascript
let price = 12000;
if (price > 0) {
   console.log("Sotib olish mumkin");
}
```

### 7. Yoshi va email mavjud
```javascript
let age = 30;
let email = 'ali@example.com';
if (age >= 18 && email !== '') {
  console.log("Ro'yxatdan o'tishga ruxsat");
}
```

### 8. Quyoshli kun yoki dam olish kuni
```javascript
let isSunny = true;
let isWeekend = false;
if (isSunny || isWeekend) {
  console.log("Sayrga chiqamiz");
}
```

### 9. Parol noto'g'ri
```javascript
let correct = "abc123";
let input = "xyz789";
if (input !== correct){
 console.log("Parol noto'g'ri");
}
```

### 10. Mahsulot savatda emas
```javascript
let inCart = false;
if (!inCart) {
  console.log("Savat bo'sh");
}
```

---

## 🟡 O'rtacha darajadagi misollar

### 11. Chegirma: 25 yosh va premium azolik
```javascript
let age = 25;
let isPremium = true;
if (age === 25 && isPremium) {
  console.log("Maxsus chegirma beriladi");
}
```

### 12. Email va parol bilan kirish
```javascript
let email = 'user@mail.com';
let password = 'pass123';
if (email !== '' && password.length >= 6) {
  console.log("Kirish mumkin");
}
```

### 13. Ball > 100 yoki bosqich > 5
```javascript
let score = 120;
let level = 4;
if (score > 100 || level > 5) {
   console.log("Yangi bosqich ochildi");
}
```

### 14. Pul miqdori va hisob tasdiqlangan
```javascript
let amount = 15000;
let isVerified = true;
if (amount > 10000 && isVerified) {
  console.log("To'lov amalga oshiriladi");
}
```

### 15. Mahsulot yo'q yoki chiqarilgan
```javascript
let available = false;
let discontinued = true;
if (!available || discontinued) {
  console.log("Mahsulot sotuvda emas");
}
```

### 16. Kirish muddati tugamagan
```javascript
let isExpired = false;
if (!isExpired) {
   console.log("Hali foydalanish mumkin");
}
```

### 17. Yoshi < 18 va ota-ona roziligi yo'q
```javascript
let age = 16;
let parentalConsent = false;
if (age < 18 && !parentalConsent) {
  console.log("Ruxsat berilmaydi");
}
```

### 18. Bloklangan yoki parol 3 marta xato
```javascript
let isBlocked = false;
let wrongAttempts = 3;
if (isBlocked || wrongAttempts >= 3) {
  console.log("Akkount bloklangan");
}
```

### 19. Litsenziya va yosh
```javascript
let hasLicense = true;
let age = 21;
if (hasLicense && age >= 21) {
  console.log("Haydovchilik ruxsati bor");
}
```

### 20. Bahosi va test topshirgan
```javascript
let grade = 85;
let submitted = true; 
if (grade > 70 && submitted) {
  console.log("Test muvaffaqiyatli");
}
```

---

## 🔴 Murakkab darajadagi misollar

### 21. AI model uchun: GPU, RAM, internet
```javascript
let hasGPU = true;
let ram = 32;
let internet = true;
if (hasGPU && ram >= 16 && internet) {
  console.log("AI model ishga tushdi");
}
```

### 22. Mahsulotni qo'shish
```javascript
let name = "Kitob";
let price = 30000;
let inStock = true;
if (name !== "" && price > 0 && inStock) {
  console.log("Mahsulot qo'shildi");
}
```

### 23. O'yinchi holati
```javascript
let health = 80;
let weaponSelected = true;
if (health > 0 && weaponSelected) {
  console.log("Hujum qilish mumkin");
}
```

### 24. Onlayn test sharti
```javascript
let timeLeft = 15;
let questionsRemaining = 3;
if (timeLeft > 0 && questionsRemaining > 0) {
  console.log("Test davom etmoqda");
}
```

### 25. Balans yoki zaxira karta
```javascript
let balance = 0;
let backupCardReady = true;
if (balance > 0 || backupCardReady) {
  console.log("To'lov amalga oshadi");
}
```

### 26. OTP kod holati
```javascript
let otpExpired = true;
let otpWrong = true;
let isUserVerified = false;
if ((otpExpired || otpWrong) && !isUserVerified) {
  console.log("Kirish rad etildi");
}
```

### 27. Maxfiy sahifa kirish
```javascript
let isAdmin = true;
let token = "securetoken";
let isLoggedIn = true;
if (isAdmin && token !== "" && isLoggedIn) {
  console.log("Maxfiy sahifaga kirdingiz");
} else {
  console.log("Siz sahifaga kiraolmadizgiz");
}
```

### 28. Talaba holati
```javascript
let credits = 130;
let gpa = 3.2;
let hasDebt = false;
if (credits >= 120 && gpa >= 2.0 && !hasDebt) {
  console.log("Bitiruvchi talaba");
} else {
  console.log("Bitiruvchi talaba emassiz");
}
```

### 29. Forum post sharti
```javascript
let hasTopic = false;
let postLength = 400;
let approved = true;
if (hasTopic && postLength <= 500 && approved) {
  console.log("Post nashr etildi");
} else {
  console.log("Post nashr qilinmadi");
}
```

### 30. Restoran buyurtma
```javascript
let ordered = true;
let paid = false;
let usedBonus = true;
if (ordered && (paid || usedBonus)) {
  console.log("Buyurtma qabul qilindi");
}
```

---

## 📝 Xulosa

Ushbu hujjatda JavaScript dasturlash tilidagi shartli operatorlar (if statements) ning 30 ta misoli keltirilgan. Misollar 3 ta darajaga bo'lingan:

- **Oson daraja (1-10)**: Oddiy shartli operatorlar
- **O'rtacha daraja (11-20)**: Murakkab mantiqiy operatorlar
- **Murakkab daraja (21-30)**: Ko'p shartli va amaliy misollar

Har bir misol real hayotdagi vaziyatlarni aks ettiradi va JavaScript dasturlashni o'rganishda yordam beradi.

---

*Hujjat yaratilgan sana: 2025-yil 10-iyul*