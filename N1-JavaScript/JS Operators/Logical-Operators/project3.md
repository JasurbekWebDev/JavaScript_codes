
3. Maxfiy kirish 
Foydalanuvchi parolni kiritmagan yoki noto‘g‘ri parol kiritgan bo‘lsa, unga "Kirish rad etildi" degan xabar chiqsin.

``` HTML
<div class="parol">
    <label for="parol">Maxfiy kirish:</label>
    <input type="password" id="password" placeholder="Parol kiriting!">
    <p id="result"></p>
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
.parol-section {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 100%;
  text-align: center;
  
}

```


``` JavaScript
function password() {
  const parol = document.getElementById('password');
  const btn = document.getElementById('btn');
  let result = document.getElementById('result');
  result.className = 'result-element';

  function pass() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const isValid = passwordRegex.test(parol.value);

    if (parol.value.trim() === '') {
      result.textContent = "Iltimos, parol kiriting!";
      result.style.color = 'red';
    } else if (isValid) {
      result.textContent = "Parol to'g'ri!";
      result.style.color = 'green';
    } else {
      result.textContent = "Kirish rad etildi!";
      result.style.color = 'red';
    }

    parol.value = '';
  }

  btn.addEventListener('click', () => {
    pass();
  });
};

password();

```