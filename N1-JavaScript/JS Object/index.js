

const mashina = {
  marka: 'Toyota',
  model: 'Camry',
  yil: 2023,
  rang: 'Qora',
  narx: 25000,
  motor: {
    tip: 'V6',
    hajm: 3.5,
    quvvat: 301,
  },
  xususiyatlar: ["ABS", "Airbag", "Konditsioner"],
  ishlatilgan: false,
  km: 15000,
  egasi: null,

  boshlash() {
    return `${this.marka} ${this.model} ishga tushdi!`
  },

  tormizlash() {
    return `${this.marka} ${this.model} mashina to'xtadi!`
  }

}
// Eng Ko'p Ishlatiladigan Metodlar (⭐⭐⭐⭐⭐)
console.log(Object.keys(mashina)); // Ob'ektning kalitlari
console.log(Object.values(mashina)); // Ob'ektning qiymatlari
console.log(Object.entries(mashina)); // Ob'ektning kalit-qiymat juftliklari

const qoshimcha1 = {garantiya: "3 yil", servis: "Bepul"};
console.log(Object.assign({}, mashina, qoshimcha1)); // Ob'ektga yangi xususiyatlar qo'shish
console.log(mashina);

const narx = {...mashina, narx: mashina.narx * 1.1}; // Narxni oshirish
console.log(narx); // Yangilangan narx bilan ob'ekt
const {marka, model, yil} = mashina; // Destructuring
const {motor: {tip, hajm, quvvat}} = mashina; // Nested destructuring
const {xususiyatlar: [xususiyat1, xususiyat2, xususiyat3]} = mashina; // Array destructuring
const {ishlatilgan, km, egasi} = mashina; // Qolgan xususiyatlar
let car = mashina; // Ob'ektni o'zgaruvchiga tayinlash
console.log(car); // Ob'ektni chiqarish


console.log(`Xususiyatlar: ${xususiyat1}, ${xususiyat2}, ${xususiyat3}`); // Array destructuring orqali qiymatlarni olish
console.log(`Ishlatilgan: ${ishlatilgan}, KM: ${km}, Egasi: ${egasi}`); // Qolgan xususiyatlarni olish
console.log(`Marka: ${marka}, Model: ${model}, Yil: ${yil}`); // Destructuring orqali qiymatlarni olish
console.log(`Motor Tipi: ${tip}, Hajmi: ${hajm}, Quvvati: ${quvvat}`); // Nested destructuring orqali qiymatlarni olish
console.log(xususiyat1, xususiyat2, xususiyat3); // Xususiyatlarni chiqarish

