# JavaScript Operatorlari - To'liq Qo'llanma

## Mundarija
1. [Aritmetik Operatorlar](#1-aritmetik-operatorlar)
2. [Tayinlash Operatorlari](#2-tayinlash-operatorlari)
3. [Taqqoslash Operatorlari](#3-taqqoslash-operatorlari)
4. [Mantiqiy Operatorlar](#4-mantiqiy-operatorlar)
5. [Bitli Operatorlar](#5-bitli-operatorlar)
6. [Ternar Operator](#6-ternar-operator)
7. [Satr Operatorlari](#7-satr-operatorlari)
8. [Boshqa Operatorlar](#8-boshqa-operatorlar)

---

## 1. Aritmetik Operatorlar

Aritmetik operatorlar matematik amallarni bajarish uchun ishlatiladi.

### Asosiy Aritmetik Operatorlar:

| Operator | Nomi | Misol | Natija |
|----------|------|-------|--------|
| `+` | Qo'shish | `5 + 3` | `8` |
| `-` | Ayirish | `5 - 3` | `2` |
| `*` | Ko'paytirish | `5 * 3` | `15` |
| `/` | Bo'lish | `6 / 3` | `2` |
| `%` | Qoldiq | `7 % 3` | `1` |
| `**` | Daraja | `2 ** 3` | `8` |

### Unary Operatorlar:

| Operator | Nomi | Misol | Natija |
|----------|------|-------|--------|
| `++` | O'sish | `++x` yoki `x++` | x ning qiymatini 1 ga oshiradi |
| `--` | Kamayish | `--x` yoki `x--` | x ning qiymatini 1 ga kamaytiradi |
| `+` | Musbat | `+x` | Raqamga o'giradi |
| `-` | Manfiy | `-x` | Ishora o'zgartiradi |

### Misollar:

```javascript
let a = 10;
let b = 3;

console.log(a + b);    // 13
console.log(a - b);    // 7
console.log(a * b);    // 30
console.log(a / b);    // 3.333...
console.log(a % b);    // 1
console.log(a ** b);   // 1000

// Unary operatorlar
let x = 5;
console.log(++x);      // 6 (pre-increment)
console.log(x++);      // 6 (post-increment)
console.log(x);        // 7
```

---

## 2. Tayinlash Operatorlari

Tayinlash operatorlari o'zgaruvchilarga qiymat berish uchun ishlatiladi.

### Asosiy Tayinlash Operatorlari:

| Operator | Nomi | Misol | Equivalent |
|----------|------|-------|------------|
| `=` | Oddiy tayinlash | `x = 5` | `x = 5` |
| `+=` | Qo'shib tayinlash | `x += 3` | `x = x + 3` |
| `-=` | Ayirib tayinlash | `x -= 3` | `x = x - 3` |
| `*=` | Ko'paytirib tayinlash | `x *= 3` | `x = x * 3` |
| `/=` | Bo'lib tayinlash | `x /= 3` | `x = x / 3` |
| `%=` | Qoldiq tayinlash | `x %= 3` | `x = x % 3` |
| `**=` | Daraja tayinlash | `x **= 3` | `x = x ** 3` |

### Misollar:

```javascript
let x = 10;

x += 5;    // x = 15
x -= 3;    // x = 12
x *= 2;    // x = 24
x /= 4;    // x = 6
x %= 4;    // x = 2
x **= 3;   // x = 8

// Satr bilan
let str = "Salom";
str += " Dunyo";  // str = "Salom Dunyo"
```

---

## 3. Taqqoslash Operatorlari

Taqqoslash operatorlari qiymatlarni solishtirish uchun ishlatiladi va boolean (true/false) qiymat qaytaradi.

### Asosiy Taqqoslash Operatorlari:

| Operator | Nomi | Misol | Natija |
|----------|------|-------|--------|
| `==` | Tenglik | `5 == "5"` | `true` |
| `===` | Qat'iy tenglik | `5 === "5"` | `false` |
| `!=` | Teng emaslik | `5 != "3"` | `true` |
| `!==` | Qat'iy teng emaslik | `5 !== "5"` | `true` |
| `>` | Katta | `5 > 3` | `true` |
| `<` | Kichik | `5 < 3` | `false` |
| `>=` | Katta yoki teng | `5 >= 5` | `true` |
| `<=` | Kichik yoki teng | `5 <= 3` | `false` |

### Misollar:

```javascript
let a = 5;
let b = "5";
let c = 3;

console.log(a == b);    // true (type coercion)
console.log(a === b);   // false (strict comparison)
console.log(a != c);    // true
console.log(a !== b);   // true
console.log(a > c);     // true
console.log(a >= a);    // true

// Maxsus qiymatlar
console.log(null == undefined);    // true
console.log(null === undefined);   // false
```

---

## 4. Mantiqiy Operatorlar

Mantiqiy operatorlar boolean qiymatlar bilan ishlash uchun ishlatiladi.

### Asosiy Mantiqiy Operatorlar:

| Operator | Nomi | Misol | Natija |
|----------|------|-------|--------|
| `&&` | Mantiqiy VA | `true && false` | `false` |
| `\|\|` | Mantiqiy YOKI | `true \|\| false` | `true` |
| `!` | Mantiqiy EMAS | `!true` | `false` |

### Haqiqat Jadvali:

```javascript
// && (VA) operatori
true && true    // true
true && false   // false
false && true   // false
false && false  // false

// || (YOKI) operatori
true || true    // true
true || false   // true
false || true   // true
false || false  // false

// ! (EMAS) operatori
!true   // false
!false  // true
```

### Misollar:

```javascript
let age = 25;
let hasLicense = true;

// VA operatori
if (age >= 18 && hasLicense) {
    console.log("Mashina haydashi mumkin");
}

// YOKI operatori
if (age < 18 || !hasLicense) {
    console.log("Mashina haydashi mumkin emas");
}

// Short-circuit evaluation
let name = null;
let displayName = name || "Anonim";  // "Anonim"

let user = { name: "Ali" };
user.name && console.log("Salom " + user.name);  // "Salom Ali"
```

---

## 5. Bitli Operatorlar

Bitli operatorlar raqamlarni ikkilik (binary) formatda bit bo'yicha ishlash uchun ishlatiladi.

### Asosiy Bitli Operatorlar:

| Operator | Nomi | Misol | Natija |
|----------|------|-------|--------|
| `&` | Bitli VA | `5 & 3` | `1` |
| `\|` | Bitli YOKI | `5 \| 3` | `7` |
| `^` | Bitli XOR | `5 ^ 3` | `6` |
| `~` | Bitli EMAS | `~5` | `-6` |
| `<<` | Chapga siljitish | `5 << 1` | `10` |
| `>>` | O'ngga siljitish | `5 >> 1` | `2` |
| `>>>` | Belgi bo'yicha siljitish | `5 >>> 1` | `2` |

### Misollar:

```javascript
let a = 5;  // 101 (binary)
let b = 3;  // 011 (binary)

console.log(a & b);   // 1 (001)
console.log(a | b);   // 7 (111)
console.log(a ^ b);   // 6 (110)
console.log(~a);      // -6
console.log(a << 1);  // 10 (1010)
console.log(a >> 1);  // 2 (010)
```

---

## 6. Ternar Operator

Ternar operator qisqa if-else iborasi kabi ishlaydi.

### Sintaksis:
```javascript
condition ? value1 : value2
```

### Misollar:

```javascript
let age = 18;
let status = age >= 18 ? "Katta" : "Kichik";
console.log(status);  // "Katta"

// Ichma-ich ternar operatorlar
let score = 85;
let grade = score >= 90 ? "A" : 
           score >= 80 ? "B" : 
           score >= 70 ? "C" : 
           score >= 60 ? "D" : "F";
console.log(grade);  // "B"

// Funktsiya chaqirish
let user = null;
let greeting = user ? `Salom ${user.name}` : "Salom mehmon";
console.log(greeting);  // "Salom mehmon"
```

---

## 7. Satr Operatorlari

Satr operatorlari matn bilan ishlash uchun ishlatiladi.

### Asosiy Satr Operatorlari:

| Operator | Nomi | Misol | Natija |
|----------|------|-------|--------|
| `+` | Birlashtirish | `"Hello" + " World"` | `"Hello World"` |
| `+=` | Qo'shib tayinlash | `str += " text"` | Satrga qo'shish |
| `in` | Xususiyat tekshirish | `"length" in str` | `true/false` |

### Template Literals:

```javascript
let name = "Ali";
let age = 25;

// Eski usul
let message1 = "Salom, mening ismim " + name + " va yoshim " + age;

// Template literals
let message2 = `Salom, mening ismim ${name} va yoshim ${age}`;

// Ko'p qatorli satr
let multiline = `Bu birinchi qator
Bu ikkinchi qator
Bu uchinchi qator`;
```

### Misollar:

```javascript
let firstName = "Ali";
let lastName = "Valiyev";

// Satr birlashtirish
let fullName = firstName + " " + lastName;
console.log(fullName);  // "Ali Valiyev"

// Template literals
let greeting = `Salom ${firstName}!`;
console.log(greeting);  // "Salom Ali!"

// Satr uzunligi
console.log(firstName.length);  // 3

// Satr qidirish
console.log(fullName.includes("Ali"));  // true
```

---

## 8. Boshqa Operatorlar

### typeof Operatori

```javascript
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (bug)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### instanceof Operatori

```javascript
let arr = [1, 2, 3];
let obj = {};
let date = new Date();

console.log(arr instanceof Array);   // true
console.log(obj instanceof Object);  // true
console.log(date instanceof Date);   // true
```

### in Operatori

```javascript
let obj = { name: "Ali", age: 25 };

console.log("name" in obj);    // true
console.log("height" in obj);  // false

// Array bilan
let arr = [1, 2, 3];
console.log(0 in arr);         // true
console.log(3 in arr);         // false
```

### delete Operatori

```javascript
let obj = { name: "Ali", age: 25 };

delete obj.age;
console.log(obj);  // { name: "Ali" }

// Array bilan
let arr = [1, 2, 3];
delete arr[1];
console.log(arr);  // [1, undefined, 3]
```

### void Operatori

```javascript
void 0;           // undefined
void (0);         // undefined
void "hello";     // undefined

// HTML da ishlatiladi
// <a href="javascript:void(0)">Link</a>
```

### new Operatori

```javascript
let date = new Date();
let arr = new Array(1, 2, 3);
let obj = new Object();

function Person(name) {
    this.name = name;
}

let person = new Person("Ali");
console.log(person.name);  // "Ali"
```

### Spread Operatori (...)

```javascript
// Array bilan
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// Object bilan
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Funktsiya argumentlari
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers));  // 6
```

### Rest Operatori (...)

```javascript
// Funktsiya parametrlarida
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));  // 10

// Destructuring da
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]
```

### Nullish Coalescing (??)

```javascript
let name = null;
let defaultName = name ?? "Anonim";
console.log(defaultName);  // "Anonim"

// || operatori bilan farq
let age = 0;
console.log(age || 18);   // 18 (falsy bo'lgani uchun)
console.log(age ?? 18);   // 0 (null yoki undefined emas)
```

### Optional Chaining (?.)

```javascript
let user = {
    name: "Ali",
    address: {
        street: "Toshkent ko'chasi"
    }
};

// Xavfsiz kirish
console.log(user?.name);              // "Ali"
console.log(user?.address?.street);   // "Toshkent ko'chasi"
console.log(user?.address?.city);     // undefined
console.log(user?.phone?.number);     // undefined (xato bermaydi)

// Funktsiya chaqirish
user?.method?.();  // Agar method mavjud bo'lsa chaqiriladi
```

---

## Operatorlar Ustuvorligi

JavaScript operatorlari turli ustuvorlik darajasiga ega:

1. **Eng yuqori**: `()`, `[]`, `.`
2. **Unary**: `++`, `--`, `!`, `typeof`, `delete`
3. **Arifmetik**: `**`, `*`, `/`, `%`, `+`, `-`
4. **Siljitish**: `<<`, `>>`, `>>>`
5. **Taqqoslash**: `<`, `<=`, `>`, `>=`, `in`, `instanceof`
6. **Tenglik**: `==`, `!=`, `===`, `!==`
7. **Bitli**: `&`, `^`, `|`
8. **Mantiqiy**: `&&`, `||`
9. **Ternar**: `?:`
10. **Eng past**: `=`, `+=`, `-=`, va boshqalar

### Misol:

```javascript
let result = 2 + 3 * 4;  // 14 (3 * 4 birinchi bajariladi)
let result2 = (2 + 3) * 4;  // 20 (qavslar ustuvor)
```

---

## Xulosa

JavaScript operatorlari dasturlashda asosiy vositalar hisoblanadi. Ularni to'g'ri ishlatish orqali:

- Matematik amallarni bajarishingiz
- Qiymatlarni solishtirishingiz
- Mantiqiy amallarni bajarishingiz
- Satrlar bilan ishlashingiz
- Murakkab iboralarni yaratishingiz mumkin

Har bir operator o'zining maxsus vazifasi va ustuvorlik darajasiga ega. Ularni to'g'ri tushunish va ishlatish JavaScript dasturlashda muvaffaqiyatli bo'lish uchun zarur.