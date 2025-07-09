
1. Yoshi va fuqaroligi orqali ovoz berish huquqini aniqlash
Foydalanuvchi yoshi 18 dan katta va u O'zbekiston fuqarosi bo‘lsa, unga ovoz berishga ruxsat beriladi. Aks holda — yo‘q.
----

``` HTML
<div class="country-section">
    <h2 id="title"></h2>
    <div id="container">
      <label for="age">Yoshingiz 18 dan kattami:</label>
      <input type="number" id="user-age" placeholder="Yoshingizni kiriting...">
      <label for="country">Fuqarolik:</label>
      <input type="text" id="user-country" placeholder="Mamlakatni kiriting...">
      <button id="btn">Yuborish</button>
      <p id="result1"></p>
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
.country-section {
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
function countrySystem () {
  const userAge = document.getElementById('user-age');
  const userCountry = document.getElementById('user-country');
  const btn = document.getElementById('btn');
  let result = document.getElementById('result1');
  let title = document.getElementById('title');
  title.textContent = 'Yoshi va fuqaroligi orqali ovoz berish huquqini aniqlash';

  function userSearch () {
    let user_age = parseInt(userAge.value, 10);
    let user_country = String(userCountry.value);
    result.className = 'result-element';
    if (user_age >= 18 && user_country == "O'zbekiston") {
      result.textContent = 'Xush kelibsiz, sizga ovoz berishga ruxsat etilgan!';
      document.getElementById('container').style.display = 'none';
      result.style.color = 'green';
    } else if (user_age >= 18 && user_country !== "O'zbekiston") {
      result.textContent =
        "Xush kelibsiz, Afsuski siz O'zbekiston fuqarosi emassiz!";
      result.style.color = 'red';
    } else {
      result.textContent =
        "Xush kelibsiz, siz ovoz berish yoshiga to'lmagansiz!";
      result.style.color = 'red';
    }

    userAge.value = '';
    userCountry.value = '';
  }

  btn.addEventListener('click', () => {
    userSearch();
  });
};
countrySystem();
```