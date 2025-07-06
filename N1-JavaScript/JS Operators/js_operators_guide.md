# JavaScript Operatorlari - To'liq Qo'llanma

## Mundarija
1. [Arithmetic Operators (Arifmetik Operatorlar)](#1-arithmetic-operators-arifmetik-operatorlar)
2. [Assignment Operators (Tayinlash Operatorlari)](#2-assignment-operators-tayinlash-operatorlari)
3. [Comparison Operators (Taqqoslash Operatorlari)](#3-comparison-operators-taqqoslash-operatorlari)
4. [String Operators (Satr Operatorlari)](#4-string-operators-satr-operatorlari)
5. [Logical Operators (Mantiqiy Operatorlar)](#5-logical-operators-mantiqiy-operatorlar)
6. [Bitwise Operators (Bitli Operatorlar)](#6-bitwise-operators-bitli-operatorlar)
7. [Ternary Operators (Uchlik Operatorlar)](#7-ternary-operators-uchlik-operatorlar)
8. [Type Operators (Tur Operatorlari)](#8-type-operators-tur-operatorlari)

---

## 1. Arithmetic Operators (Arifmetik Operatorlar)

Arifmetik operatorlar matematikaviy hisob-kitoblarni bajarish uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `+` | Qo'shish | Ikki sonni qo'shadi | `5 + 3 = 8` |
| `-` | Ayirish | Birinchi sondan ikkinchisini ayiradi | `5 - 3 = 2` |
| `*` | Ko'paytirish | Ikki sonni ko'paytiradi | `5 * 3 = 15` |
| `/` | Bo'lish | Birinchi sonni ikkinchisiga bo'ladi | `15 / 3 = 5` |
| `%` | Modul | Bo'lish qoldig'ini qaytaradi | `10 % 3 = 1` |
| `++` | Increment | Qiymatni 1 ga oshiradi | `x++` |
| `--` | Decrement | Qiymatni 1 ga kamaytiradi | `x--` |
| `**` | Daraja | Birinchi sonni ikkinchi songa ko'taradi | `2 ** 3 = 8` |

### Amaliy misollar:

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Increment va Decrement
let x = 5;
console.log(x++); // 5 (oldin qiymat, keyin oshirish)
console.log(x);   // 6
console.log(++x); // 7 (oldin oshirish, keyin qiymat)
```

---

## 2. Assignment Operators (Tayinlash Operatorlari)

O'zgaruvchilarga qiymat berish uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `=` | Tayinlash | O'ng tomondagi qiymatni chap tomonga beradi | `x = 5` |
| `+=` | Qo'shib tayinlash | Qo'shib natijani tayinlaydi | `x += 3` (x = x + 3) |
| `-=` | Ayirib tayinlash | Ayirib natijani tayinlaydi | `x -= 3` (x = x - 3) |
| `*=` | Ko'paytirib tayinlash | Ko'paytirib natijani tayinlaydi | `x *= 3` (x = x * 3) |
| `/=` | Bo'lib tayinlash | Bo'lib natijani tayinlaydi | `x /= 3` (x = x / 3) |
| `%=` | Modul tayinlash | Modul natijani tayinlaydi | `x %= 3` (x = x % 3) |
| `**=` | Daraja tayinlash | Darajaga ko'tarib tayinlaydi | `x **= 3` (x = x ** 3) |

### Amaliy misollar:

```javascript
let x = 10;

x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 5;  // x = x % 5 = 1
x **= 3; // x = x ** 3 = 1

console.log(x); // 1
```

---

## 3. Comparison Operators (Taqqoslash Operatorlari)

Ikki qiymatni taqqoslash uchun ishlatiladi va natijada `true` yoki `false` qaytaradi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `==` | Teng | Qiymatlar tengligi (tur almashtirishsiz) | `5 == "5"` → `true` |
| `===` | Qat'iy teng | Qiymat va tur tengligi | `5 === "5"` → `false` |
| `!=` | Teng emas | Qiymatlar tengmas | `5 != "3"` → `true` |
| `!==` | Qat'iy teng emas | Qiymat yoki tur tengmas | `5 !== "5"` → `true` |
| `>` | Katta | Chap tomon katta | `5 > 3` → `true` |
| `<` | Kichik | Chap tomon kichik | `3 < 5` → `true` |
| `>=` | Katta yoki teng | Chap tomon katta yoki teng | `5 >= 5` → `true` |
| `<=` | Kichik yoki teng | Chap tomon kichik yoki teng | `3 <= 5` → `true` |

### Amaliy misollar:

```javascript
console.log(5 == "5");   // true (qiymat teng)
console.log(5 === "5");  // false (tur har xil)
console.log(5 != "3");   // true (qiymat har xil)
console.log(5 !== "5");  // true (tur har xil)

console.log(10 > 5);     // true
console.log(3 < 8);      // true
console.log(5 >= 5);     // true
console.log(3 <= 2);     // false
```

---

## 4. String Operators (Satr Operatorlari)

Satrlar bilan ishlash uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `+` | Concatenation | Satrlarni birlashtiradi | `"Hello" + "World"` |
| `+=` | Concatenation assignment | Satrni qo'shib tayinlaydi | `str += "text"` |

### Amaliy misollar:

```javascript
let firstName = "John";
let lastName = "Doe";

// Satrlarni birlashtirish
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// Satrni qo'shib tayinlash
let message = "Hello";
message += " World";
console.log(message); // "Hello World"

// Satr va son birlashtirish
let age = 25;
let info = "I am " + age + " years old";
console.log(info); // "I am 25 years old"
```

---

## 5. Logical Operators (Mantiqiy Operatorlar)

Mantiqiy qiymatlar bilan ishlash uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `&&` | AND | Ikki shart ham rost bo'lsa true | `true && true` → `true` |
| `\|\|` | OR | Bitta shart rost bo'lsa true | `true \|\| false` → `true` |
| `!` | NOT | Mantiqiy qiymatni teskarisiga o'giradi | `!true` → `false` |

### Amaliy misollar:

```javascript
let x = 5;
let y = 10;

// AND operator
console.log(x > 3 && y < 15); // true (ikki shart ham rost)
console.log(x > 10 && y < 15); // false (birinchi shart yolg'on)

// OR operator
console.log(x > 3 || y > 15); // true (birinchi shart rost)
console.log(x > 10 || y > 15); // false (ikki shart ham yolg'on)

// NOT operator
console.log(!true);  // false
console.log(!false); // true
console.log(!(x > 3)); // false
```

---

## 6. Bitwise Operators (Bitli Operatorlar)

Sonlarni ikkilik sistemada bit darajasida boshqarish uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `&` | AND | Har bir bit AND operatsiyasi | `5 & 3` → `1` |
| `\|` | OR | Har bir bit OR operatsiyasi | `5 \| 3` → `7` |
| `^` | XOR | Har bir bit XOR operatsiyasi | `5 ^ 3` → `6` |
| `~` | NOT | Bitlarni teskarisiga o'giradi | `~5` → `-6` |
| `<<` | Left shift | Bitlarni chapga siljitadi | `5 << 1` → `10` |
| `>>` | Right shift | Bitlarni o'nga siljitadi | `5 >> 1` → `2` |
| `>>>` | Unsigned right shift | Ishora belgisiz o'nga siljitish | `5 >>> 1` → `2` |

### Amaliy misollar:

```javascript
let a = 5;  // 101 (ikkilik)
let b = 3;  // 011 (ikkilik)

console.log(a & b);  // 1 (001)
console.log(a | b);  // 7 (111)
console.log(a ^ b);  // 6 (110)
console.log(~a);     // -6
console.log(a << 1); // 10 (1010)
console.log(a >> 1); // 2 (10)
```

---

## 7. Ternary Operators (Uchlik Operatorlar)

Qisqa if-else statementining o'rnini bosuvchi operator.

### Sintaksis:
```javascript
condition ? value1 : value2
```

### Amaliy misollar:

```javascript
let age = 18;

// Oddiy ternary operator
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

// Funksiya chaqirish
let isEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(isEven(4)); // "Even"
console.log(isEven(7)); // "Odd"
```

---

## 8. Type Operators (Tur Operatorlari)

O'zgaruvchilar turini tekshirish uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `typeof` | Type of | O'zgaruvchi turini qaytaradi | `typeof 42` → `"number"` |
| `instanceof` | Instance of | Obyekt ma'lum konstruktordan yaratilganligini tekshiradi | `arr instanceof Array` |

### Amaliy misollar:

```javascript
// typeof operator
console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (JavaScript xususiyati)
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
console.log(typeof function(){}); // "function"

// instanceof operator
let arr = [1, 2, 3];
let obj = {};
let date = new Date();

console.log(arr instanceof Array);   // true
console.log(obj instanceof Object);  // true
console.log(date instanceof Date);   // true
console.log(arr instanceof Object);  // true (Array Object dan meros oladi)
```

---

## Operator Precedence (Operator Ustunligi)

Operatorlar qaysi tartibda bajarilishini belgilaydigan tartib:

1. **Eng yuqori**: `()` (qavslar)
2. **Unary**: `!`, `typeof`, `++`, `--`
3. **Arithmetic**: `**`, `*`, `/`, `%`, `+`, `-`
4. **Comparison**: `<`, `<=`, `>`, `>=`, `==`, `===`, `!=`, `!==`
5. **Logical**: `&&`, `||`
6. **Conditional**: `?:`
7. **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`

### Misol:

```javascript
let result = 5 + 3 * 2;        // 11 (avval 3*2, keyin 5+6)
let result2 = (5 + 3) * 2;     // 16 (avval 5+3, keyin 8*2)
let result3 = 5 + 3 > 4 && 2 < 3; // true
```

---

## Xulosa

JavaScript operatorlari dasturlashda asosiy vositalardir. Ular yordamida:
- Matematikaviy hisob-kitoblar
- Qiymatlar taqqoslash
- Mantiqiy operatsiyalar
- Satrlar bilan ishlash
- Bitli operatsiyalar
- Tur tekshirish

kabi vazifalarni bajarish mumkin. Har bir operator o'zining maxsus vazifasi va ishlatilish sohasiga ega.

---

**Eslatma**: Ushbu qo'llanma JavaScript operatorlarining to'liq ro'yxati va amaliy misollarini o'z ichiga oladi. Amaliyotda ko'proq foydalanish orqali ularni yaxshiroq o'rganishingiz mumkin.