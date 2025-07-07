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

---

## 4. String Operators (Satr Operatorlari)

Satrlar bilan ishlash uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `+` | Concatenation | Satrlarni birlashtiradi | `"Hello" + "World"` |
| `+=` | Concatenation assignment | Satrni qo'shib tayinlaydi | `str += "text"` |

---

## 5. Logical Operators (Mantiqiy Operatorlar)

Mantiqiy qiymatlar bilan ishlash uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `&&` | AND | Ikki shart ham rost bo'lsa true | `true && true` → `true` |
| `\|\|` | OR | Bitta shart rost bo'lsa true | `true \|\| false` → `true` |
| `!` | NOT | Mantiqiy qiymatni teskarisiga o'giradi | `!true` → `false` |

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

---

## 7. Ternary Operators (Uchlik Operatorlar)

Qisqa if-else statementining o'rnini bosuvchi operator.

### Sintaksis:
```javascript
condition ? value1 : value2
```
---

## 8. Type Operators (Tur Operatorlari)

O'zgaruvchilar turini tekshirish uchun ishlatiladi.

### Operatorlar ro'yxati:

| Operator | Nomi | Tavsifi | Misol |
|----------|------|---------|-------|
| `typeof` | Type of | O'zgaruvchi turini qaytaradi | `typeof 42` → `"number"` |
| `instanceof` | Instance of | Obyekt ma'lum konstruktordan yaratilganligini tekshiradi | `arr instanceof Array` |


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

**Eslatma**: Ushbu qo'llanma JavaScript operatorlarining to'liq ro'yxatini o'z ichiga oladi. Amaliyotda ko'proq foydalanish orqali ularni yaxshiroq o'rganishingiz mumkin.