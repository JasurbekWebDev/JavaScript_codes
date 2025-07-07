# JavaScript O'zgaruvchilari - To'liq Qo'llanma

## Mundarija
1. [O'zgaruvchi nima?](#1-ozgaruvchi-nima)
2. [O'zgaruvchilarni e'lon qilish](#2-ozgaruvchilarni-elon-qilish)
3. [O'zgaruvchi nomlash qoidalari](#3-ozgaruvchi-nomlash-qoidalari)
4. [O'zgaruvchilarni ishlatish bo'yicha maslahatlar](#4-ozgaruvchilarni-ishlatish-boyicha-maslahatlar)
5. [Amaliy misollar](#5-amaliy-misollar)

---

## 1. O'zgaruvchi nima?

**O'zgaruvchi** - bu ma'lumotlarni saqlash uchun ishlatiladi. Ular xotirada joy ajratib, ma'lumotlarni vaqtinchalik saqlaydi va keyinchalik bu ma'lumotlarni o'qish yoki o'zgartirish imkonini beradi.

O'zgaruvchilar quyidagicha ishlaydi:
- **Konteyner** vazifasini bajaradi
- **Ma'lumotlarni saqlaydi** (raqamlar, matnlar, obyektlar va h.k.)
- **Qayta ishlatiladi** kod davomida
- **Qiymati o'zgarishi mumkin** (ba'zi hollarda)

### O'zgaruvchilarning afzalliklari:
- Kodni o'qishga oson qiladi
- Ma'lumotlarni qayta ishlatish imkonini beradi
- Kodni boshqarish va debug qilishni osonlashtiradi
- Xotirani samarali ishlatadi

---

## 2. O'zgaruvchilarni e'lon qilish

JavaScript-da o'zgaruvchilarni e'lon qilishning uch yo'li mavjud:

### 2.1 `var` kalit so'zi
--- 
**Xususiyatlari:**
- Function scope yoki global scope
- Hoisting qo'llab-quvvatlaydi
- Qayta e'lon qilish mumkin
- Eski uslub (ES5 va avvalgi)

### 2.2 `let` kalit so'zi
---
**Xususiyatlari:**
- Block scope
- Hoisting yo'q
- Qayta e'lon qilish mumkin emas
- Zamonaviy uslub (ES6+)

### 2.3 `const` kalit so'zi
---
**Xususiyatlari:**
- Block scope
- Hoisting yo'q
- Qayta e'lon qilish mumkin emas
- Qiymati o'zgarmas (immutable)
- E'lon qilishda qiymat berish majburiy

### Scope farqlari:
// Global scope
---
// Function scope
---
// Block scope
---
## 3. O'zgaruvchi nomlash qoidalari

### 3.1 Majburiy qoidalar:
1. **Harf, _, yoki $ bilan boshlanishi kerak**

2. **Faqat harf, raqam, _, $ bo'lishi mumkin**

3. **Kalit so'zlar ishlatilmaydi**
--- 
### 3.2 Tavsiya etiladigan qoidalar:

#### CamelCase uslubi:
---
#### Konstantalar uchun UPPER_SNAKE_CASE:
---
#### Ma'noli nomlar:
---
### 3.3 Nom berish bo'yicha maslahatlar:
- **Qisqa va aniq** bo'lsin
- **Ma'noli** bo'lsin
- **Ingliz tilidagi** so'zlardan foydalaning
- **Izchil** bo'ling (bir xil uslubda)

---

## 4. O'zgaruvchilarni ishlatish bo'yicha maslahatlar

### 4.1 Qaysi kalit so'zni ishlatish:

#### `const` - birinchi tanlov:

#### `let` - qiymat o'zgarsa:

#### `var` - ishlatmang (eski kod):


### 4.2 Xatoliklardan qochish:

#### Hoisting muammosi:

#### Scope muammosi:

### 4.3 Xotira boshqaruvi:

---

## 5. Amaliy misollar

### 5.1 Oddiy o'zgaruvchilar:
// Shaxsiy ma'lumotlar


### 5.2 Raqamlar bilan ishlash:
// Hisoblash

// Foizni hisoblash


### 5.3 Matnlar bilan ishlash:
// Matn bilan operatsiyalar

// Template literal ishlatish

// Matnni o'zgartirish


### 5.4 Massivlar bilan ishlash:
// Massiv yaratish

// Massiv ma'lumotlari

// Massivga element qo'shish

// Massiv elementlarini ko'rish

### 5.5 Obyektlar bilan ishlash:
// Obyekt yaratish

// Obyekt ma'lumotlarini chiqarish

// O'rtacha bahoni hisoblash

// Obyektga yangi xususiyat qo'shish


### 5.6 Shartli operatorlar:
// Yosh bo'yicha kategoriya

// Bahoni harf bilan ifodalash


### 5.7 Funksiyalar bilan ishlash:
// Oddiy funksiya

// Funksiyani chaqirish

// Hisoblash funksiyasi

// Arrow function


### 5.8 Vaqt bilan ishlash:
// Joriy vaqt

// Yosh hisoblash


---

## Xulosa

JavaScript o'zgaruvchilari dasturlashning asosiy qismidir. 

O'zgaruvchilarni to'g'ri ishlatish:

1. **Kodni o'qishga oson** qiladi
2. **Xatolarni kamaytiradi**
3. **Kodni boshqarishni osonlashtiradi**
4. **Samaradorlikni oshiradi**

### Asosiy qoidalar:
- `const` dan foydalaning (imkon qadar)
- `let` dan foydalaning (qiymat o'zgarsa)
- `var` dan foydalanmang (zamonaviy kodda)
- Ma'noli nomlar bering
- Izchil uslubda yozing

JavaScript o'zgaruvchilarini o'zlashtirib, siz dasturlashda katta qadam tashlaganingiz bo'ladi!