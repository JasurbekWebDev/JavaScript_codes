
``` JavaScript
// JavaScript ob'ektlari bilan ishlashda ko'plab metodlar mavjud. Ushbu metodlar yordamida ob'ektlarni yaratish, o'zgartirish va ulardan foydalanish mumkin. Quyida ba'zi asosiy metodlar keltirilgan:

// Murakkab ob'ektlar yaratish uchun JavaScriptda ko'plab metodlar mavjud. Ushbu metodlar yordamida ob'ektlarni yaratish, o'zgartirish va ulardan foydalanish mumkin. Quyida ba'zi asosiy metodlar keltirilgan:
// Object yaratish 
// Ob'ekt yaratish uchun {} qavslaridan foydalaniladi
const objCar = {
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
    return `${this.marka} ${this.model} ishga tushdi!`;
  },
  tormizlash() {
    return `${this.marka} ${this.model} mashina to'xtadi!`;
  },
};
// Ob'ekt metodlari
// Ob'ekt metodlari yordamida ob'ektning xususiyatlariga murojaat qilish va ularni o'zgartirish mumkin. Misol uchun, ob'ektning qiymatlarini olish yoki o'zgartirish uchun quyidagi metodlardan foydalanish mumkin: 

// 1. `Object.keys(obj)` - ob'ektning kalitlarini olish
console.log(Object.keys(objCar)); // ['marka', 'model', 'yil', 'rang', 'narx', 'motor', 'xususiyatlar', 'ishlatilgan', 'km', 'egasi', 'boshlash', 'tormizlash']

// 2. `Object.values(obj)` - ob'ektning qiymatlarini olish
console.log(Object.values(objCar)); // ['Toyota', 'Camry', 2023, 'Qora', 25000, {tip: 'V6', hajm: 3.5, quvvat: 301}, ['ABS', 'Airbag', 'Konditsioner'], false, 15000, null, ƒ boshlash(), ƒ tormizlash()]

// 3. `Object.entries(obj)` - ob'ektning kalit-qiymat juftliklarini olish
console.log(Object.entries(objCar)); // [['marka', 'Toyota'], ['model', 'Camry'], ['yil', 2023], ['rang', 'Qora'], ['narx', 25000], ['motor', {tip: 'V6', hajm: 3.5, quvvat: 301}], ['xususiyatlar', ['ABS', 'Airbag', 'Konditsioner']], ['ishlatilgan', false], ['km', 15000], ['egasi', null], ['boshlash', ƒ boshlash()], ['tormizlash', ƒ tormizlash()]]  

// 4. `Object.assign(target, ...sources)` - ob'ektga yangi xususiyatlar qo'shish
const qoshimcha = {garantiya: "3 yil", servis: "Bepul"};
const yangiObj = Object.assign({}, objCar, qoshimcha); // Ob'ektga yangi xususiyatlar qo'shish
console.log(yangiObj); // {marka: 'Toyota', model: 'Camry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash(), garantiya: '3 yil', servis: 'Bepul'}

// 5. `Object.freeze(obj)` - ob'ektni o'zgartirishdan himoya qilish
const muzlatilganObj = Object.freeze(objCar); // Ob'ektni o'zgartirishdan himoya qilish
console.log(muzlatilganObj); // {marka: 'Toyota', model: 'Camry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash()}

// 6. `Object.seal(obj)` - ob'ektni o'zgartirishdan himoya qilish, lekin yangi xususiyatlar qo'shishga ruxsat berish
const muhrlanganObj = Object.seal(objCar); // Ob'ektni o'zgartirishdan himoya qilish, lekin yangi xususiyatlar qo'shishga ruxsat berish
console.log(muhrlanganObj); // {marka: 'Toyota', model: 'Camry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash()}   

// 7. `Object.create(proto, [propertiesObject])` - yangi ob'ekt yaratish va uning prototipini belgilash
const yangiObjekt = Object.create(objCar); // Yangi ob'ekt yaratish va uning prototipini belgilash
console.log(yangiObjekt); // {__proto__: {marka: 'Toyota', model: 'Camry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash()}}  

// 8. `Object.defineProperty(obj, prop, descriptor)` - ob'ektga yangi xususiyat qo'shish yoki mavjud xususiyatni o'zgartirish
Object.defineProperty(objCar, 'yangiXususiyat', {
  value: 'Yangi qiymat',
  writable: true,
  enumerable: true,
  configurable: true
}); // Ob'ektga yangi xususiyat qo'shish  
console.log(objCar.yangiXususiyat); // 'Yangi qiymat' 

// 9. `Object.defineProperties(obj, props)` - ob'ektga bir nechta yangi xususiyat qo'shish yoki mavjud xususiyatlarni o'zgartirish
Object.defineProperties(objCar, { 
  yangiXususiyat2: {
    value: 'Yangi qiymat 2',
    writable: true,
    enumerable: true,
    configurable: true
  },
  yangiXususiyat3: {
    value: 'Yangi qiymat 3',
    writable: true,
    enumerable: true,
    configurable: true
  }
}); // Ob'ektga bir nechta yangi xususiyat qo'shish 
console.log(objCar.yangiXususiyat2); // 'Yangi qiymat 2'
console.log(objCar.yangiXususiyat3); // 'Yangi qiymat 3 

// 10. `Object.getOwnPropertyDescriptor(obj, prop)` - ob'ektning xususiyatining tavsifini olish
const tavsif = Object.getOwnPropertyDescriptor(objCar, 'yil'); // Ob'ektning xususiyatining tavsifini olish
console.log(tavsif); // {value: 2023, writable: true, enumerable: true, configurable: true} 

// 11. `Object.getOwnPropertyDescriptors(obj)` - ob'ektning barcha xususiyatlarining tavsiflarini olish
const tavsiflar = Object.getOwnPropertyDescriptors(objCar); // Ob'ektning barcha xususiyatlarining tavsiflarini olish
console.log(tavsiflar); // {marka: {value: 'Toyota', writable: true, enumerable: true, configurable: true}, model: {value: 'Camry', writable: true, enumerable: true, configurable: true}, yil: {value: 2023, writable: true, enumerable: true, configurable: true}, rang: {value: 'Qora', writable: true, enumerable: true, configurable: true}, narx: {value: 25000, writable: true, enumerable: true, configurable: true}, motor: {value: {tip: 'V6', hajm: 3.5, quvvat: 301}, writable: true, enumerable: true, configurable: true}, xususiyatlar: {value: ['ABS', 'Airbag', 'Konditsioner'], writable: true, enumerable: true, configurable: true}, ishlatilgan: {value: false, writable: true, enumerable: true, configurable: true}, km: {value: 15000, writable: true, enumerable: true, configurable: true}, egasi: {value: null, writable: true, enumerable: true, configurable: true}, boshlash: {value: ƒ boshlash(), writable:true, enumerable:true, configurable:true}, tormizlash:{value :ƒ tormizlash(),writable:true ,enumerable:true ,configurable:true}} 

// 12. `Object.getPrototypeOf(obj)` - ob'ektning prototipini olish
const prototip = Object.getPrototypeOf(objCar); // Ob'ektning prototipini olish
console.log(prototip); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ, __proto__: Object} 

// 13. `Object.setPrototypeOf(obj, prototype)` - ob'ektning prototipini o'zgartirish
const yangiPrototip = {yangiXususiyat: 'Yangi qiymat'}; // Ob'ektning prototipini o'zgartirish
Object.setPrototypeOf(objCar, yangiPrototip); // Ob'ektning prototipini o'zgartirish
console.log(objCar.yangiXususiyat); // 'Yangi qiymat'   

// 14. `Object.prototype.hasOwnProperty(prop)` - ob'ektning o'z xususiyatini tekshirish
console.log(objCar.hasOwnProperty('marka')); // true - ob'ektning o'z xususiyati mavjud
console.log(objCar.hasOwnProperty('yangiXususiyat')); // false - ob'ektning o'z xususiyati mavjud emas

// 15. `Object.prototype.isPrototypeOf(obj)` - ob'ektning prototipini tekshirish
console.log(yangiPrototip.isPrototypeOf(objCar)); // true - yangiPrototip ob'ektining prototipi objCar ob'ekti uchun mavjud
console.log(objCar.isPrototypeOf(yangiPrototip)); // false - objCar ob'ekti yangiPrototip ob'ekti uchun prototip emas

// 16. `Object.prototype.propertyIsEnumerable(prop)` - ob'ektning xususiyatining enumerable (ko'rinadigan) ekanligini tekshirish
console.log(objCar.propertyIsEnumerable('marka')); // true - 'marka' xususiyati ko'rinadigan
console.log(objCar.propertyIsEnumerable('yangiXususiyat')); // false - 'yangiXususiyat' xususiyati ko'rinadigan emas

// 17. `Object.prototype.toString()` - ob'ektning toString() metodini chaqirish
console.log(objCar.toString()); // [object Object] - ob'ektning toString() metodi chaqirilganda [object Object] qaytaradi 

// 18. `Object.prototype.valueOf()` - ob'ektning valueOf() metodini chaqirish
console.log(objCar.valueOf()); // {marka: 'Toyota', model: 'Cam   ry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash()} - ob'ektning valueOf() metodi chaqirilganda ob'ektning o'zini qaytaradi 

// 19. `Object.prototype.toLocaleString()` - ob'ektning toLocaleString() metodini chaqirish
console.log(objCar.toLocaleString()); // 'Toyota, Camry, 2023, Qora, 25000, [object Object], ABS, Airbag, Konditsioner, false, 15000, null' - ob'ektning toLocaleString() metodi chaqirilganda ob'ektning qiymatlarini mahalliy formatda qaytaradi

// 20. `Object.prototype.constructor` - ob'ektning konstruktorini olish 
console.log(objCar.constructor); // ƒ Object() - ob'ektning konstruktorini olish

// 21. `Object.prototype.__proto__` - ob'ektning prototipini olish
console.log(objCar.__proto__); // {constructor: ƒ, __defineGetter__:  ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ} - ob'ektning prototipini olish  

// 22. `Object.prototype.__defineGetter__(prop, getter)` - ob'ektga getter qo'shish
Object.defineProperty(objCar, 'yilGetter', {
  get: function() {
    return this.yil;
  },
}); // Ob'ektga getter qo'shish 
console.log(objCar.yilGetter); // 2023 - ob'ektga qo'shilgan getter orqali yil qiymatini olish

// 23. `Object.prototype.__defineSetter__(prop, setter)` - ob'ektga setter qo'shish
Object.defineProperty(objCar, 'yilSetter', {
  set: function(value) {
    this.yil = value;
  },
}); // Ob'ektga setter qo'shish 
console.log(objCar.yilSetter = 2024); // 2024 - ob'ektga qo'shilgan setter orqali yil qiymatini o'zgartirish

// 24. `Object.prototype.__lookupGetter__(prop)` - ob'ektning getterini olish
console.log(objCar.__lookupGetter__('yilGetter')); // ƒ () { return this.yil; } - ob'ektning getterini olish

// 25. `Object.prototype.__lookupSetter__(prop)` - ob'ektning setterini olish
console.log(objCar.__lookupSetter__('yilSetter')); // ƒ (value) { this.yil = value; } - ob'ektning setterini olish  

// 26. `Object.prototype.toJSON()` - ob'ektni JSON formatiga aylantirish
console.log(JSON.stringify(objCar)); // {"marka":"Toyota","model":"Camry","yil":2023,"rang":"Qora","narx":25000,"motor":{"tip":"V6","hajm":3.5,"quvvat":301},"xususiyatlar":["ABS","Airbag","Konditsioner"],"ishlatilgan":false,"km":15000,"egasi":null,"boshlash":"function () { return `${this.marka} ${this.model} ishga tushdi!`; }","tormizlash":"function () { return `${this.marka} ${this.model} mashina to'xtadi!`; }"} - ob'ektni JSON formatiga aylantirish

// 27. `Object.prototype.hasOwnProperty.call(obj, prop)` - ob'ektning o'z xususiyatini tekshirish
console.log(Object.hasOwnProperty.call(objCar, 'marka')); // true - ob'ektning o'z xususiyati mavjud
console.log(Object.hasOwnProperty.call(objCar, 'yangiXususiyat')); // false - ob'ektning o'z xususiyati mavjud emas

// 28. `Object.prototype.isPrototypeOf.call(proto, obj)` - ob'ektning prototipini tekshirish
console.log(Object.isPrototypeOf.call(yangiPrototip, objCar)); // true - yangiPrototip ob'ektining prototipi objCar ob'ekti uchun mavjud
console.log(Object.isPrototypeOf.call(objCar, yangiPrototip)); // false - objCar ob'ekti yangiPrototip ob'ekti uchun prototip emas

// 29. `Object.prototype.propertyIsEnumerable.call(obj, prop)` - ob'ektning xususiyatining enumerable (ko'rinadigan) ekanligini tekshirish
console.log(Object.propertyIsEnumerable.call(objCar, 'marka')); // true - 'marka' xususiyati ko'rinadigan
console.log(Object.propertyIsEnumerable.call(objCar, 'yangiXususiyat')); // false - 'yangiXususiyat' xususiyati ko'rinadigan emas

// 30. `Object.prototype.toString.call(obj)` - ob'ektning toString() metodini chaqirish
console.log(Object.toString.call(objCar)); // [object Object] - ob'ektning toString() metodi chaqirilganda [object Object] qaytaradi

// 31. `Object.prototype.valueOf.call(obj)` - ob'ektning valueOf() metodini chaqirish
console.log(Object.valueOf.call(objCar)); // {marka: 'Toyota', model: 'Camry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash()} - ob'ektning valueOf() metodi chaqirilganda ob'ektning o'zini qaytaradi

// 32. `Object.prototype.toLocaleString.call(obj)` - ob'ektning toLocaleString() metodini chaqirish
console.log(Object.toLocaleString.call(objCar)); // 'Toyota, Camry, 2023, Qora, 25000, [object Object], ABS, Airbag, Konditsioner, false, 15000, null' - ob'ektning toLocaleString() metodi chaqirilganda ob'ektning qiymatlarini mahalliy formatda qaytaradi

// 33. `Object.prototype.constructor.call(obj)` - ob'ektning konstruktorini olish
console.log(Object.constructor.call(objCar)); // ƒ Object() - ob'ektning konstruktorini olish 

// 34. `Object.prototype.__proto__.call(obj)` - ob'ektning prototipini olish
console.log(Object.__proto__.call(objCar)); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ} - ob'ektning prototipini olish

// 35. `Object.prototype.__defineGetter__.call(obj, prop, getter)` - ob'ektga getter qo'shish
Object.defineProperty(objCar, 'yilGetter', {
  get: function() {
    return this.yil;
  },
}); // Ob'ektga getter qo'shish 
console.log(Object.__defineGetter__.call(objCar, 'yilGetter')); // ƒ () { return this.yil; } - ob'ektga qo'shilgan getter orqali yil qiymatini olish

// 36. `Object.prototype.__defineSetter__.call(obj, prop, setter)` - ob'ektga setter qo'shish
Object.defineProperty(objCar, 'yilSetter', {
  set: function(value) {
    this.yil = value;
  },
}); // Ob'ektga setter qo'shish 
console.log(Object.__defineSetter__.call(objCar, 'yilSetter')); // ƒ (value) { this.yil = value; } - ob'ektga qo'shilgan setter orqali yil qiymatini o'zgartirish

// 37. `Object.prototype.__lookupGetter__.call(obj, prop)` - ob'ektning getterini olish
console.log(Object.__lookupGetter__.call(objCar, 'yilGetter')); // ƒ () { return this.yil; } - ob'ektning getterini olish

// 38. `Object.prototype.__lookupSetter__.call(obj, prop)` - ob'ektning setterini olish
console.log(Object.__lookupSetter__.call(objCar, 'yilSetter')); // ƒ (value) { this.yil = value; } - ob'ektning setterini olish

// 39. `Object.prototype.toJSON.call(obj)` - ob'ektni JSON formatiga aylantirish
console.log(Object.toJSON.call(objCar)); // {"marka":"Toyota","model":"Camry","yil":2023,"rang":"Qora","narx":25000,"motor":{"tip":"V6","hajm":3.5,"quvvat":301},"xususiyatlar":["ABS","Airbag","Konditsioner"],"ishlatilgan":false,"km":15000,"egasi":null,"boshlash":"function () { return `${this.marka} ${this.model} ishga tushdi!`; }","tormizlash":"function () { return `${this.marka} ${this.model} mashina to'xtadi!`; }"} - ob'ektni JSON formatiga aylantirish  

// 40. `Object.prototype.hasOwnProperty.call(obj, prop)` - ob'ektning o'z xususiyatini tekshirish
console.log(Object.hasOwnProperty.call(objCar, 'marka')); // true - ob'ektning o'z xususiyati mavjud
console.log(Object.hasOwnProperty.call(objCar, 'yangiXususiyat')); // false - ob'ektning o'z xususiyati mavjud emas 

// 41. `Object.prototype.isPrototypeOf.call(proto, obj)` - ob'ektning prototipini tekshirish
console.log(Object.isPrototypeOf.call(yangiPrototip, objCar)); // true - yangiPrototip ob'ektining prototipi objCar ob'ekti uchun mavjud
console.log(Object.isPrototypeOf.call(objCar, yangiPrototip)); // false - objCar ob'ekti yangiPrototip ob'ekti uchun prototip emas  

// 42. `Object.prototype.propertyIsEnumerable.call(obj, prop)` - ob'ektning xususiyatining enumerable (ko'rinadigan) ekanligini tekshirish
console.log(Object.propertyIsEnumerable.call(objCar, 'marka')); // true - 'marka' xususiyati ko'rinadigan
console.log(Object.propertyIsEnumerable.call(objCar, 'yangiXususiyat')); // false - 'yangiXususiyat' xususiyati ko'rinadigan emas

// 43. `Object.prototype.toString.call(obj)` - ob'ektning toString() metodini chaqirish
console.log(Object.toString.call(objCar)); // [object Object] - ob'ektning toString() metodi chaqirilganda [object Object] qaytaradi

// 44. `Object.prototype.valueOf.call(obj)` - ob'ektning valueOf() metodini chaqirish
console.log(Object.valueOf.call(objCar)); // {marka: 'Toyota', model: 'Camry', yil: 2023, rang: 'Qora', narx: 25000, motor: {tip: 'V6', hajm: 3.5, quvvat: 301}, xususiyatlar: ['ABS', 'Airbag', 'Konditsioner'], ishlatilgan: false, km: 15000, egasi: null, boshlash: ƒ boshlash(), tormizlash: ƒ tormizlash()} - ob'ektning valueOf() metodi chaqirilganda ob'ektning o'zini qaytaradi

// 45. `Object.prototype.toLocaleString.call(obj)` - ob'ektning toLocaleString() metodini chaqirish
console.log(Object.toLocaleString.call(objCar)); // 'Toyota, Camry, 2023, Qora, 25000, [object Object], ABS, Airbag, Konditsioner, false, 15000, null' - ob'ektning toLocaleString() metodi chaqirilganda ob'ektning qiymatlarini mahalliy formatda qaytaradi

// 46. `Object.prototype.constructor.call(obj)` - ob'ektning konstruktorini olish
console.log(Object.constructor.call(objCar)); // ƒ Object() - ob'ektning konstruktorini olish

// 47. `Object.prototype.__proto__.call(obj)` - ob'ektning prototipini olish
console.log(Object.__proto__.call(objCar)); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, isPrototypeOf: ƒ, propertyIsEnumerable: ƒ, toLocaleString: ƒ, toString: ƒ, valueOf: ƒ} - ob'ektning prototipini olish

// 48. `Object.prototype.__defineGetter__.call(obj, prop, getter)` - ob'ektga getter qo'shish
Object.defineProperty(objCar, 'yilGetter', {  
  get: function() {
    return this.yil;
  },
}); // Ob'ektga getter qo'shish 
console.log(Object.__defineGetter__.call(objCar, 'yilGetter')); // ƒ () { return this.yil; } - ob'ektga qo'shilgan getter orqali yil qiymatini olish

// 49. `Object.prototype.__defineSetter__.call(obj, prop, setter)` - ob'ektga setter qo'shish
Object.defineProperty(objCar, 'yilSetter', {
  set: function(value) {
    this.yil = value;
  },
}); // Ob'ektga setter qo'shish 
console.log(Object.__defineSetter__.call(objCar, 'yilSetter')); // ƒ (value) { this.yil = value; } - ob'ektga qo'shilgan setter orqali yil qiymatini o'zgartirish

// 50. `Object.prototype.__lookupGetter__.call(obj, prop)` - ob'ektning getterini olish
console.log(Object.__lookupGetter__.call(objCar, 'yilGetter')); // ƒ () { return this.yil; } - ob'ektning getterini olish


const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Spread operator yordamida massivni nusxalash
console.log(copiedArray); // [1, 2, 3]


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // Spread operator yordamida massivlarni birlashtirish
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]


function sum(a, b, c) {
  return a + b + c; // Uchta argumentni yig'ish
}
const numbers = [1, 2, 3];
const result = sum(...numbers); // Spread operator yordamida massivni funksiya argumentlariga tarqatish
console.log(result); // 6

const originalObject = {name: 'Ali', age: 30};
const coliedObject = {...originalObject}; // Spread operator yordamida ob'ektni nusxalash
console.log(coliedObject); // {name: 'Ali', age: 30}

const object1 = {name: 'Vali', age: 20};
const object2 = {city: 'Toshkent', country: "O'zbekiston"};
const combinedObject = {...originalObject, ...object1, ...object2}; // Spread operator yordamida ob'ektlarni birlashtirish
console.log(combinedObject); // {name: 'Ali', age: 30, city: 'Toshkent', country: "O'zbekiston", name: 'Vali', age: 20}

const fruits = ['apple', 'banana'];
const newFruits = ['orange', ...fruits, 'grape']; // Spread operator yordamida massivga yangi elementlar qo'shish
console.log(newFruits); // ['orange', 'apple', 'banana', 'grape']

const obj = {a: 1, b: 2};
const newObj = {c: 3, ...obj, d: 4}; // Spread operator yordamida ob'ektga yangi xususiyatlar qo'shish
console.log(newObj); // {c: 3, a: 1, b: 2, d: 4}
// Spread operator yordamida ob'ekt va massivlar bilan ishlash
```