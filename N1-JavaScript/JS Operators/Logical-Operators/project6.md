6. Reklamasiz rejim
Agar foydalanuvchi pullik obuna bo‘lgan yoki reklama o‘chirish sozlamasini yoqqan bo‘lsa, reklama ko‘rsatilmasin.



``` HTML
<div class="settings-section">
    <p id="result"></p>
    <div class="container">
      <div class="parent">
        <span class="title">pullik obuna</span>
        <label for="subscription"> <input type="checkbox" id="enable-subscription" value="">On</label>
        <label for="unsubscription"><input type="checkbox" id="paid-unsubscription">Off</label>
        
      </div>
      <div class="parent">
        <span class="title">reklamani o‘chirish</span>
          <label for="advertising"><input type="checkbox" id="enable-advertising">On</label>
          <label for="remove"><input type="checkbox" id="remove-ad">Off</label>
      </div>
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
  justify-content: start;
  
}
.parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: start;
}
.parent span {
  grid-column: span 2 / span 2;
}
.parent label {
  grid-row-start: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;

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
function user () {
  const btn = document.getElementById ('btn');
  const result = document.getElementById ('result');
  result.className = 'result-element';



  function checkPermissions () {
    let permissions = [];
   if (
      document.getElementById ('enable-subscription').checked &&
      document.getElementById ('enable-advertising').checked
    ) {
      permissions += `Siz pullik obuna bo'ldigiz va reklamasiz rijim yoqilgan `;
    } else if (
      document.getElementById ('paid-unsubscription').checked &&
      document.getElementById ('remove-ad').checked
    ) {
      permissions += `Siz da pullik obuna o'chirilgan va reklama rijimi yoqilgan `;
    } else {
      console.log("yoq");
      
    }

    result.textContent = permissions;
  }
  
  
  btn.addEventListener ('click', () => {
    checkPermissions ();
    document.getElementById ('enable-subscription').checked = false;
    document.getElementById ('enable-advertising').checked = false;
    document.getElementById ('paid-unsubscription').checked = false;
    document.getElementById ('remove-ad').checked = false;
  });
}
user ();

```