# JavaScript `getElementsByClassName()` usuli - To'liq qo'llanma

## 1. `getElementsByClassName()` nima?

`getElementsByClassName()` - bu JavaScript-da sinf nomi bo'yicha HTML elementlarni tanlash uchun ishlatiladigan usul. Bu usul `HTMLCollection` qaytaradi, bu esa jonli (live) to'plam bo'lib, DOM o'zgarishi bilan avtomatik yangilanadi.

## 2. Asosiy sintaksis

```javascript
document.getElementsByClassName('class-name')
element.getElementsByClassName('class-name')
```

## 3. HTMLCollection vs Array

### HTMLCollection xususiyatlari:
- **Jonli to'plam**: DOM o'zgarishi bilan avtomatik yangilanadi
- **Array emas**: Massiv usullarini to'g'ridan-to'g'ri qo'llab-quvvatlamaydi
- **Indeks orqali kirish**: `collection[0]` yoki `collection.item(0)`
- **Length xususiyati**: `collection.length`

```javascript
const elements = document.getElementsByClassName('my-class');
console.log(elements.length); // Elementlar soni
console.log(elements[0]); // Birinchi element
console.log(elements.item(1)); // Ikkinchi element
```

## 4. Asosiy misollar

### 4.1. Oddiy sinf bo'yicha tanlash

```html
<div class="container">Container 1</div>
<div class="container">Container 2</div>
<div class="container">Container 3</div>
```

```javascript
const containers = document.getElementsByClassName('container');
console.log(containers.length); // 3

// Barcha konteynerlar orqali iteratsiya
for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].textContent);
}
```

### 4.2. Form elementlari bilan ishlash

```html
<form>
    <label class="form-label">Username:</label>
    <input type="text" class="form-input" name="username">
    
    <label class="form-label">Password:</label>
    <input type="password" class="form-input" name="password">
    
    <label class="form-label">Email:</label>
    <input type="email" class="form-input" name="email">
</form>
```

```javascript
// Barcha labellarni tanlash
const labels = document.getElementsByClassName('form-label');
console.log(`Jami labellar: ${labels.length}`);

// Barcha inputlarni tanlash
const inputs = document.getElementsByClassName('form-input');
console.log(`Jami inputlar: ${inputs.length}`);

// Inputlar bilan ishlash
for (const input of inputs) {
    console.log(`Input nomi: ${input.name}, Turi: ${input.type}`);
}
```

## 5. Bir nechta sinf bo'yicha tanlash

```html
<div class="box red">Qizil quti</div>
<div class="box blue">Ko'k quti</div>
<div class="box red large">Katta qizil quti</div>
<div class="circle red">Qizil doira</div>
```

```javascript
// Faqat "box" sinfi bilan
const boxes = document.getElementsByClassName('box');
console.log(`Box elementlari: ${boxes.length}`); // 3

// "box" va "red" sinflari bilan
const redBoxes = document.getElementsByClassName('box red');
console.log(`Qizil box elementlari: ${redBoxes.length}`); // 2

// "red" sinfi bilan (barcha elementlar)
const redElements = document.getElementsByClassName('red');
console.log(`Qizil elementlar: ${redElements.length}`); // 3
```

## 6. HTMLCollection bilan ishlash usullari

### 6.1. For loop
```javascript
const elements = document.getElementsByClassName('my-class');
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}
```

### 6.2. For...of loop
```javascript
const elements = document.getElementsByClassName('my-class');
for (const element of elements) {
    console.log(element);
}
```

### 6.3. forEach (massivga aylantirish kerak)
```javascript
const elements = document.getElementsByClassName('my-class');
Array.from(elements).forEach(element => {
    console.log(element);
});

// Yoki spread operator bilan
[...elements].forEach(element => {
    console.log(element);
});
```

## 7. Murakkab misollar

### 7.1. Dinamik kontent yaratish

```javascript
// HTML elementlarni yaratish
function createCards() {
    const container = document.getElementById('cards-container');
    
    const cardData = [
        { title: 'Card 1', content: 'Bu birinchi karta' },
        { title: 'Card 2', content: 'Bu ikkinchi karta' },
        { title: 'Card 3', content: 'Bu uchinchi karta' }
    ];
    
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3 class="card-title">${data.title}</h3>
            <p class="card-content">${data.content}</p>
        `;
        container.appendChild(card);
    });
}

// Kartalarni yaratish
createCards();

// Yaratilgan kartalar bilan ishlash
const cards = document.getElementsByClassName('card');
const cardTitles = document.getElementsByClassName('card-title');

console.log(`Jami kartalar: ${cards.length}`);
console.log(`Jami sarlavhalar: ${cardTitles.length}`);
```

### 7.2. Event listener qo'shish

```javascript
const buttons = document.getElementsByClassName('btn');

// Barcha tugmalar uchun event listener
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        alert(`${i + 1}-tugma bosildi!`);
    });
}

// Yoki Array.from bilan
Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(`Tugma ${index + 1} bosildi`);
    });
});
```

### 7.3. Stil o'zgartirish

```javascript
const highlights = document.getElementsByClassName('highlight');

// Barcha highlight elementlarni o'zgartirish
for (const element of highlights) {
    element.style.backgroundColor = 'yellow';
    element.style.padding = '10px';
    element.style.borderRadius = '5px';
}

// Yoki bitta funksiya bilan
function applyStyles(className, styles) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
        Object.assign(element.style, styles);
    }
}

// Foydalanish
applyStyles('highlight', {
    backgroundColor: 'lightblue',
    padding: '15px',
    margin: '5px',
    borderRadius: '8px'
});
```

## 8. Ma'lumotlar bilan ishlash

### 8.1. Form ma'lumotlarini yig'ish

```javascript
function collectFormData() {
    const inputs = document.getElementsByClassName('form-input');
    const data = {};
    
    for (const input of inputs) {
        data[input.name] = input.value;
    }
    
    return data;
}

// Form ma'lumotlarini olish
const formData = collectFormData();
console.log(formData);
```

### 8.2. Ma'lumotlarni filtrlash

```javascript
function getVisibleElements(className) {
    const elements = document.getElementsByClassName(className);
    const visibleElements = [];
    
    for (const element of elements) {
        if (element.offsetWidth > 0 && element.offsetHeight > 0) {
            visibleElements.push(element);
        }
    }
    
    return visibleElements;
}

// Ko'rinadigan elementlarni olish
const visibleCards = getVisibleElements('card');
console.log(`Ko'rinadigan kartalar: ${visibleCards.length}`);
```

## 9. Muqobil usullar

### 9.1. `querySelectorAll()` bilan solishtirish

```javascript
// getElementsByClassName
const elements1 = document.getElementsByClassName('my-class');

// querySelectorAll
const elements2 = document.querySelectorAll('.my-class');

console.log('getElementsByClassName:', elements1);
console.log('querySelectorAll:', elements2);
```

### 9.2. Murakkab selektorlar uchun `querySelectorAll()`

```javascript
// Bir nechta sinf
const elements = document.querySelectorAll('.class1.class2');

// Sinf va atribut
const inputs = document.querySelectorAll('input.form-input[type="text"]');

// Ichki elementlar
const nestedElements = document.querySelectorAll('.parent .child');
```

## 10. Live Collection xususiyati

```javascript
const containers = document.getElementsByClassName('container');
console.log('Boshlang\'ich soni:', containers.length);

// Yangi element qo'shish
const newContainer = document.createElement('div');
newContainer.className = 'container';
newContainer.textContent = 'Yangi konteyner';
document.body.appendChild(newContainer);

console.log('Yangi element qo\'shgandan keyin:', containers.length);
// Soni avtomatik oshadi!
```

## 11. Performance optimizatsiya

### 11.1. Kesh qilish

```javascript
// Yomon - har safar DOM'dan qidirish
function badExample() {
    for (let i = 0; i < 100; i++) {
        const elements = document.getElementsByClassName('my-class');
        // ... boshqa operatsiyalar
    }
}

// Yaxshi - bir marta kesh qilish
function goodExample() {
    const elements = document.getElementsByClassName('my-class');
    for (let i = 0; i < 100; i++) {
        // ... elements bilan ishlash
    }
}
```

### 11.2. Maqsadli element ichida qidirish

```javascript
// Butun dokument bo'yicha qidirish
const allButtons = document.getElementsByClassName('btn');

// Muayyan konteyner ichida qidirish
const container = document.getElementById('main-container');
const containerButtons = container.getElementsByClassName('btn');
```

## 12. Xato bilan ishlash

```javascript
function safeGetElements(className) {
    try {
        const elements = document.getElementsByClassName(className);
        
        if (elements.length === 0) {
            console.warn(`"${className}" sinfi bilan elementlar topilmadi`);
            return [];
        }
        
        return Array.from(elements);
    } catch (error) {
        console.error('Elementlarni olishda xato:', error);
        return [];
    }
}

// Xavfsiz foydalanish
const elements = safeGetElements('my-class');
if (elements.length > 0) {
    elements.forEach(element => {
        // Element bilan ishlash
    });
}
```

## 13. Utility funksiyalar

### 13.1. Element mavjudligini tekshirish

```javascript
function hasClass(className) {
    return document.getElementsByClassName(className).length > 0;
}

// Foydalanish
if (hasClass('error-message')) {
    console.log('Xato xabarlari mavjud');
}
```

### 13.2. Barcha elementlarni o'chirish

```javascript
function removeAllByClass(className) {
    const elements = document.getElementsByClassName(className);
    
    // Teskari tartibda o'chirish (live collection uchun)
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove();
    }
}

// Foydalanish
removeAllByClass('temp-element');
```

### 13.3. Sinf qo'shish/olib tashlash

```javascript
function toggleClassForAll(className, toggleClass) {
    const elements = document.getElementsByClassName(className);
    
    for (const element of elements) {
        element.classList.toggle(toggleClass);
    }
}

// Foydalanish
toggleClassForAll('card', 'active');
```

## 14. Amaliy loyiha misoli

```javascript
// Task Manager loyihasi
class TaskManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadTasks();
    }
    
    bindEvents() {
        // Tugmalar uchun event listener
        const deleteButtons = document.getElementsByClassName('delete-btn');
        const completeButtons = document.getElementsByClassName('complete-btn');
        
        Array.from(deleteButtons).forEach(button => {
            button.addEventListener('click', this.deleteTask.bind(this));
        });
        
        Array.from(completeButtons).forEach(button => {
            button.addEventListener('click', this.completeTask.bind(this));
        });
    }
    
    deleteTask(event) {
        const taskElement = event.target.closest('.task-item');
        taskElement.remove();
        this.updateTaskCount();
    }
    
    completeTask(event) {
        const taskElement = event.target.closest('.task-item');
        taskElement.classList.toggle('completed');
        this.updateTaskCount();
    }
    
    updateTaskCount() {
        const allTasks = document.getElementsByClassName('task-item');
        const completedTasks = document.getElementsByClassName('completed');
        
        const totalElement = document.getElementById('total-tasks');
        const completedElement = document.getElementById('completed-tasks');
        
        totalElement.textContent = allTasks.length;
        completedElement.textContent = completedTasks.length;
    }
    
    loadTasks() {
        this.updateTaskCount();
    }
}

// Loyihani ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
```

## 15. Eng yaxshi amaliyotlar

### ✅ Qilish kerak:
- Performance uchun elementlarni kesh qiling
- Live collection xususiyatini hisobga oling
- Xato bilan ishlash mexanizmini qo'shing
- Maqsadli konteyner ichida qidiring

### ❌ Qilmaslik kerak:
- Har safar DOM'dan qayta qidirmang
- HTMLCollection'ni to'g'ridan-to'g'ri massiv deb hisoblamang
- Live collection o'zgarishini hisobga olmang
- Keraksiz global qidiruvlar qilmang

## 16. Xulosa

`getElementsByClassName()` - bu JavaScript-da sinf bo'yicha elementlarni tanlashning samarali usuli. Bu usul live collection qaytaradi va DOM o'zgarishlari bilan avtomatik yangilanadi. Murakkab selektorlar uchun `querySelectorAll()` dan foydalanish yaxshiroq bo'lishi mumkin, lekin oddiy sinf bo'yicha tanlash uchun `getElementsByClassName()` juda qulay va tez ishlaydi.