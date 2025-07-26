# JavaScript Advanced Conditional Statements - 30 Problems

## 📋 Table of Contents
1. [O'rtacha darajadagi masalalar (1-15)](#ortacha-darajadagi-masalalar)
2. [Murakkab darajadagi masalalar (16-30)](#murakkab-darajadagi-masalalar)

---

## 🟡 O'rtacha darajadagi masalalar

### 1. Mehmonxona bron qilish
```javascript
// Agar xona bo'sh va to'lov qilingan bo'lsa "Bron tasdiqlandi" chiqaring
let roomAvailable = true;
let paymentMade = true;
if (roomAvailable && paymentMade) {
  console.log("Bron tasdiqlandi");
} else {
  console.log("Bron qilinmadi");
}
```

### 2. Universitet imtihon kirish
```javascript
// Agar ball 180+ yoki olimpiada g'olibi bo'lsa "Imtihonsiz qabul" chiqaring
let score = 175;
let olympicWinner = true;
if (score >= 180 || olympicWinner) {
  console.log("Imtihonsiz qabul");
} else {
  console.log("Qo'shimcha imtihon kerak");
}
```

### 3. Onlayn bank kartasi
```javascript
// Agar karta faol va PIN to'g'ri bo'lsa "Tranzaksiya ruxsat etildi" chiqaring
let cardActive = true;
let pinCorrect = true;
if (cardActive && pinCorrect) {
  console.log("Tranzaksiya ruxsat etildi");
} else {
  console.log("Tranzaksiya rad etildi");
}
```

### 4. Muzey kirish
```javascript
// Agar talaba yoki pensioner bo'lsa "Chegirmali kirish" chiqaring
let isStudent = false;
let isPensioner = true;
if (isStudent || isPensioner) {
  console.log("Chegirmali kirish");
} else {
  console.log("To'liq to'lov");
}
```

### 5. Ish vaqti va texnik xizmat
```javascript
// Agar ish vaqti va texnik xizmat bo'lmasa "Tizim ishlaydi" chiqaring
let workingHours = true;
let maintenance = false;
if (workingHours && !maintenance) {
  console.log("Tizim ishlaydi");
} else {
  console.log("Tizim ishlamaydi");
}
```

### 6. Parvoz bron qilish
```javascript
// Agar o'rin bor va hujjatlar to'g'ri bo'lsa "Parvoz bron qilindi" chiqaring
let seatAvailable = true;
let documentsValid = true;
if (seatAvailable && documentsValid) {
  console.log("Parvoz bron qilindi");
} else {
  console.log("Parvoz bron qilinmadi");
}
```
### 6.1 Parvoz bron qilish
Yuqoridagi kodda (seatAvailable va documentsValid o'zgaruvchilari bilan) faqat oddiy shartli tekshirish amalga oshirilgan, ya'ni form bilan ishlash majburiy emas. Kod shunchaki ikkita mantiqiy o'zgaruvchining (true yoki false) holatiga qarab natija chiqaradi: agar ikkalasi ham true bo'lsa, "Parvoz bron qilindi" deb chiqadi, aks holda "Parvoz bron qilinmadi".

Agar siz form bilan ishlashni nazarda tutayotgan bo'lsangiz, masalan, HTML formasi orqali foydalanuvchi ma'lumotlarini (masalan, yo'lovchi ma'lumotlari yoki hujjatlar holati) kiritish va ularni tekshirish kerak bo'lsa, unda quyidagi qadamlar kerak bo'ladi:

HTML Formasi: Foydalanuvchi ma'lumotlarini kiritish uchun HTML formasini yaratish.
JavaScript bilan Ma'lumotlarni Olish: Formadan kiritilgan ma'lumotlarni JavaScript yordamida olish va tekshirish.
Shartli Tekshirish: Olingan ma'lumotlar asosida seatAvailable va documentsValid kabi shartlarni belgilash.
Masalan, agar formada foydalanuvchi o'rin mavjudligi va hujjatlarning to'g'riligini kiritadigan bo'lsa, quyidagicha kod yozilishi mumkin:
``` html
<form id="bookingForm">
  <label for="seat">O'rin mavjudmi?</label>
  <input type="checkbox" id="seat" name="seat"><br>
  <label for="documents">Hujjatlar to'g'rimi?</label>
  <input type="checkbox" id="documents" name="documents"><br>
  <button type="submit">Bron qilish</button>
</form>
<p id="result"></p>
```
``` javascript
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formani yuborilishini to'xtatish
    let seatAvailable = document.getElementById("seat").checked;
    let documentsValid = document.getElementById("documents").checked;

    if (seatAvailable && documentsValid) {
      document.getElementById("result").innerText = "Parvoz bron qilindi";
    } else {
      document.getElementById("result").innerText = "Parvoz bron qilinmadi";
    }
  });
```
Tushuntirish:
HTML: Foydalanuvchi o'rin mavjudligi va hujjatlarning to'g'riligini belgilash uchun checkbox'lardan foydalanadi.
JavaScript: Form submit qilinganda, checkbox'larning holati (checked yoki yo'q) o'qiladi va shunga qarab natija chiqariladi.
Natija: Agar ikkala shart ham true bo'lsa, "Parvoz bron qilindi" chiqadi, aks holda "Parvoz bron qilinmadi".

### 7. Onlayn do'kon chegirma
```javascript
// Agar VIP mijoz yoki 1 mln so'mdan ko'p xarid bo'lsa "20% chegirma" chiqaring
let isVIP = false;
let purchaseAmount = 1200000;
if (isVIP || purchaseAmount >= 1000000) {
  console.log("20% chegirma");
} else {
  console.log("Chegirma yo'q");
}
```

### 8. Maktab transport xizmati
```javascript
// Agar masofa 5km dan ko'p va transport bor bo'lsa "Avtobus xizmati" chiqaring
let distance = 7;
let busAvailable = true;
if (distance > 5 && busAvailable) {
  console.log("Avtobus xizmati");
} else {
  console.log("O'zingiz boring");
}
```

### 9. Ijtimoiy tarmoq post
```javascript
// Agar matn 280 belgidan kam va rasm yuklangan bo'lsa "Post nashr etildi" chiqaring
let textLength = 150;
let imageUploaded = true;
if (textLength <= 280 && imageUploaded) {
  console.log("Post nashr etildi");
} else {
  console.log("Post nashr etilmadi");
}
```

### 10. Shifoxona navbat
```javascript
// Agar shoshilinch holat yoki navbat bo'lsa "Qabul qilinadi" chiqaring
let emergency = false;
let hasAppointment = true;
if (emergency || hasAppointment) {
  console.log("Qabul qilinadi");
} else {
  console.log("Navbat oling");
}
```

### 11. Elektron pochta yuborish
```javascript
// Agar email manzil to'g'ri va internet bor bo'lsa "Email yuborildi" chiqaring
let validEmail = true;
let internetConnection = true;
if (validEmail && internetConnection) {
  console.log("Email yuborildi");
} else {
  console.log("Email yuborilmadi");
}
```

### 12. Kafe buyurtma
```javascript
// Agar mahsulot mavjud va naqd pul yoki karta bo'lsa "Buyurtma qabul qilindi" chiqaring
let productAvailable = true;
let hasCash = false;
let hasCard = true;
if (productAvailable && (hasCash || hasCard)) {
  console.log("Buyurtma qabul qilindi");
} else {
  console.log("Buyurtma qabul qilinmadi");
}
```

### 13. Gym a'zolik
```javascript
// Agar yosh 16+ va tibbiy spravka bor bo'lsa "A'zolik berildi" chiqaring
let age = 18;
let medicalCertificate = true;
if (age >= 16 && medicalCertificate) {
  console.log("A'zolik berildi");
} else {
  console.log("A'zolik berilmadi");
}
```

### 14. Kitob do'koni chegirma
```javascript
// Agar tanlov kuni yoki 5 ta kitobdan ko'p bo'lsa "Maxsus chegirma" chiqaring
let saleDay = true;
let bookCount = 3;
if (saleDay || bookCount > 5) {
  console.log("Maxsus chegirma");
} else {
  console.log("Oddiy narx");
}
```

### 15. Mobil ilova yuklab olish
```javascript
// Agar xotira yetarli va internet tez bo'lsa "Ilova yuklanmoqda" chiqaring
let sufficientStorage = true;
let fastInternet = true;
if (sufficientStorage && fastInternet) {
  console.log("Ilova yuklanmoqda");
} else {
  console.log("Yuklab olishda xatolik");
}
```

---

## 🔴 Murakkab darajadagi masalalar

### 16. Korporativ kredit berish
```javascript
// Kredit uchun: kompaniya 3+ yillik, yillik daromad 100mln+, qarzi yo'q, kafolat bor
let companyAge = 5;
let annualRevenue = 150000000;
let hasDebt = false;
let hasCollateral = true;
if (companyAge >= 3 && annualRevenue >= 100000000 && !hasDebt && hasCollateral) {
  console.log("Korporativ kredit tasdiqlandi");
} else {
  console.log("Kredit rad etildi");
}
```

### 17. Maxfiy ma'lumotlar bazasi
```javascript
// Kirish uchun: xavfsizlik darajasi 5+, ikkita tasdiq, IP ruxsat etilgan, vaqt chegarasi
let securityLevel = 6;
let twoFactorAuth = true;
let ipWhitelisted = true;
let withinTimeLimit = true;
if (securityLevel >= 5 && twoFactorAuth && ipWhitelisted && withinTimeLimit) {
  console.log("Ma'lumotlar bazasiga kirish ruxsat etildi");
} else {
  console.log("Kirish rad etildi");
}
```

### 18. Tibbiy operatsiya ruxsati
```javascript
// Operatsiya uchun: bemor roziligi, oila roziligi, shifokor tavsiyasi, zaxira qon mavjud
let patientConsent = true;
let familyConsent = true;
let doctorApproval = true;
let bloodAvailable = true;
if (patientConsent && familyConsent && doctorApproval && bloodAvailable) {
  console.log("Operatsiya amalga oshiriladi");
} else {
  console.log("Operatsiya kechiktiriladi");
}
```

### 19. Xalqaro parvoz ruxsati
```javascript
// Parvoz uchun: pasport amal qiladi, viza bor, PCR test salbiy, vaksinatsiya tugallangan
let passportValid = true;
let hasVisa = true;
let pcrNegative = true;
let fullyVaccinated = true;
if (passportValid && hasVisa && pcrNegative && fullyVaccinated) {
  console.log("Xalqaro parvozga ruxsat berildi");
} else {
  console.log("Parvoz ruxsati yo'q");
}
```

### 20. Onlayn bank kredit kartasi
```javascript
// Karta uchun: daromad 2mln+, ish staji 1+ yil, kredit tarixi yaxshi, yoshi 21+
let monthlyIncome = 3000000;
let workExperience = 2;
let creditHistory = "excellent";
let age = 28;
if (monthlyIncome >= 2000000 && workExperience >= 1 && creditHistory !== "bad" && age >= 21) {
  console.log("Kredit karta tasdiqlandi");
} else {
  console.log("Kredit karta rad etildi");
}
```

### 21. Elektron imzo tizimi
```javascript
// Imzo uchun: sertifikat amal qiladi, PIN to'g'ri, brauzer xavfsiz, hujjat ochiq
let certificateValid = true;
let pinCorrect = true;
let secureBrowser = true;
let documentOpen = true;
if (certificateValid && pinCorrect && secureBrowser && documentOpen) {
  console.log("Elektron imzo qo'yildi");
} else {
  console.log("Imzo qo'yilmadi");
}
```

### 22. Ishga yollash jarayoni
```javascript
// Ish uchun: tajriba 2+ yil, til darajasi B2+, test 80+, intervyu o'tgan
let experience = 3;
let languageLevel = "B2";
let testScore = 85;
let interviewPassed = true;
if (experience >= 2 && (languageLevel === "B2" || languageLevel === "C1" || languageLevel === "C2") && testScore >= 80 && interviewPassed) {
  console.log("Ishga qabul qilindi");
} else {
  console.log("Ishga qabul qilinmadi");
}
```

### 23. Onlayn universitet qabul
```javascript
// Qabul uchun: o'rtacha ball 4.5+, til sertifikati, motivatsiya xati, tavsiya xati
let averageGrade = 4.7;
let languageCertificate = true;
let motivationLetter = true;
let recommendationLetter = true;
if (averageGrade >= 4.5 && languageCertificate && motivationLetter && recommendationLetter) {
  console.log("Onlayn universitetga qabul qilindi");
} else {
  console.log("Qabul qilinmadi");
}
```

### 24. Yirik miqdorda pul o'tkazish
```javascript
// O'tkazish uchun: summa 100mln+, tasdiq kodi to'g'ri, bank ochiq, qabul qiluvchi faol
let amount = 150000000;
let confirmationCode = "correct";
let bankOpen = true;
let recipientActive = true;
if (amount >= 100000000 && confirmationCode === "correct" && bankOpen && recipientActive) {
  console.log("Yirik pul o'tkazish amalga oshirildi");
} else {
  console.log("O'tkazish rad etildi");
}
```

### 25. Kriptovalyuta savdo platformasi
```javascript
// Savdo uchun: hisob tasdiqlangan, 2FA yoqilgan, balans yetarli, bozor ochiq
let accountVerified = true;
let twoFactorEnabled = true;
let sufficientBalance = true;
let marketOpen = true;
if (accountVerified && twoFactorEnabled && sufficientBalance && marketOpen) {
  console.log("Kriptovalyuta savdosi amalga oshirildi");
} else {
  console.log("Savdo amalga oshmadi");
}
```

### 26. Mukofot dasturi
```javascript
// Mukofot uchun: faollik 90%+, sifat 95%+, vaqtida topshirish, raqobatchi yo'q
let activityRate = 92;
let qualityScore = 97;
let onTimeDelivery = true;
let noCompetitor = true;
if (activityRate >= 90 && qualityScore >= 95 && onTimeDelivery && noCompetitor) {
  console.log("Yilning eng yaxshi xodimi mukofoti");
} else {
  console.log("Mukofot berilmadi");
}
```

### 27. Maxfiy loyiha dostup
```javascript
// Loyihaga kirish: xavfsizlik tekshiruvi, 3 ta tasdiq, maxfiy guvohnoma, loyihada ishtirok
let securityCleared = true;
let threeApprovals = true;
let secretClearance = true;
let projectMember = true;
if (securityCleared && threeApprovals && secretClearance && projectMember) {
  console.log("Maxfiy loyihaga kirish ruxsati berildi");
} else {
  console.log("Kirish ruxsati yo'q");
}
```

### 28. Startup investitsiya olish
```javascript
// Investitsiya uchun: biznes-plan tayyor, jamoa to'liq, prototip ishlaydi, bozor katta
let businessPlanReady = true;
let teamComplete = true;
let workingPrototype = true;
let largeMarket = true;
if (businessPlanReady && teamComplete && workingPrototype && largeMarket) {
  console.log("Startup investitsiya oldi");
} else {
  console.log("Investitsiya rad etildi");
}
```

### 29. Ilmiy tadqiqot nashr qilish
```javascript
// Nashr uchun: tadqiqot yangi, metodika to'g'ri, natijalar muhim, ekspert tasdiq
let novelResearch = true;
let correctMethodology = true;
let significantResults = true;
let expertApproval = true;
if (novelResearch && correctMethodology && significantResults && expertApproval) {
  console.log("Ilmiy maqola nashr qilindi");
} else {
  console.log("Maqola qayta ishlash kerak");
}
```

### 30. Qo'shma korxona yaratish
```javascript
// Korxona uchun: ikkala tomon roziligi, kapital yetarli, bozor tahlili, huquqiy razilashish
let bothPartiesAgree = true;
let sufficientCapital = true;
let marketAnalysisComplete = true;
let legalAgreement = true;
if (bothPartiesAgree && sufficientCapital && marketAnalysisComplete && legalAgreement) {
  console.log("Qo'shma korxona yaratildi");
} else {
  console.log("Korxona yaratilmadi");
}
```

---

## 📊 Masalalar bo'yicha to'liq tahlil

### 🔍 Foydalanilgan operatorlar:
- **Mantiqiy VA (&&)**: Barcha shartlar bajarilishi kerak
- **Mantiqiy YOKI (||)**: Kamida bitta shart bajarilishi kerak
- **Mantiqiy EMAS (!)**: Shartni inkor qilish
- **Murakkab ifodalar**: Qavs bilan guruhlash
- **Taqqoslash**: `>=`, `<=`, `===`, `!==`

### 📈 Qiyinchilik darajasi:
- **O'rtacha (1-15)**: 2-3 ta shart, oddiy mantiq
- **Murakkab (16-30)**: 4+ ta shart, murakkab biznes mantiq

### 🏢 Amaliy sohalar:
- **Moliya**: Bank kredit, investitsiya, kriptovalyuta
- **Ta'lim**: Universitet, onlayn kurs, ilmiy tadqiqot
- **Sog'liqni saqlash**: Operatsiya, tibbiy ko'rik
- **Texnologiya**: Dasturiy ta'minot, xavfsizlik
- **Biznes**: Startup, qo'shma korxona, ishga yollash

### 💡 O'rganish maqsadlari:
- **Real biznes mantiq**: Haqiqiy vaziyatlar
- **Murakkab shartlar**: Ko'p parametrli qarorlar
- **Xavfsizlik**: Kirish nazorati, tasdiqlash
- **Jamoaviy qarorlar**: Bir necha tomon roziligi

---

## 📚 Qo'shimcha mashq qilish

### 1. **Else if qo'shing**
```javascript
// Har bir masalaga qo'shimcha shartlar qo'shing
if (condition1) {
  // birinchi natija
} else if (condition2) {
  // ikkinchi natija
} else {
  // uchinchi natija
}
```

### 2. **Switch case bilan solishtiring**
```javascript
// Ba'zi masalalarni switch case bilan yechib ko'ring
switch (value) {
  case 1:
    // birinchi variant
    break;
  case 2:
    // ikkinchi variant
    break;
  default:
    // standart variant
}
```

### 3. **Ternary operator ishlatib ko'ring**
```javascript
// Qisqa shartlar uchun ternary operator
let result = condition ? "true natija" : "false natija";
```

### 4. **O'z masalalaringizni yarating**
- O'zingizning ish sohangizdagi masalalar
- Kundalik hayotdagi vaziyatlar
- Ijodiy loyihalar uchun shartlar

---

## 🎯 Xulosa

Ushbu 30 ta masala JavaScript-da murakkab mantiqiy operatorlarni o'rganish uchun yaratilgan. Masalalar real biznes vaziyatlarini aks ettiradi va professional dasturlashda kerak bo'ladigan ko'nikmalarni rivojlantiradi.

O'rtacha darajadagi masalalar 2-3 ta shartni birlashtirish ko'nikmalarini o'rgatadi, murakkab masalalar esa 4 va undan ko'p shartli ifodalarni boshqarishni o'rgatadi.

Har bir masala amaliy vaziyatni ifodalaydi va real loyihalarda ishlatilishi mumkin bo'lgan mantiqiy strukturalarni o'z ichiga oladi.

---

*Murakkab masalalar to'plami yaratildi: 2025-yil 10-iyul*
*Mualliflik: Professional JavaScript Development*