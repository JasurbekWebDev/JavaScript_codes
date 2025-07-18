
// 2. Asosiy usul - appendChild() bilan
// 1. Label elementini chaqirish
// const myLabel = document.getElementById('myLabel');
// myLabel.textContent = 'Ism: '

// const { cloneElement } = require("react");

// // 2. Input elementini yaratish
// const newInput = document.createElement('input');

// // 3. Input atributlariga element qo'shish
// newInput.type = 'text';
// newInput.id = 'myInput';
// newInput.name = 'userName';
// newInput.placeholder = "Ismingizni kiriting...";

// // 4. Label ichiga inputni qo'shish
// myLabel.appendChild(newInput);


// // 3. Turli xil usullar
// // 3.1. querySelector() bilan
// const labelClass = document.querySelector(".my-label-class");
// labelClass.textContent = "Email: ";
// const emailInput = document.createElement('input');
// emailInput.type = 'email';
// emailInput.id = 'userEmail';
// emailInput.name = 'email';
// emailInput.placeholder = "Email kiriting..."
// emailInput.required = true;
// labelClass.appendChild(emailInput);


// 3.2. getElementsByClassName() bilan
// const labels = Array.from(document.getElementsByClassName('form-label'));

//     for (let i = 0; i < labels.length; i++) {
//       const input = document.createElement('input');

//       // Username uchun text, Password uchun password turi beriladi
//       if (labels[i].textContent.includes('Username')) {
//         input.type = 'text';
//       } else if (labels[i].textContent.includes('Password')) {
//         input.type = 'password';
//       }

//       input.className = 'form-control';
//       labels[i].appendChild(input);
//     }

// const container = document.createElement('div');
// const form = document.createElement('form');
// const message = document.createElement('p');
// const btn = document.createElement('button');
// document.body.append(container);
// container.appendChild(message)
// container.appendChild(form)
// btn.textContent = 'Yuborish'
// container.appendChild(btn)

// const formInputNames = ['text','email','password'];

// for (let i = 0; i < formInputNames.length; i++) {
//   const type = formInputNames[i];

//   const label = document.createElement('label');
//   const input = document.createElement('input');
//   input.type = type;

//   if (type === 'text') {
//     label.textContent = 'Username:';
//     input.id = 'userName';
//     input.placeholder = 'User name...';
//     input.name = 'user-name';
//     input.required = true;
//   } else if (type === 'email') {
//     label.textContent = 'Email:';
//     input.id = 'userEmail';
//     input.placeholder = 'User email...';
//     input.name = 'user-email';
//     input.required = true;
//   } else if (type === 'password') {
//     label.textContent = 'Password:';
//     input.id = 'userPassword';
//     input.placeholder = 'User password...';
//     input.required = true;
//     input.name = 'user-password';
//   }

//   label.appendChild(input);
//   form.appendChild(label);
// }

// btn.addEventListener('click', (e) => {
//   e.preventDefault(); 

//   const username = document.getElementById('userName').value;
//   const email = document.getElementById('userEmail').value;
//   const password = document.getElementById('userPassword').value;

//   if (!username) {
//     message.textContent = "Ism kiritilishi shart!";
//     message.style.color = 'red';
//   } 
//    if (!email) {
//     message.textContent = "Email kiritilishi shart!";
//     message.style.color = 'red';
//   } 
//    if (!password) {
//     message.textContent = "Email kiritilishi shart!";
//     message.style.color = 'red';
//   } else {
//     message.textContent = "Barcha maydonlar kiritilishi shart!";
//     message.style.color = 'red';
//     return;
//   }

//   console.log("Username:", username);
//   console.log("Email:", email);
//   console.log("Password:", password);

//   message.textContent = "✅ Bron qabul qilindi!";
//   message.style.color = 'green';

//   form.reset(); 
// });

// appendChild()
const myLabel = document.getElementById('myLabel');
const newInput = document.createElement('input');
newInput.type = 'text';
newInput.id = "user-name";
newInput.name = "user-name";
newInput.className = 'username';
newInput.placeholder = "Enter your name";
newInput.required = true;
myLabel.appendChild(newInput);

// querySelector()
const labelClass = document.querySelector('.my-label-class');
const input = document.createElement('input');
input.type = 'email';
labelClass.textContent = 'Email: ';
input.id = 'user-email';
input.required = true;
input.name = 'user-email';
labelClass.appendChild(input);

// getElementsByClassName()
const label = document.getElementsByClassName('form-label');
for (let i = 0; i < label.length; i++) {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  label[i].appendChild(input)
}

// innerHTML 
const my_label = document.getElementById('my-label');
my_label.innerHTML += '<input type="text" id="nweInput" placeholder="Matin kiriting..."/>' 

// insertAdjacentHTML()
const insert_label = document.getElementById('insert-label');
insert_label.insertAdjacentHTML('beforeend', '<input type="text" class="my-input"/>')

// Matn input
const textInput = document.createElement('input');
textInput.type = 'text';
textInput.maxLength = 50;
textInput.required = true;

// Email input
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'example@email.com';
emailInput.pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
insert_label.appendChild(emailInput)


// Parol input
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.minLength = 8;
passwordInput.required = true;
insert_label.appendChild(passwordInput)


//  Raqam input
const numberInput = document.createElement('input');
numberInput.type = 'number';
numberInput.min = 0;
numberInput.max = 100;
numberInput.step = 1;
insert_label.appendChild(numberInput)

// Sana input
const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.valueAsDate = new Date();
insert_label.appendChild(dateInput)


// Keng qamrovli misol
// Form yaratish funksiyasi
function createFormfield(labelText, inputType, inputId, placeholder = '') {
  // Label yaratish
  const label = document.createElement('label');
  label.textContent = labelText;
  label.htmlFor = inputId;

  // Input yaratish
  const input = document.createElement('input');
  input.type = inputType;
  input.id = inputId;
  input.name = inputId;
  input.placeholder = placeholder;

  // Label ichiga input qo'shish
  label.appendChild(input);

  return label;
}

// Foydalanish
const container = document.getElementById('form-container');
const nameField = createFormfield('Ism', 'text', 'userName', 'Ismingizni kiriting...');
const emailField = createFormfield('Email', 'eamil', 'userEmail', 'emil@example.com');
const phoneField = createFormfield('Telefon', 'tel', 'userPhone', '+998 99 123 45 67');

container.appendChild(nameField);
container.appendChild(emailField);
container.appendChild(phoneField);

const my_Label = document.getElementById('my-Label');
const my_Input = document.createElement('input');
my_Input.type = 'text';

// Event listener qo'shish
my_Input.addEventListener('input', function(e) {
  console.log('Input qiymati: ', e.target.value);
})


my_Input.addEventListener('focus', function() {
  console.log('Input fokusda');
  
})

my_Input.addEventListener('blur', function() {
  console.log("Input fokusdan chiqdi");
  
})

my_Label.appendChild(my_Input)


const elements = document.getElementsByClassName('my-class');
console.log(elements.length); // Elementlar soni
console.log(elements[0], elements[0].textContent = 'Element 1'); // Birinchi element
console.log(elements.item(1), elements.item(1).textContent = 'Element 2'); // Ikkinchi element
console.log(elements.item(2), elements.item(2).textContent = 'Element 3'); // Uchunchi element



// 3. Comparison Operators (Taqqaslash Operatorlari)
// == Teng
console.log(5 == '5');
// === Qat'iy teng
console.log(5 === '5');
// != Teng emas
console.log(5 != '5');

// !== Qat'iy teng emas
console.log(5 !== '5');

