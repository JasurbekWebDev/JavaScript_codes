
2. Ro'yxatdan o'tish sharti
Agar foydalanuvchi email yoki telefon raqam kiritgan bo‘lsa, ro‘yxatdan o‘tish bosqichiga ruxsat beriladi.
----

``` HTML
<div class="email-section">
    <h2 id="title"></h2>
    <div id="email-container" class="email-container">
      <label for="email">Email:</label>
      <input type="email" id="user-email" placeholder="Emailingizni kiriting...">
      <label for="phone">Phone number:</label>
      <input type="tel" id="tel-number" placeholder="Telefon raqamingiz...">
    </div>
    <p id="result1"></p>
    <button id="btn">Yuborish</button>
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
.email-section {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

}
h2 {
  font-size: 24px;
  margin-top: 10px;
  font-weight: 500;
  letter-spacing: 2px;
}
div {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
  
}
div input {
  margin: 4px 0 10px;
  padding: 5px;
  font-size: 18px;
  border: none;
}

div button {
  padding: 8px;
  font-size: 18px;
  border: none;
}

div label {
  font-size: 18px;
}

.result-element {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  font-size: 25px;
}
```

``` JavaScript
function emailSystem () {
  const email = document.getElementById('user-email');
  const tel = document.getElementById('tel-number');
  let btn = document.getElementById('btn'); // TO‘G‘RILANDI
  let result = document.getElementById('result1'); // TO‘G‘RILANDI

  function showResult () {
    let user_email = String(email.value).trim();
    let user_tel = tel.value.trim(); // parseInt shart emas
    result.className = 'result-element'

    if (user_email !== '' || user_tel !== '') {
      result.textContent = "Siz muvaffaqiyatli ro'yhatdan o'tdingiz!";
      result.style.color = 'green';
    } else {
      result.textContent = "Iltimos, hech bo'lmasa email yoki telefon raqamingizni kiriting!";
      result.style.color = 'red';
    }

    email.value = '';
    tel.value = '';
  }

  btn.addEventListener('click', () => {
    showResult()
  });
}
emailSystem();


```