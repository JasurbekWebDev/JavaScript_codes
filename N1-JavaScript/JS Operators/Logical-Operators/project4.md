4. VIP mijozni aniqlash
   Agar foydalanuvchi 1000$ dan ko‘p xarid qilgan va 5 yildan beri mijoz bo‘lsa, unga VIP chegirma berilsin.

---

```HTML
<div class="parol-section">
    <p id="result"></p>
    <h2>VIP mijozni aniqlash</h2>
    <div class="vip">
    <label for="piv">Xarid qilingan maxsulotlar</label>

    <label for="apple"><input type="checkbox" id="apple">Apple</label>

    <label for="banana"><input type="checkbox" id="banana">Banana</label>

    <label for="chery"><input type="checkbox" id="chery">Chery</label>

    <label for="lemon"><input type="checkbox" id="lemon">Lemon</label>

    <label for="year">Siz necha yildan beri mijozsiz?</label>
    <input type="number" id="year" placeholder="Yini kiriting...">
    <button id="btn">Yuborish</button>
  </div>
  </div>

```

```css
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
.parol-section {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  margin-top: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

div input {
  margin: 8px 0 10px;
  padding: 5px;
  font-size: 18px;
  border: none;
}

div button {
  padding: 8px;
  font-size: 18px;
  border: none;
  width: 100%;
  margin-top: 6px;
}

div label {
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
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

```JavaScript
function vipUser() {
  const btn = document.getElementById('btn');
  let result = document.getElementById('result');
  let year = document.getElementById('year');

  result.className = 'result-element';

  function checkPermissions() {
    const prices = [249, 191, 330, 240]; // Apple, Banana, Chery, Lemon
    const apple = prices[0];
    const banana = prices[1];
    const chery = prices[2];
    const lemon = prices[3];

    let permission = 0;

    if (document.getElementById('apple').checked) permission += apple;
    if (document.getElementById('banana').checked) permission += banana;
    if (document.getElementById('chery').checked) permission += chery;
    if (document.getElementById('lemon').checked) permission += lemon;

    let yearValue = parseInt(year.value, 10); // YANGILANDI

    if (!permission || isNaN(yearValue)) {
      result.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
      result.style.color = 'red';
    } else if (permission >= 1000 && yearValue >= 5) {
      result.textContent = `Tabriklaymiz! Siz ${yearValue} yillik mijoz sifatida VIP chegirmaga egasiz. Umumiy xaridingiz: $${permission}`;
      result.style.color = 'green';
    } else {
      result.textContent = `Afsuski, siz VIP chegirmaga ega emassiz. Siz ${yearValue} yildan beri mijozsiz, umumiy xaridingiz: $${permission}`;
      result.style.color = 'red';
    }

    year.value = '';
  }

  btn.addEventListener('click', checkPermissions);
}
vipUser();

```
