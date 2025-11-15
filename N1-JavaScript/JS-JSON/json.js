// JavaScript JSON ni to'liq o'rganish uchun misol kodi
// JSON Nima? 
// JSON (JavaScript Object Notation) - bu ma'lumotlarni saqlash va uzatish uchun ishlatiladigan yengil vaznli format.
// U inson o'qishi mumkin bo'lgan matn shaklida bo'lib, JavaScript ob'ektlariga o'xshaydi.
// JSON qanday ishlaydi?
// JSON ma'lumotlarni kalit-qiymat juftliklari shaklida saqlaydi. 
// Bu ma'lumotlarni server va mijoz o'rtasida uzatishda keng qo'llaniladi.
// Misol uchun, serverdan foydalanuvchi ma'lumotlarini olish uchun JSON formatidan foydalanish mumkin.
// Misol kodi:

// app.js
// 1. JSON ma'lumotlarini yaratish
const jsonData = `{
  "users": [
    { "id": 1, "name": "Ali", "age": 25 },
    { "id": 2, "name": "Vali", "age": 30 },
    { "id": 3, "name": "Gulbahor", "age": 22 }
  ]
}`; 
// 2. JSON ma'lumotlarini JavaScript ob'ektiga aylantirish
const data = JSON.parse(jsonData);
console.log("Foydalanuvchilar ro'yxati:", data.users);

// 3. Foydalanuvchi ma'lumotlarini ko'rsatish
data.users.forEach(user => {
  console.log(`ID: ${user.id}, Ism: ${user.name}, Yosh: ${user.age}`);
});

// 4. Yangi foydalanuvchi qo'shish
data.users.push({ "id": 4, "name": "Nodir", "age": 28 });
console.log("Yangi foydalanuvchi qo'shildi:", data.users);

// 5. JavaScript ob'ektini JSON formatiga aylantirish
const updatedJsonData = JSON.stringify(data, null, 2); // nima uchun null, va 2 ishlatiladi?
// null - barcha kalitlarni saqlash uchun ishlatiladi
// 2 - JSON ma'lumotlarini 2 bo'sh joy bilan formatlash uchun ishlatiladi
// nima uchun aynan 2 bo'sh joy?
// Bu JSON ma'lumotlarini o'qish uchun qulayroq qiladi, chunki u yaxshiroq formatlangan bo'ladi.
// 2 bo'sh joy - bu ko'pincha standart hisoblanadi, lekin siz boshqa qiymatlarni ham ishlatishingiz mumkin. masalan, 4 bo'sh joy yoki tabulyatsiya belgisi.


console.log("Yangilangan JSON ma'lumotlari:", updatedJsonData);

// Ushbu misol JSON formatini yaratish, o'qish, yangilash va JavaScript ob'ektlariga aylantirish jarayonlarini ko'rsatadi.

// JSON bilan ishlashda JSON.parse() va JSON.stringify() metodlari juda muhimdir.
// JSON.parse() - JSON matnini JavaScript ob'ektiga aylantiradi.
// JSON.stringify() - JavaScript ob'ektini JSON matniga aylantiradi. 
// Ushbu metodlar yordamida siz JSON ma'lumotlarini osongina boshqarishingiz mumkin.
// Qo'shimcha resurslar:
// 1. MDN Web Docs - JSON: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
// 2. W3Schools - JSON Tutorial: https://www.w3schools.com/js/js_json_intro.asp
// 3. JSON.org - JSON rasmiy sayti: https://www.json.org/json-en.html
// Ushbu resurslar JSON haqida chuqurroq ma'lumot olish va undan samarali foydalanish uchun foydali bo'ladi.
// Ushbu misolni o'zingizning loyihalaringizda qo'llab ko'ring va JSON bilan ishlash bo'yicha ko'proq tajriba orttiring!

// Omad tilayman!

// JSONning muhum metodlari:
// 1. JSON.parse() - JSON matnini JavaScript ob'ektiga aylantiradi.
// 2. JSON.stringify() - JavaScript ob'ektini JSON matniga aylantiradi.
// 3. JSON.validate() - JSON matnining to'g'riligini tekshiradi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 4. JSON.clone() - JSON ob'ektini chuqur nusxalash uchun ishlatiladi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 5. JSON.merge() - Ikki yoki undan ko'p JSON ob'ektlarini birlashtirish uchun ishlatiladi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 6. JSON.diff() - Ikki JSON ob'ekti o'rtasidagi farqlarni aniqlash uchun ishlatiladi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 7. JSON.format() - JSON matnini o'qish uchun qulayroq formatlash uchun ishlatiladi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 8. JSON.minify() - JSON matnini siqish uchun ishlatiladi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 9. JSON.parseAsync() - Asinxron ravishda JSON matnini JavaScript ob'ektiga aylantiradi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// 10. JSON.stringifyAsync() - Asinxron ravishda JavaScript ob'ektini JSON matniga aylantiradi (bu metod standartda mavjud emas, lekin ba'zi kutubxonalar tomonidan taqdim etiladi).
// Ushbu metodlar JSON bilan ishlashda juda foydali bo'lib, ma'lumotlarni saqlash, uzatish va boshqarishda yordam beradi.
// Misol uchun, JSON.parse() va JSON.stringify() metodlarini yuqoridagi misolda ko'rishingiz mumkin.
// Qo'shimcha ma'lumot olish uchun yuqoridagi resurslarga murojaat qilishingiz mumkin.


