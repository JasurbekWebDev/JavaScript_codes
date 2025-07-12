``` html
<div class="settings-section">
    <p id="result"></p>
    <div class="container">
      <label for="user">Xavfsizlik tekshiruvi</label>
      <input type="password" id="user-password" placeholder="Parol kiriting...">
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
.settings-section {
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
function xavfsizlik() {
  const password = document.getElementById('user-password');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  result.className = "result-element";

  function userData() {
    let userPassword = password.value;

    if (userPassword !== "" && userPassword.length >= 6) {
      result.textContent = "✅ Tizimga kirish mumkin";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Tizimga kirish mumkin emas";
      result.style.color = "red";
    }

    password.value = "";
  }

  btn.addEventListener('click', userData);
}

xavfsizlik();

```