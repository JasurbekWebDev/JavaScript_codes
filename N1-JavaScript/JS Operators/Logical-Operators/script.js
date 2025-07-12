// // // 1. Yoshi va fuqaroligi orqali ovoz berish huquqini aniqlash
// // // Foydalanuvchi yoshi 18 dan katta va u O'zbekiston fuqarosi bo‘lsa, unga ovoz berishga ruxsat beriladi. Aks holda — yo‘q.

// // function countrySystem () {
// //   const userAge = document.getElementById('user-age')
// //   const userCountry = document.getElementById('user-country')
// //   const btn = document.getElementById('btn')
// //   let result = document.getElementById('result1')
// //   let title = document.getElementById('title')
// //   title.textContent = 'Yoshi va fuqaroligi orqali ovoz berish huquqini aniqlash'

// //   function userSearch () {
// //     let user_age = parseInt(userAge.value, 10)
// //     let user_country = userCountry.value.trim().toLowerCase()
// //     result.className = 'result-element'
// //     if (user_age >= 18 && user_country === "o'zbekiston") {
// //       result.textContent = 'Xush kelibsiz, sizga ovoz berishga ruxsat etilgan!'
// //       document.getElementById('container').style.display = 'none'
// //       // document.getElementById('email-container').style.display = 'flex'
// //       title.textContent = "Ro'yxatdan o'tish sharti"
// //       result.style.color = 'green'
// //     } else if (user_age >= 18 && user_country !== "O'zbekiston") {
// //       result.textContent =
// //         "Xush kelibsiz, Afsuski siz O'zbekiston fuqarosi emassiz!"
// //       result.style.color = 'red'
// //     } else {
// //       result.textContent =
// //         "Xush kelibsiz, siz ovoz berish yoshiga to'lmagansiz!"
// //       result.style.color = 'red'
// //     }

// //     userAge.value = ''
// //     userCountry.value = ''
// //   }

// //   btn.addEventListener('click', () => {
// //     userSearch()
// //   })
// // }
// // countrySystem()

// // // 2. Ro'yxatdan o'tish sharti
// // // Agar foydalanuvchi email yoki telefon raqam kiritgan bo‘lsa, ro‘yxatdan o‘tish bosqichiga ruxsat beriladi.
// // function emailSystem () {
// //   const email = document.getElementById('user-email')
// //   const tel = document.getElementById('tel-number')
// //   let btn = document.getElementById('btn') // TO‘G‘RILANDI
// //   let result = document.getElementById('result1') // TO‘G‘RILANDI

// //   function showResult () {
// //     let user_email = String(email.value).trim()
// //     let user_tel = tel.value.trim() // parseInt shart emas
// //     result.className = 'result-element'

// //     if (user_email !== '' || user_tel !== '') {
// //       result.textContent = "Siz muvaffaqiyatli ro'yhatdan o'tdingiz!"
// //       result.style.color = 'green'
// //     } else {
// //       result.textContent =
// //         "Iltimos, hech bo'lmasa email yoki telefon raqamingizni kiriting!"
// //       result.style.color = 'red'
// //     }

// //     email.value = ''
// //     tel.value = ''
// //   }

// //   btn.addEventListener('click', () => {
// //     showResult()
// //   })
// // }
// // emailSystem()

// // 3. Maxfiy kirish
// // Foydalanuvchi parolni kiritmagan yoki noto‘g‘ri parol kiritgan bo‘lsa, unga "Kirish rad etildi" degan xabar chiqsin.

// function password() {
//   const parol = document.getElementById('password');
//   const btn = document.getElementById('btn');
//   let result = document.getElementById('result');
//   result.className = 'result-element';

//   function pass() {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
//     const isValid = passwordRegex.test(parol.value);

//     if (parol.value.trim() === '') {
//       result.textContent = "Iltimos, parol kiriting!";
//       result.style.color = 'red';
//     } else if (isValid) {
//       result.textContent = "Parol to'g'ri!";
//       result.style.color = 'green';
//     } else {
//       result.textContent = "Kirish rad etildi!";
//       result.style.color = 'red';
//     }

//     parol.value = '';
//   }

//   btn.addEventListener('click', () => {
//     pass();
//   });
// };

// password();

// 4. VIP mijozni aniqlash
// Agar foydalanuvchi 1000$ dan ko‘p xarid qilgan va 5 yildan beri mijoz bo‘lsa, unga VIP chegirma berilsin.

// function vipUser() {
//   const btn = document.getElementById('btn');
//   let result = document.getElementById('result');
//   let year = document.getElementById('year');

//   result.className = 'result-element';

//   function checkPermissions() {
//     const prices = [249, 191, 330, 240]; // Apple, Banana, Chery, Lemon
//     const apple = prices[0];
//     const banana = prices[1];
//     const chery = prices[2];
//     const lemon = prices[3];

//     let permission = 0;

//     if (document.getElementById('apple').checked) permission += apple;
//     if (document.getElementById('banana').checked) permission += banana;
//     if (document.getElementById('chery').checked) permission += chery;
//     if (document.getElementById('lemon').checked) permission += lemon;

//     let yearValue = parseInt(year.value, 10); // YANGILANDI

//     if (!permission || isNaN(yearValue)) {
//       result.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
//       result.style.color = 'red';
//     } else if (permission >= 1000 && yearValue >= 5) {
//       result.textContent = `Tabriklaymiz! Siz ${yearValue} yillik mijoz sifatida VIP chegirmaga egasiz. Umumiy xaridingiz: $${permission}`;
//       result.style.color = 'green';
//     } else {
//       result.textContent = `Afsuski, siz VIP chegirmaga ega emassiz. Siz ${yearValue} yildan beri mijozsiz, umumiy xaridingiz: $${permission}`;
//       result.style.color = 'red';
//     }

//     year.value = '';
//   }

//   btn.addEventListener('click', checkPermissions);
// }
// vipUser();

// 5. Yosh chegarasi
// Foydalanuvchi yoshi 13 dan katta va 60 dan kichik bo‘lsa, saytga kirish mumkin. Aks holda — taqiqlansin.

// function userAge() {
//   const user_age = document.getElementById('user-age');
//   const btn = document.getElementById('btn');
//   const result = document.getElementById('result');
//   result.className = 'result-element';

//   function showResult() {
//     let age = parseInt(user_age.value, 10); // ✅ Raqamga aylantirdik

//     if (isNaN(age)) {
//       result.textContent = '❗ Iltimos, yoshingizni kiriting!';
//       result.style.color = 'orange';
//     } else if (age > 13 && age < 60) {
//       result.textContent = '✅ Saytga kirish mumkin';
//       result.style.color = 'green';
//     } else {
//       result.textContent = '❌ Saytga kirish mumkin emas!';
//       result.style.color = 'red';
//     }

//     user_age.value = '';
//   }

//   btn.addEventListener('click', showResult);
// }
// userAge();

// 6. Reklamasiz rejim
// Agar foydalanuvchi pullik obuna bo‘lgan yoki reklama o‘chirish sozlamasini yoqqan bo‘lsa, reklama ko‘rsatilmasin.

// function user() {
//   const btn = document.getElementById('btn');
//   const result = document.getElementById('result');
//   result.className = 'result-element';

//   function checkPermissions() {
//     const isSubscription = document.getElementById('enable-subscription').checked; //  on1
//     const isAdvertising = document.getElementById('enable-advertising').checked; // on2
//     const isUnSubscription = document.getElementById('paid-unsubscription').checked; // off2
//     const isAdRemoved = document.getElementById('remove-ad').checked; // off2

//     if (isSubscription && isAdvertising) {
//       console.log("✅ reklamasiz");
      
//     } else if (isUnSubscription && isAdvertising || isSubscription && isAdRemoved) {
//       console.log("⚠️ qisqa reklama 1");
      
//     } else if (isUnSubscription && isAdRemoved) {
//       console.log("❌ reklama ko‘rsatiladi");
      
//     } else {
//       console.log("⚠️ maydoni to‘ldiring");
      
//     }
   
//   }

//   btn.addEventListener('click', () => {
//     checkPermissions();

//     // Checkboxlarni tozalash (ixtiyoriy)
//     document.getElementById('enable-subscription').checked = false;
//     document.getElementById('enable-advertising').checked = false;
//     document.getElementById('paid-unsubscription').checked = false;
//     document.getElementById('remove-ad').checked = false;
//   });
// }

// user();

// function user() {
//   const btn = document.getElementById('btn');
//   const result = document.getElementById('result');
//   result.className = 'result-element';

//   function checkPermissions() {
//     const enableSubscription = document.getElementById('enable-subscription').checked;
//     const paidUnsubscription = document.getElementById('paid-unsubscription').checked;
//     const enableAdvertising = document.getElementById('enable-advertising').checked;
//     const removeAd = document.getElementById('remove-ad').checked;

//     // 1️⃣ Barcha maydonlar belgilangan bo‘lsa
//     if (
//       enableSubscription &&
//       paidUnsubscription &&
//       enableAdvertising &&
//       removeAd
//     ) {
//       result.textContent = "ℹ️ Belgilangan kombinatsiya tushunarsiz!";
//       result.style.color = "gray";
//       return;
//     }

//     // 2️⃣ Barcha maydonlar bo‘sh bo‘lsa
//     if (
//       !enableSubscription &&
//       !paidUnsubscription &&
//       !enableAdvertising &&
//       !removeAd
//     ) {
//       result.textContent = "⚠️ Maydoni to‘ldiring!";
//       result.style.color = "orange";
//       return;
//     }

//     // 3️⃣ enable-subscription + enable-advertising
//     if (enableSubscription && enableAdvertising &&
//         !paidUnsubscription && !removeAd) {
//       result.textContent = "✅ Reklama ko‘rsatilmaydi (Reklamasiz rejim yoqilgan)";
//       result.style.color = "green";
//     }

//     // 4️⃣ paid-unsubscription + enable-advertising
//     else if (paidUnsubscription && enableAdvertising &&
//              !enableSubscription && !removeAd) {
//       result.textContent = "⚠️ Qisqa reklama";
//       result.style.color = "blue";
//     }

//     // 5️⃣ enable-subscription + remove-ad
//     else if (enableSubscription && removeAd &&
//              !paidUnsubscription && !enableAdvertising) {
//       result.textContent = "⚠️ Qisqa reklama";
//       result.style.color = "blue";
//     }

//     // 6️⃣ paid-unsubscription + remove-ad
//     else if (paidUnsubscription && removeAd &&
//              !enableSubscription && !enableAdvertising) {
//       result.textContent = "❌ Reklama ko‘rsatiladi (Reklamasiz rejim yoqilmagan)";
//       result.style.color = "red";
//     }

//     // 7️⃣ Boshqa noaniq kombinatsiyalar
//     else {
//       result.textContent = "ℹ️ Belgilangan kombinatsiya tushunarsiz!";
//       result.style.color = "gray";
//     }
//   }

//   btn.addEventListener('click', () => {
//     checkPermissions();

//     // Formani tozalash (ixtiyoriy)
//     document.getElementById('enable-subscription').checked = false;
//     document.getElementById('paid-unsubscription').checked = false;
//     document.getElementById('enable-advertising').checked = false;
//     document.getElementById('remove-ad').checked = false;
//   });
// }

// user();



// 7. Xavfsizlik tekshiruvi
// Agar foydalanuvchi parolni kiritmagan bo‘lsa yoki parol uzunligi 6 belgidan kam bo‘lsa, tizim kirishni to‘xtatsin.

// function xavfsizlik() {
//   const password = document.getElementById('user-password');
//   const btn = document.getElementById('btn');
//   const result = document.getElementById('result');
//   result.className = "result-element";

//   function userData() {
//     let userPassword = password.value;

//     if (userPassword !== "" && userPassword.length >= 6) {
//       result.textContent = "✅ Tizimga kirish mumkin";
//       result.style.color = "green";
//     } else {
//       result.textContent = "❌ Tizimga kirish mumkin emas";
//       result.style.color = "red";
//     }

//     password.value = "";
//   }

//   btn.addEventListener('click', userData);
// }

// xavfsizlik();


// 8. Bepul yetkazib berish
// Xaridor umumiy xarid summasi 500 ming so‘mdan katta yoki chegirma kodidan foydalangan bo‘lsa — yetkazib berish bepul.

// const btn = document.getElementById("btn");

// function delivery() {
//   const price = document.getElementById('price');
//   const result = document.getElementById('result');
//   const usedCode = document.getElementById('used-code').checked; // yangi
//   result.className = "result-element";

//   const amount = 500;
//   const priceAmount = parseInt(price.value, 10);

//   if (priceAmount >= amount || usedCode) {
//     result.textContent = "✅ Yetkazib berish bepul";
//     result.style.color = "green";
//   } else {
//     result.textContent = "❌ Yetkazib berish uchun to‘lov talab qilinadi";
//     result.style.color = "red";
//   }

//   price.value = '';
//   document.getElementById('used-code').checked = false;
// }

// btn.addEventListener('click', delivery);


// 9. Kirish sahifasi
// Agar foydalanuvchi login kiritmagan yoki parol kiritmagan bo‘lsa, "Iltimos, barcha maydonlarni to‘ldiring" degan xabar chiqsin.

// const btn = document.getElementById('btn');
// function userSave() {
//   const login = document.getElementById('user-login')
//   const password = document.getElementById('user-password')
//   const result = document.getElementById('result');
//   result.className = "result-element";

  
//   if (login.value.trim() !== "" && password.value.trim() !== "") {
//      result.textContent = "✅ Tizimga kirish mumkin";
//       result.style.color = "green";
//   } else {
//     result.textContent = "❌ Iltimos, barcha maydonlarni to‘ldiring";
//       result.style.color = "red";
//   }

//   login.value = "";
//   password.value = "";

  
// }
// btn.addEventListener('click', userSave)
// document.addEventListener('keydown', (e) => {
//   if (e.key === "Enter") {
//     userSave()
//   }
// })

// 10. Ishchi haftasi
// Haftaning kuni dushanbadan jumagacha bo‘lsa — "Ish kuni", aks holda — "Dam olish kuni" deb chiqsin.

const btn = document.getElementById("btn");

function weekDays() {
  const weekDaysInput = document.getElementById('week-days');
  const resultDiv = document.getElementById('result');
  resultDiv.className = "result-element"; // Natija diviga CSS klassini qo'shamiz

  // Foydalanuvchi kiritgan matnni olamiz va bir xil formatga keltiramiz
  // (bo'sh joylarni olib tashlaymiz, kichik harflarga o'tkazamiz)
  let dayName = weekDaysInput.value.trim().toLowerCase();

  let message = ""; // Natija uchun bo'sh string

  // Haftaning ish kunlari ro'yxati
  const workDays = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma"];
  // Haftaning dam olish kunlari ro'yxati
  const weekendDays = ["shanba", "yakshanba"];

  if (workDays.includes(dayName)) {
    message = `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} - Bugun ish kuni`;
    resultDiv.style.color = "green"; // Ish kuni uchun yashil rang
  } else if (weekendDays.includes(dayName)) {
    message = `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} - Bugun dam olish kuni`;
    resultDiv.style.color = "red"; // Dam olish kuni uchun qizil rang
  } else {
    message = "Noto'g'ri kun nomi kiritildi. Iltimos, to'g'ri kun nomini kiriting.";
    resultDiv.style.color = "orange"; // Xato uchun to'q sariq rang
  }

  // Natijani DOMga chiqaramiz
  resultDiv.textContent = message;

  // Input maydonini tozalaymiz
  weekDaysInput.value = '';
}

// Tugmani bosish hodisasini tinglovchisi
btn.addEventListener('click', weekDays);



