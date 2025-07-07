
// 2. O'zgaruvchilarni e'lon qilish

// JavaScript-da o'zgaruvchilarni e'lon qilishning uch xil yo'li mavjud:
// 2.1 var kalit so'zi
var Ism = "Ali";
var yosh = 25;
var narx;  // undefined qiymat
// Xususiyatlari:

  // Function scope yoki global scope
  // Hoisting qo'llab-quvvatlaydi
  // Qayta e'lon qilish mumkin
  // Eski uslub (ES5 va avvalgi)

// 2.2 let kalit so'zi
let NAME = "Ali";
let YOSH = 30;
let NARX;  // undefined qiymat

// Xususiyatlari:

  // Block scope
  // Hoisting yo'q
  // Qayta e'lon qilish mumkin emas
  // Zamonaviy uslub (ES6+)

// 2.3 const kalit so'zi
const PI = 3.14159;
const MAMLAKAT = "O'zbekiston";
const FOYDALANUVCHI = {
    ism: "Javohir",
    yosh: 28
};

// Xususiyatlari:

  // Block scope
  // Hoisting yo'q
  // Qayta e'lon qilish mumkin emas
  // Qiymati o'zgarmas (immutable)
  // E'lon qilishda qiymat berish majburiy

// Scope farqlari:
// Global scope
var globalVar = "Global";

function myFunction() {
  // Function scope
  var functionVar = "Function";

  if (true) {
    // Block scope
    let blockLet = "Block Let";
    const blockConst = "Block Const";
    var functionVar2 = "Function 2";
    console.log(blockLet);
    console.log(blockConst);
    
  }
  // console.log(blockLet); // Error: blockLet is not defined
  console.log(functionVar2); // "Function 2" - var function scope
}
console.log(myFunction());









// 3. O'zgaruvchi nomlash qoidalari

// 3.1 Majburiy qoidalar:
// 1. Harf, _, yoki $ bilan boshlanishi kerak
let ism = "To'g'ri";
let _special = "To'g'ri";
let $price = "To'g'ri";
// let 1number = "Xato"; // Raqam bilan boshlanmaydi

// 2. Faqat harf, raqam, _, $ bo'lishi mumkin
let ism123 = "To'g'ri";
let _sana_2024 = "To'g'ri";
// let ism-familiya = "Xato"; // Tire ishlatilmaydi

// 3. Kalit so'zlar ishlatilmaydi
// let if = "Xato";      // if - kalit so'z
// let function = "Xato"; // function - kalit so'z
// let myIf = "To'g'ri";  // Buni ishlatish mumkin


// 3.2 Tavsiya etiladigan qoidalar:
// CamelCase uslubi:
let foydalanuvchiIsmi = "Jasurbek";
let maksimalNarx = 1000;
let joriyVaqt = new Date();


// Konstantalar uchun UPPER_SNAKE_CASE:
const MAKSIMAL_YOSH = 100;
const PI_QIYMATI = 3.14159;
const MAMLAKAT_KODI = "UZ";

// Ma'noli nomlar:
// Yomon:
let a = 5;
let b = "Ali";
let d = new Date();

// Yaxshi:
let foydalanuvchilarSoni = 5;
let foydalanuvchi_ismi = "Jasurbek";
let joriy_vaqt = new Date();

// 3.3 Nom berish bo'yicha maslahatlar:
// Qisqa va aniq bo'lsin
// Ma'noli bo'lsin
// Ingliz tilidagi so'zlardan foydalaning
// Izchil bo'ling (bir xil uslubda)


// 4. O'zgaruvchilarni ishlatish bo'yicha maslahatlar

// 4.1 Qaysi kalit so'zni ishlatish:

// const - birinchi tanlov:
const userName = "Ali";
const maximumScore = 100;
const settings = {
  color: "ko'k",
  volume: "katta"
}

// let - qiymat o'zgarsa:
let count = 0;
let currentIndex = 0;
let active = false;

// Sikl davomida o'zgaradi
for (let i = 0; i < 10; i++) {
  count += i;
}
console.log(count); // Output: 45

// var - ishlatmang (eski kod):

// Eski uslub - ishlatmang
// var x = 10;

// Zamonaviy uslub - ishlating
// const x = 10;


// 4.2 Xatoliklardan qochish:

// Hoisting muammosi:
// Noto'g'ri:
console.log(x); // undefined
var x = 5;

// To'g'ri:
const y = 5;
console.log(y); // 5

// Scope muammosi:
// Noto'g'ri:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3, 3, 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0, 1, 2
}


// 4.3 Xotira boshqaruvi:
// Katta obyektlar uchun

let bigObject = {
  // katta ma'lumotlar
}

// Ishlatgandan keyin tozalash
bigObject = null;



// 5. Amaliy misollar

// 5.1 Oddiy o'zgaruvchilar
// Shaxsiy ma'lumotlar

const firstName = "Dilfuza";
const lastName = "Karimova";
let age = 25;
let birthYear = 2024;

console.log(`Mening ism familyam: ${firstName} ${lastName}`); // Output Mening ism familyam: Dilfuza Karimova
console.log(`Men ${age}-yoshdaman`); // Output Men 25-yoshdaman
console.log(`Men ${birthYear}-yilda tug'ulganman`); // Output Men 2024-yilda tug'ulganman

document.write(`
  Mening ism familyam: ${firstName} ${lastName} <br>
  Men ${age}-yoshdaman <br>
  Men ${birthYear}-yilda tug'ulganman
  `)

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  birthYear: birthYear
}
console.table(person)

// 5.2 Raqamlar bilan ishlash:
// Hisoblash
const firstNumber = 15;
const secondNumber = 25;
let total = firstNumber + secondNumber;
let duplicate = firstNumber * secondNumber;
console.log(`Total: ${total}`); // Output Total: 40
console.log(`Duplicate: ${duplicate}`); // Output Duplicate: 375

// Foizni hisoblash
const basicPrice = 1000;
const discountPercentage = 15;
let discountPrice = basicPrice * (discountPercentage / 100);
let finalPrice = basicPrice - discountPrice;
console.log(`Chegirma: ${discountPrice} so'm`); // Output Chegirma: 150 so'm
console.log(`Yakuniy narx: ${finalPrice} so'm`); // Output Yakuniy narx: 850 so'm


// 5.3 Matnlar bilan ishlash:
// Matn bilan operatsiyalar
const name = 'Aziz';
const lastname = 'Rahimov';
let fullName = name + " " + lastname;

// Template literal ishlatish
let greeting = `Salom, ${fullName}`;
let length = fullName.length;

console.log(greeting); // Output: Salom, Aziz Rahimov
console.log(`Ismingiz uzunligi: ${length} ta harf`); // Output: Ismingiz uzunligi: 12 ta harf 

// Matnni o'zgartirish
let uppLetter = fullName.toUpperCase();
let lowerLetter = fullName.toLowerCase();

console.log(`Katta harf: ${uppLetter}`); // Output: Katta harf: AZIZ RAHIMOV
console.log(`Kichik harf: ${lowerLetter}`); // Output: Kichik harf: aziz rahimov


// 5.4 Massivlar bilan ishlash:
// Massiv yaratish
const fruits = ['olma', 'nok', 'uzum', 'banan'];
const numbers = [1, 2, 3, 4, 5];

// Massiv ma'lumotlari
console.log(`Mevalar soni: ${fruits.length}`); // Output: Mevalar soni: 4
console.log(`Birinchi meva: ${fruits[0]}`); // Output: Birinchi meva olma
console.log(`Oxirgi meva: ${fruits[fruits.length -1]}`); // Output: Oxirgi meva: banan

// Massivga element qo'shish
fruits.push('apelsin');
console.log(`Yangi meva qo'shildi: ${fruits}`); // Output: Yangi meva qo'shildi: olma,nok,uzum,banan,apelsin

// Massiv elementlarini ko'rish
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
};
// Output: 1. olma
// Output: 2. nok
// Output: 3. uzum
// Output: 4. banan
// Output: 5. apelsin


// 5.5 Obyektlar bilan ishlash: 
// Obyekt yaratish
const student = {
  name: 'Muhammadali',
  age: 20,
  course: 2,
  faculty: "Informatika",
  grades: [2, 5, 4, 3,]
};

// Obyekt ma'lumotlarini chiqarish
console.log(`Talaba: ${student.name}`); // Output: Talaba: Muhammadali
console.log(`Yoshi: ${student.age}`); // Output: Yosh: 20
console.log(`Kursi: ${student.course}`); // Output: Kursi: 2
console.log(`fakulteti: ${student.faculty}`); // Output: fakultet: Informatika

// O'rtacha bahoni hisoblash
let sum = 0;
for (let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
}
const overageGrade = sum / student.grades.length;
console.log(`O'rtacha baho: ${overageGrade.toFixed(2)}`);

// Obyektga yangi xususiyat qo'shish
student.phone = "+998901234567";
console.log(`Telefon: ${student.phone}`);


// 5.6 Shartli operatorlar:
// Yosh bo'yicha kategoriya
const basicAge = 18;
let category;

if (basicAge < 13) {
  category = 'Bola';
} else if (basicAge < 18) {
  category = "O'smir";
} else if (basicAge < 60) {
  category = 'Kattalar';
} else {
  category = 'Keksa';
};
console.log(`Siz ${category} kategoriyasiga kirasiz`); // Output: Siz Kattalar kategoriyasiga kirasiz

// Bahoni harf bilan ifodalash
const grade = 85;
let letterGrade;

if (grade >= 90) {
  letterGrade = 'A'
} else if (grade >= 80) {
  letterGrade = 'B'
} else if (grade >= 70) {
  letterGrade = 'C'
} else if (grade >= 60) {
  letterGrade = 'D'
} else {
  letterGrade = 'F'
}

console.log(`Sizning bahoyingiz: ${letterGrade}`); // Output: Sizning bahoyingiz: B


// 5.7 Funksiyalar bilan ishlash:

// Oddiy funksiya
function greetings(name) {
  return `Salom, ${name}!`;
};

// Funksiyani chaqirish
const hello = greetings('Dilnoza');
console.log(hello);

// Hisoblash funksiyasi
function rightAngleSurface(length, breadth) {
  return length * breadth;
};

const uzunlik = 50;
const kenglik = 5;
const surface = rightAngleSurface(uzunlik, kenglik);
console.log(`To'g'ri burchak yuzi: ${surface} kv.sm`); // Output: To'g'ri burchak yuzi: 250 


// Arrow function
const square = (number) => number * number;
const natija = square(7);
console.log(`7 ning kvadrati: ${natija}`); // Output: 7 ning kvadrati: 49


// 5.8 Vaqt bilan ishlash:

// Joriy vaqt
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // 0 dan boshlanadi
const day = now.getDate();
const hours = now.getHours();
const minute = now.getMinutes();

console.log(`Bugun: ${day}.${month}.${year}`); // Output: Bugun: 7.7.2025 
console.log(`Vaqt: ${hours}:${minute < 10 ? '0' + minute: minute}`); // Output: Vaqt: 3:56

// Yosh hisoblash
const yearOfBirth = 1997;
const currentAge = year - yearOfBirth;
console.log(`Sizning yoshingiz: ${currentAge}`); // Output: Sizning yoshingiz: 28
