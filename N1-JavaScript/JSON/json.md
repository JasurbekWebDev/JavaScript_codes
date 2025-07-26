JSON bilan ishlashni yaxshiroq tushunish uchun quyida bir nechta amaliy misollar keltiraman. Har bir misol real dunyo stsenariylariga asoslangan bo'lib, JSON ma'lumotlarini yaratish, o'zgartirish, API bilan ishlash va HTMLda ko'rsatish kabi holatlarni qamrab oladi. Har bir misol JavaScriptda yoziladi va tushunarli bo'lishi uchun izohlar bilan ta'minlanadi.

---

### **1. Talabalar ro'yxatini boshqarish (JSON ob'ekt va massivlar)**

**Stsenariy**: Sizda talabalar ro'yxati bor, ularning ma'lumotlarini JSON formatida saqlab, turli operatsiyalarni bajarish kerak.

```javascript
// Talabalar ro'yxati JSON formatida
const talabalarJson = `[
  {"id": 1, "ism": "Ali", "yosh": 20, "baholar": [85, 90, 78]},
  {"id": 2, "ism": "Vali", "yosh": 22, "baholar": [92, 88, 95]},
  {"id": 3, "ism": "Sardor", "yosh": 21, "baholar": [80, 85, 90]}
]`;

// JSONni JavaScript ob'ektiga aylantirish
const talabalar = JSON.parse(talabalarJson);

// 1. Har bir talabaning o'rtacha bahosini hisoblash
talabalar.forEach(talaba => {
  const o'rtachaBaho = talaba.baholar.reduce((sum, baho) => sum + baho, 0) / talaba.baholar.length;
  console.log(`${talaba.ism}ning o'rtacha bahosi: ${o'rtachaBaho.toFixed(2)}`);
});

// 2. Yangi talaba qo'shish
const yangiTalaba = {
  id: 4,
  ism: "Nodira",
  yosh: 19,
  baholar: [88, 92, 87]
};
talabalar.push(yangiTalaba);

// 3. JSONni yangilangan holda saqlash
const yangilanganJson = JSON.stringify(talabalar, null, 2);
console.log("Yangilangan JSON:", yangilanganJson);
```

**Natija (konsol)**:
```
Alining o'rtacha bahosi: 84.33
Valining o'rtacha bahosi: 91.67
Sardorning o'rtacha bahosi: 85.00
Yangilangan JSON: [
  {
    "id": 1,
    "ism": "Ali",
    "yosh": 20,
    "baholar": [85, 90, 78]
  },
  ...
  {
    "id": 4,
    "ism": "Nodira",
    "yosh": 19,
    "baholar": [88, 92, 87]
  }
]
```

**Tushuntirish**:
- JSON massivida talabalar ro'yxati saqlanadi.
- `JSON.parse()` bilan ma'lumotni JavaScript massiviga aylantiramiz.
- `forEach` va `reduce` yordamida o'rtacha baho hisoblanadi.
- Yangi talaba qo'shib, `JSON.stringify()` bilan JSON matniga aylantiramiz.

---

### **2. API'dan mahsulotlar ro'yxatini olish va HTMLda ko'rsatish**

**Stsenariy**: E-commerce veb-saytida mahsulotlar ro'yxatini API orqali JSON formatida olib, uni veb-sahifada ko'rsatish.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mahsulotlar ro'yxati</title>
  <style>
    .mahsulot { border: 1px solid #ccc; padding: 10px; margin: 10px; }
  </style>
</head>
<body>
  <h1>Mahsulotlar</h1>
  <div id="mahsulotlar"></div>

  <script>
    // JSONPlaceholder API'dan postlar o'rniga mahsulot sifatida ishlatamiz
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(javob => javob.json())
      .then(mahsulotlar => {
        const konteyner = document.getElementById('mahsulotlar');
        mahsulotlar.slice(0, 5).forEach(mahsulot => { // Faqat dastlabki 5 ta mahsulot
          const mahsulotDiv = document.createElement('div');
          mahsulotDiv.className = 'mahsulot';
          mahsulotDiv.innerHTML = `
            <h3>Mahsulot ${mahsulot.id}: ${mahsulot.title}</h3>
            <p>${mahsulot.body}</p>
          `;
          konteyner.appendChild(mahsulotDiv);
        });
      })
      .catch(xato => console.error("Xato yuz berdi:", xato));
  </script>
</body>
</html>
```

**Tushuntirish**:
- `fetch` yordamida JSONPlaceholder API'dan ma'lumot olinadi.
- Olingan JSON ma'lumotlari `json()` metodi orqali JavaScript ob'ektiga aylantiriladi.
- Har bir mahsulot HTML elementiga aylantirilib, sahifada ko'rsatiladi.
- CSS yordamida oddiy stil qo'shilgan.

**Natija**: Sahifada 5 ta mahsulot kartochkalari ko'rinadi, har birida sarlavha va tavsif mavjud.

---

### **3. JSON faylni o'qish va filtr qilish (Node.js)**

**Stsenariy**: Sizda mahalliy JSON faylda kitoblar ro'yxati bor. Muayyan yil oralig'ida nashr etilgan kitoblarni filtrlab, yangi JSON faylga saqlash kerak.

**kitoblar.json**:
```json
[
  {"id": 1, "nomi": "O'tgan kunlar", "muallif": "Abdulla Qodiriy", "nashrYili": 1926},
  {"id": 2, "nomi": "Mehrobdan Chayon", "muallif": "Abdulla Qodiriy", "nashrYili": 1929},
  {"id": 3, "nomi": "Alpomish", "muallif": "Xalq dastani", "nashrYili": 1950}
]
```

**JavaScript kodi (Node.js)**:
```javascript
const fs = require('fs');

// JSON faylni o'qish
fs.readFile('kitoblar.json', 'utf8', (xato, ma'lumot) => {
  if (xato) {
    console.error("Fayl o'qishda xato:", xato);
    return;
  }

  const kitoblar = JSON.parse(ma'lumot);

  // 1920-1930 yillardagi kitoblarni filtr qilish
  const filtrlanganKitoblar = kitoblar.filter(
    kitob => kitob.nashrYili >= 1920 && kitob.nashrYili <= 1930
  );

  // Filtrlangan kitoblarni yangi faylga saqlash
  fs.writeFile('filtrlangan_kitoblar.json', JSON.stringify(filtrlanganKitoblar, null, 2), (xato) => {
    if (xato) {
      console.error("Fayl yozishda xato:", xato);
      return;
    }
    console.log("Filtrlangan kitoblar saqlandi!");
    console.log(filtrlanganKitoblar);
  });
});
```

**Natija (filtrlangan_kitoblar.json)**:
```json
[
  {
    "id": 1,
    "nomi": "O'tgan kunlar",
    "muallif": "Abdulla Qodiriy",
    "nashrYili": 1926
  },
  {
    "id": 2,
    "nomi": "Mehrobdan Chayon",
    "muallif": "Abdulla Qodiriy",
    "nashrYili": 1929
  }
]
```

**Tushuntirish**:
- `fs.readFile` bilan JSON fayl o'qiladi.
- `filter` metodi yordamida 1920-1930 yillardagi kitoblar tanlanadi.
- Natija yangi JSON faylga saqlanadi.

---

### **4. JSON ma'lumotlardan grafik chizish**

**Stsenariy**: Talabalar baholarini JSON formatida saqlab, ularning o'rtacha baholarini grafik sifatida ko'rsatish.

**JSON ma'lumot**:
```json
[
  {"ism": "Ali", "baholar": [85, 90, 78]},
  {"ism": "Vali", "baholar": [92, 88, 95]},
  {"ism": "Sardor", "baholar": [80, 85, 90]}
]
```

**JavaScript kodi (HTML + Chart.js)**:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Baholar grafiki</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <canvas id="baholarChart" width="400" height="200"></canvas>

  <script>
    const talabalarJson = `[
      {"ism": "Ali", "baholar": [85, 90, 78]},
      {"ism": "Vali", "baholar": [92, 88, 95]},
      {"ism": "Sardor", "baholar": [80, 85, 90]}
    ]`;

    const talabalar = JSON.parse(talabalarJson);

    // O'rtacha baholarni hisoblash
    const labels = talabalar.map(talaba => talaba.ism);
    const o'rtachaBaholar = talabalar.map(talaba =>
      talaba.baholar.reduce((sum, baho) => sum + baho, 0) / talaba.baholar.length
);

    ```chartjs
    {
      "type": "bar",
      "data": {
        "labels": labels,
        "datasets": [{
          "label": "O'rtacha baholar",
          "data": o'rtachaBaholar,
          "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"],
          "borderColor": ["#FF6384", "#36A2EB", "#FFCE56"],
          "borderWidth": 1
        }]
      },
      "options": {
        "scales": {
          "y": {
            "beginAtZero": true,
            "max": 100
          }
        }
      }
    }
    ```
  </script>
</body>
</html>
```

**Tushuntirish**:
- JSON ma'lumotlaridan talabalar ismlari va o'rtacha baholari olinadi.
- Chart.js yordamida ustunli diagramma chiziladi.
- Har bir talaba uchun o'rtacha baho rangli ustun sifatida ko'rsatiladi.

**Natija**: Har bir talabaning o'rtacha bahosi rangli ustunli diagramma sifatida ko'rinadi.

---

### **5. Foydalanuvchi ma'lumotlarini JSON sifatida serverga yuborish**

**Stsenariy**: Foydalanuvchi formani to'ldiradi, ma'lumotlar JSON formatida serverga yuboriladi.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Foydalanuvchi ma'lumotlari</title>
</head>
<body>
  <h1>Ro'yxatdan o'tish</h1>
  <form id="forma">
    <input type="text" id="ism" placeholder="Ism" required><br>
    <input type="number" id="yosh" placeholder="Yosh" required><br>
    <input type="text" id="shahar" placeholder="Shahar" required><br>
    <button type="submit">Yuborish</button>
  </form>
  <p id="natija"></p>

  <script>
    document.getElementById('forma').addEventListener('submit', function(e) {
      e.preventDefault();

      // Formadan ma'lumotlarni olish
      const foydalanuvchi = {
        ism: document.getElementById('ism').value,
        yosh: parseInt(document.getElementById('yosh').value),
        shahar: document.getElementById('shahar').value
      };

      // JSON formatiga aylantirish
      const jsonMa'lumot = JSON.stringify(foydalanuvchi);

      // Serverga yuborish (masalan, JSONPlaceholder API)
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonMa'lumot
      })
        .then(javob => javob.json())
        .then(data => {
          document.getElementById('natija').innerText = `Ma'lumotlar yuborildi: ${JSON.stringify(data)}`;
        })
        .catch(xato => console.error("Xato:", xato));
    });
  </script>
</body>
</html>
```

**Tushuntirish**:
- Foydalanuvchi forma orqali ma'lumot kiritadi.
- Ma'lumotlar JSON formatiga aylantirilib, `POST` so'rovi orqali serverga yuboriladi.
- Serverdan kelgan javob HTMLda ko'rsatiladi.

**Natija**: Foydalanuvchi ma'lumotlari JSON sifatida serverga yuboriladi va javob ko'rsatiladi.

---

### **Qo'llanma va maslahatlar**:
1. **Xato boshqaruvi**: Har doim `try-catch` yoki `.catch()` yordamida JSON parse qilishdagi xatolarni ushlang.
2. **API sinovi**: JSONPlaceholder kabi bepul API'lardan foydalanib amaliyot qiling.
3. **Fayl ishlovi**: Node.js bilan JSON fayllarni o'qish va yozishni sinab ko'ring.
4. **Ma'lumotlar tuzilishi**: JSON tuzilishini murakkablashtirib, ichki ob'ektlar va massivlar bilan ishlang.

Agar qo'shimcha misollar yoki muayyan stsenariy bo'yicha yordam kerak bo'lsa, ayting!