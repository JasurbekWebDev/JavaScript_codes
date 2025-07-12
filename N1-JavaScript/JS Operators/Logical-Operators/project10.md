10. Ishchi haftasi
Haftaning kuni dushanbadan jumagacha bo‘lsa — "Ish kuni", aks holda — "Dam olish kuni" deb chiqsin.

``` html
<div class="settings-section">
    <p id="result"></p>
    <h2>Ishchi haftasi</h2>
    <div class="container">
      <label for="week-day">Hafta kunlari:</label>
      <input type="text" id="week-days" placeholder="hafta kunlarini kiriting...">
      <button id="btn">Yuborish</button>
    </div>
  </div>
```

``` css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.settings-section{
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

}
h2 {
  text-align: center;
}
div {
  margin-top: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  
}

div input {
  margin: 8px 0 10px;
  padding: 5px;
  border: none;
}

div button {
  padding: 8px;
  font-size: 18px;
  border: none;
  width: 100%;
  margin-top: 6px;
}



.result-element {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  font-size: 25px;
  width: 100%;
  text-align: center;
  
}
```

``` JavaScript

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
```