# JavaScript yordamida `<label>` elementiga `<input>` qo'shish - To'liq qo'llanma

## 1. Asosiy tushuncha

`<label>` elementiga `<input>` qo'shish - bu form elementlarini yaratish va ularni bir-biriga bog'lashning muhim usuli. Bu usul foydalanuvchi tajribasini yaxshilaydi va accessibility standartlariga javob beradi.

## 2. Asosiy usul - appendChild() bilan

### HTML strukturasi:
```html
<label id="myLabel">Ism:</label>
```

### JavaScript kodi:
```javascript
// 1. Label elementiga havola oling
const myLabel = document.getElementById('myLabel');

// 2. Input elementini yarating
const newInput = document.createElement('input');

// 3. Input atributlarini o'rnating
newInput.type = 'text';
newInput.id = 'userInput';
newInput.name = 'userName';
newInput.placeholder = 'Ismingizni kiriting';

// 4. Label ichiga input qo'shing
myLabel.appendChild(newInput);
```

### Natija:
```html
<label id="myLabel">Ism:<input type="text" id="userInput" name="userName" placeholder="Ismingizni kiriting"></label>
```

## 3. Turli xil usullar

### 3.1. querySelector() bilan
```javascript
const label = document.querySelector('.my-label-class');
const input = document.createElement('input');
input.type = 'email';
input.required = true;
label.appendChild(input);
```

### 3.2. getElementsByClassName() bilan
```javascript
const labels = document.getElementsByClassName('form-label');
for (let i = 0; i < labels.length; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    labels[i].appendChild(input);
}
```

### 3.3. innerHTML bilan
```javascript
const label = document.getElementById('myLabel');
label.innerHTML += '<input type="text" id="newInput" placeholder="Matn kiriting">';
```

### 3.4. insertAdjacentHTML() bilan
```javascript
const label = document.getElementById('myLabel');
label.insertAdjacentHTML('beforeend', '<input type="text" class="my-input">');
```

## 4. Turli xil input turlari

### 4.1. Matn input
```javascript
const textInput = document.createElement('input');
textInput.type = 'text';
textInput.maxLength = 50;
textInput.required = true;
```

### 4.2. Email input
```javascript
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'example@email.com';
emailInput.pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
```

### 4.3. Parol input
```javascript
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.minLength = 8;
passwordInput.required = true;
```

### 4.4. Raqam input
```javascript
const numberInput = document.createElement('input');
numberInput.type = 'number';
numberInput.min = 0;
numberInput.max = 100;
numberInput.step = 1;
```

### 4.5. Sana input
```javascript
const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.valueAsDate = new Date();
```

## 5. Keng qamrovli misol

```javascript
// Form yaratish funksiyasi
function createFormField(labelText, inputType, inputId, placeholder = '') {
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
const nameField = createFormField('Ism:', 'text', 'userName', 'Ismingizni kiriting');
const emailField = createFormField('Email:', 'email', 'userEmail', 'email@example.com');
const phoneField = createFormField('Telefon:', 'tel', 'userPhone', '+998 90 123 45 67');

container.appendChild(nameField);
container.appendChild(emailField);
container.appendChild(phoneField);
```

## 6. Event listener qo'shish

```javascript
const label = document.getElementById('myLabel');
const input = document.createElement('input');
input.type = 'text';

// Event listener qo'shish
input.addEventListener('input', function(e) {
    console.log('Input qiymati:', e.target.value);
});

input.addEventListener('focus', function() {
    console.log('Input fokusda');
});

input.addEventListener('blur', function() {
    console.log('Input fokusdan chiqdi');
});

label.appendChild(input);
```

## 7. Dinamik forma yaratish

```javascript
const formData = [
    { label: 'Ism', type: 'text', id: 'firstName', required: true },
    { label: 'Familiya', type: 'text', id: 'lastName', required: true },
    { label: 'Email', type: 'email', id: 'email', required: true },
    { label: 'Yosh', type: 'number', id: 'age', min: 18, max: 100 },
    { label: 'Tug\'ilgan sana', type: 'date', id: 'birthDate' }
];

const form = document.createElement('form');

formData.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label + ':';
    
    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;
    input.name = field.id;
    
    if (field.required) input.required = true;
    if (field.min) input.min = field.min;
    if (field.max) input.max = field.max;
    
    label.appendChild(input);
    form.appendChild(label);
    
    // Br element qo'shish (yangi qator uchun)
    form.appendChild(document.createElement('br'));
});

document.body.appendChild(form);
```

## 8. CSS bilan bezash

```javascript
const label = document.createElement('label');
label.textContent = 'Styled Input:';
label.style.display = 'block';
label.style.marginBottom = '10px';
label.style.fontWeight = 'bold';

const input = document.createElement('input');
input.type = 'text';
input.style.width = '100%';
input.style.padding = '10px';
input.style.border = '2px solid #ccc';
input.style.borderRadius = '4px';
input.style.fontSize = '16px';

label.appendChild(input);
document.body.appendChild(label);
```

## 9. Validation qo'shish

```javascript
function createValidatedInput(labelText, inputType, validationRules) {
    const label = document.createElement('label');
    label.textContent = labelText;
    
    const input = document.createElement('input');
    input.type = inputType;
    
    // Validation rules qo'llash
    if (validationRules.required) input.required = true;
    if (validationRules.minLength) input.minLength = validationRules.minLength;
    if (validationRules.maxLength) input.maxLength = validationRules.maxLength;
    if (validationRules.pattern) input.pattern = validationRules.pattern;
    
    // Custom validation
    input.addEventListener('input', function() {
        if (validationRules.customValidation) {
            const isValid = validationRules.customValidation(this.value);
            if (!isValid) {
                this.setCustomValidity('Noto\'g\'ri format');
            } else {
                this.setCustomValidity('');
            }
        }
    });
    
    label.appendChild(input);
    return label;
}

// Foydalanish
const passwordField = createValidatedInput('Parol:', 'password', {
    required: true,
    minLength: 8,
    customValidation: (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value);
    }
});
```

## 10. Accessibility (Kirish imkoniyati)

```javascript
// Accessibility uchun yaxshi amaliyot
function createAccessibleInput(labelText, inputType, inputId, description) {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.htmlFor = inputId;
    
    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.name = inputId;
    
    // ARIA attributes
    if (description) {
        const descId = inputId + '-desc';
        input.setAttribute('aria-describedby', descId);
        
        const descElement = document.createElement('div');
        descElement.id = descId;
        descElement.textContent = description;
        descElement.style.fontSize = '0.8em';
        descElement.style.color = '#666';
        
        label.appendChild(input);
        label.appendChild(descElement);
    } else {
        label.appendChild(input);
    }
    
    return label;
}
```

## 11. Foydalanish bo'yicha maslahatlar

### Afzalliklar:
- **Yashirin bog'lanish**: Label ichidagi input avtomatik bog'lanadi
- **Foydalanuvchi tajribasi**: Labelni bosish bilan input fokusga keladi
- **Kod soddaligi**: Qo'shimcha `for` va `id` atributlari kerak emas

### Kamchiliklar:
- **Cheklangan moslashuvchanlik**: Ba'zi dizayn talablariga mos kelmasligi mumkin
- **CSS qiyinchiliklari**: Ba'zi stillar qo'llash qiyin bo'lishi mumkin

### Eng yaxshi amaliyot:
```javascript
// Aniq bog'lanish (tavsiya etiladi)
const label = document.createElement('label');
label.textContent = 'Email:';
label.htmlFor = 'userEmail';

const input = document.createElement('input');
input.type = 'email';
input.id = 'userEmail';
input.name = 'userEmail';

// Alohida qo'shish
document.body.appendChild(label);
document.body.appendChild(input);
```

## 12. Xulosa

JavaScript yordamida `<label>` elementiga `<input>` qo'shish - bu veb-rivojlantirishda muhim ko'nikma. Turli usullar mavjud, lekin eng muhimi accessibility va foydalanuvchi tajribasini hisobga olish. Har doim validation va error handling qo'shishni unutmang.