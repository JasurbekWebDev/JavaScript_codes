// JavaScript-dagi usul Array.prototype.reduce()massivning har bir elementida reduktor funksiyasini bajaradi, natijada bitta chiqish qiymati olinadi. Buning uchun ikkita argument kerak bo'ladi: qayta qo'ng'iroq qilish funktsiyasi ("reduktor") va akkumulyator uchun ixtiyoriy boshlang'ich qiymat.
// dan foydalanishni ko'rsatadigan ba'zi misollar reduce():
// 1. Massivdagi qiymatlarni yig'indisini topish:

// Example:
const raqamlar = [29, 39, 20, 12, 49];
const yigindi = raqamlar.reduce ((son1, son2) => son1 + son2, 0);
console.log (yigindi); // Output: 149

// 2. Massivlar massivini tekislash:
// reduce()bir nechta ichki joylashtirilgan massivlarni bitta tekis massivga birlashtirish uchun ishlatilishi mumkin.
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce (
  (accumulator, currentValue) => accumulator.concat (currentValue),
  []
);
console.log (flattenedArray); // [1, 2, 3, 4, 5, 6]
const sum = flattenedArray.reduce ((acc, curr) => acc + curr, 0);
console.log (sum); // Output: 21

// 3. Massivda nechta bir xil element borligini toping
// Ushbu misol kalitlar massiv elementlari va qiymatlar ularning hisobi bo'lgan ob'ektni qanday qurishni ko'rsatadi.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitsConts = fruits.reduce ((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log (fruitsConts);

// 4. Ob'ektlarni xossa bo'yicha guruhlash:
// reduce()ob'ektlar ro'yxatini ob'ektga tartibga solish uchun ishlatilishi mumkin, bunda kalitlar xususiyat qiymatlari va qiymatlar bu xususiyat qiymatiga ega bo'lgan ob'ektlar massivlaridir.

const people = [
  {name: 'Alice', age: 30},
  {name: 'Bob', age: 25},
  {name: 'Charlie', age: 30},
  {name: 'David', age: 25},
];

const peopleByAge = people.reduce ((accumulator, person) => {
  const age = person.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push (person);
  return accumulator;
}, {});
console.log (peopleByAge);
/* Output:
{
  '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ],
  '25': [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ]
}
*/

// JavaScript-dagi ob'ektlarni umumiy xususiyat bo'yicha guruhlash ob'ektlar massivini yangi tuzilishga, odatda ob'ektga yoki Xaritaga aylantirishni o'z ichiga oladi, bu erda kalitlar tanlangan xususiyatning alohida qiymatlarini ifodalaydi va qiymatlar ushbu xususiyat qiymatini baham ko'radigan ob'ektlarni o'z ichiga olgan massivlardir.

// Ob'ektlarni guruhlash usullari:
// Object.groupBy() (ES2024): Bu eng zamonaviy va sodda yondashuv.

const data = [
  {name: 'Alice', age: 28},
  {name: 'Bob', age: 30},
  {name: 'Eve', age: 28},
];

const peoplebyAgeData = Object.groupBy (data, person => person.age);
console.log (peoplebyAgeData);
// Output:
// {
//   "28": [{"name":"Alice","age":28}, {"name":"Eve","age":28}],
//   "30": [{"name":"Bob","age":30}]
// }

// Array.prototype.reduce(): Bu guruhlashtirishga erishish uchun klassik va koʻp qirrali usul boʻlib, eski JavaScript versiyalari bilan mos keladi.

const students = [
  {name: 'John', grade: 1},
  {name: 'James', grade: 1},
  {name: 'Ryan', grade: 2},
];

const groupedStudents = students.reduce ((accumulator, currentStudent) => {
  const grade = currentStudent.grade;
  if (!accumulator[grade]) {
    accumulator[grade] = [];
  }
  accumulator[grade].push (currentStudent);
  return accumulator;
}, {});
// Output:
// {
//   "1": [{"name":"John","grade":1}, {"name":"James","grade":1}],
//   "2": [{"name":"Ryan","grade":2}]
// }

// Map.groupBy() (ES2024): Object.groupBy() ga o'xshash, lekin kalitlarni kiritish tartibini saqlash yoki kalitlar satr yoki belgilar bo'lmaganda foydali bo'lishi mumkin bo'lgan Map namunasini qaytaradi.

const inventory = [
  {name: 'asparagus', type: 'vegetables', quantity: 9},
  {name: 'bananas', type: 'fruit', quantity: 5},
];
const groupedByType = Map.groupBy (inventory, ({type}) => type);
// groupedByType - bu Xarita, bunda kalitlar "sabzavotlar", "mevalar" va qiymatlar mos keladigan ob'ektlar massivlaridir.

// Usul tanlash:
// Zamonaviy JavaScript muhitlari uchun (ES2024 va keyingi), Object.groupBy() yoki Map.groupBy() eng qisqa va o'qilishi mumkin bo'lgan echimlarni taqdim etadi.
// Eski muhitlar bilan kengroq moslik uchun Array.prototype.reduce() afzal qilingan usuldir.
