Quyida `index.js` faylidagi funksionallikka o‘xshash, ammo biroz farqli vazifani bajaradigan masala keltiraman. Bu masala veb-saytdagi foydalanuvchi interfeysi bilan ishlash, hodisalarni boshqarish va `localStorage` bilan ishlashga qaratilgan. Masala `index.js`dagi navigatsiya menyusi va profil boshqaruvi kabi dinamik elementlarni o‘z ichiga oladi, lekin boshqa kontekstda.

---

### Masala: Foydalanuvchi sozlamalari panelini boshqarish

**Tavsif**: Siz veb-sayt uchun foydalanuvchi sozlamalari panelini yaratmoqchisiz. Bu panelda quyidagi funksionallik bo‘lishi kerak:
1. **Sozlamalar tugmasi**: Sahifada "Sozlamalar" tugmasi bo‘ladi, uni bosganda sozlamalar paneli ochiladi yoki yopiladi. Panel ochiq bo‘lganda tugma matni "Yopish" ga o‘zgaradi, yopiq bo‘lganda esa "Sozlamalar" ga qaytadi.
2. **Foydalanuvchi ma’lumotlari**: Foydalanuvchi panelda o‘z ismini kiritishi mumkin. Bu ism `localStorage`ga saqlanadi va sahifa yangilanganda qayta ko‘rsatiladi.
3. **Tema o‘zgartirish**: Panelda "Qorong‘i tema" va "Yorug‘ tema" ni tanlash uchun radio tugmalar bo‘ladi. Tanlangan tema `localStorage`ga saqlanadi va sahifa yuklanganda avtomatik qo‘llaniladi.
4. **Saqlash tugmasi**: Foydalanuvchi ismini va tanlangan temani saqlash uchun tugma bo‘ladi. Saqlanganda "Ma’lumotlar saqlandi!" xabari 2 soniya ko‘rinadi.
5. **Xavfsizlik tekshiruvi**: Agar kerakli elementlar (masalan, tugmalar yoki input maydonlari) HTMLda topilmasa, konsolda xato xabari chiqadi.

**Talablar**:
- HTML elementlarini `id` yoki `class` orqali tanlash uchun `document.getElementById` va `document.querySelector` ishlatiladi.
- `localStorage` yordamida foydalanuvchi ismi va tema saqlanadi.
- Panelning ochilishi/yopilishi va tugma matni dinamik ravishda o‘zgaradi.
- CSS sinflari yordamida tema o‘zgarishi amalga oshiriladi (masalan, `dark-theme` va `light-theme` sinflari).
- Hodisalar (`click`, `input`, `load`) ishlatiladi.

**HTML tuzilishi misoli** (sizga yo‘l-yo‘riq sifatida):
```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sozlamalar</title>
  <style>
    .settings-panel { display: none; }
    .settings-panel.active { display: block; }
    .dark-theme { background: #333; color: #fff; }
    .light-theme { background: #fff; color: #000; }
    .success-message { display: none; }
    .success-message.active { display: block; color: green; }
  </style>
</head>
<body>
  <button id="settingsBtn">Sozlamalar</button>
  <div id="settingsPanel" class="settings-panel">
    <input type="text" id="userName" placeholder="Ismingizni kiriting">
    <div>
      <label><input type="radio" name="theme" value="light"> Yorug‘ tema</label>
      <label><input type="radio" name="theme" value="dark"> Qorong‘i tema</label>
    </div>
    <button id="saveBtn">Saqlash</button>
  </div>
  <div id="successMessage" class="success-message">Ma’lumotlar saqlandi!</div>
  <script src="settings.js"></script>
</body>
</html>
```

**Vazifa**:
Yuqoridagi HTML tuzilishiga asoslanib, `settings.js` faylida quyidagi funksionallikni amalga oshiradigan JavaScript kodini yozing:
1. "Sozlamalar" tugmasini bosganda panel ochilsin/yopilsin, tugma matni "Sozlamalar" yoki "Yopish" ga o‘zgarsin.
2. Foydalanuvchi kiritgan ism `localStorage`ga saqlansin va sahifa yuklanganda input maydonida ko‘rsatilsin.
3. Tanlangan tema (`light` yoki `dark`) `localStorage`ga saqlansin va sahifa yuklanganda avtomatik qo‘llansin.
4. "Saqlash" tugmasi bosilganda ma’lumotlar saqlansin va "Ma’lumotlar saqlandi!" xabari 2 soniya ko‘rinsin.
5. Agar HTMLda kerakli elementlar topilmasa, konsolda xato xabari chiqsin.

**Qo'shimcha maslahatlar**:
- `index.js`dagi kabi hodisa ishlovchilaridan (`addEventListener`) foydalaning.
- `localStorage.getItem` va `localStorage.setItem` yordamida ma’lumotlarni saqlang.
- Tema o‘zgartirish uchun `document.body.classList` dan foydalanib, `dark-theme` yoki `light-theme` sinfini qo‘shing/olib tashlang.
- Xatolarni oldini olish uchun elementlarning mavjudligini tekshiring (`if` shartlari bilan).

Bu masala `index.js`dagi funksionallikka o‘xshaydi (menyu ochish/yopish, `localStorage` bilan ishlash, profil ko‘rsatish), lekin sozlamalar paneli va tema o‘zgartirish kabi yangi elementlarni qamrab oladi. Agar yechimni yozishda yordam kerak bo‘lsa yoki boshqa savollar bo‘lsa, ayting!




