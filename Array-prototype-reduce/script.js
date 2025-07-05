// JavaScript-dagi usul Array.prototype.reduce()massivning har bir elementida reduktor funksiyasini bajaradi, natijada bitta chiqish qiymati olinadi. Buning uchun ikkita argument kerak bo'ladi: qayta qo'ng'iroq qilish funktsiyasi ("reduktor") va akkumulyator uchun ixtiyoriy boshlang'ich qiymat. 
// dan foydalanishni ko'rsatadigan ba'zi misollar reduce():
// 1. Massivdagi barcha qiymatlarni jamlash:
// reduce()Bu akkumulyator ishlayotgan summani kuzatib turadigan klassik foydalanish holatidir .

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// 2. Massivlar massivini tekislash:
// reduce()bir nechta ichki joylashtirilgan massivlarni bitta tekis massivga birlashtirish uchun ishlatilishi mumkin.

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// 3. Massivdagi elementlarning paydo bo‘lishini sanash:
// Ushbu misol kalitlar massiv elementlari va qiymatlar ularning hisobi bo'lgan ob'ektni qanday qurishni ko'rsatadi.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(fruitCounts); // Output: { apple: 3, banana: 2, orange: 1 }


// 4. Ob'ektlarni xossa bo'yicha guruhlash:
// reduce()ob'ektlar ro'yxatini ob'ektga tartibga solish uchun ishlatilishi mumkin, bunda kalitlar xususiyat qiymatlari va qiymatlar bu xususiyat qiymatiga ega bo'lgan ob'ektlar massivlaridir.

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 25 },
];

const peopleByAge = people.reduce((accumulator, person) => {
  const age = person.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push(person);
  return accumulator;
}, {});
console.log(peopleByAge);
/* Output:
{
  '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ],
  '25': [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ]
}
*/