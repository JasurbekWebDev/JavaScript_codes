5. Yosh chegarasi
Foydalanuvchi yoshi 13 dan katta va 60 dan kichik bo‘lsa, saytga kirish mumkin. Aks holda — taqiqlansin.



```HTML
  <div class="user-section">
    <p id="result"></p>
    <div class="container">
    <label for="userAge">Yosh chegarasi</label>
    <input type="number" id="user-age" placeholder="Yoshingizni kiriting...">
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
.user-section {
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

function userAge() {
  const user_age = document.getElementById('user-age');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  result.className = 'result-element';

  function showResult() {
    let age = parseInt(user_age.value, 10); // ✅ Raqamga aylantirdik

    if (isNaN(age)) {
      result.textContent = '❗ Iltimos, yoshingizni kiriting!';
      result.style.color = 'orange';
    } else if (age > 13 && age < 60) {
      result.textContent = '✅ Saytga kirish mumkin';
      result.style.color = 'green';
    } else {
      result.textContent = '❌ Saytga kirish mumkin emas!';
      result.style.color = 'red';
    }

    user_age.value = '';
  }

  btn.addEventListener('click', showResult);
}
userAge();

```
