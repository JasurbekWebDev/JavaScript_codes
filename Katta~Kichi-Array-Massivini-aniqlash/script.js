//  JavaScript tilida massivdagi eng katta va eng kichik sonni topish masalasi va uning batafsil yechimi keltirilgan:

// ✅ Masala:
// Massivdagi eng katta va eng kichik sonni toping.

// 💡 Yechim strategiyasi:
// 1. Massivni bir marta for yoki forEach bilan aylanamiz.
// 2. Har bir elementni hozirgi eng katta son bilan solishtiramiz.
// 3. Agar katta bo‘lsa, eng katta son sifatida saqlab qolamiz.


// Array Numbers/ MAX & MIN (Massiv Raqamlar)
const numbers = [12, 20, -2, 40, 25, -28, 1, 90, -15];

// 1-qadam: Dastlab birinchi elementni eng katta deb olamiz
let max = 0;

// 1-qadam: Dastlab birinchi elementni eng kichik deb olamiz
let min = 0;



// 1-Usul for loop eng katta son topish
// 2-qadam: Massivni aylanib chiqamiz
// ====MAX STAR ==== 
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; // yangi katta qiymat topildi
  };
};
console.log("Eng katta son:", max); // Natija: Eng katta son: 90


// 1-Usul for loop eng kichik son topish
// 2-qadam: Massivni aylanib chiqamiz
// ====MIN STAR ==== 
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i]; // yangi kichik qiymat topildi
  };
};
console.log("Eng kichik son:", min); // Natija: Eng kichik son: -28


// 2-Usul forEach Metodi orqali eng katta son topish
// ====MAX STAR ==== 
numbers.forEach((num) => {
    if (num > max) {
        max = num;
    }
});
console.log("Eng katta son:", max); // Natija: 90


// 2-Usul forEach Metodi orqali eng kichik son topish
// ====MIN STAR ==== 
numbers.forEach((num) => {
    if (num < min) {
        min = num;
    }
});
console.log("Eng kichik son:", min); // Natija: -28


// ✅ Yana bir oddiy variant: Math.max() va Math.min() Metodi bilan:
// 3-Usul
// ====MAX STAR ==== 
const findMax = Math.max(...numbers);

// ====MIN STAR ==== 
const findMin = Math.min(...numbers);

console.log("Eng katta son:", findMax); // Natija: 90
console.log("Eng kichik son:", findMin); // Natija: -28


// 4-Usul
// Funksiya Orqali Katta Va Kichik Massivni aniqlash
// Test
const array = [3, -1, 4, 1, -5, 9, 2, -6, 5, 3, 5]; 

// Funksiya: Eng katta son va uning indeksi
function findMaxWithIndex(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return {max, index}
};
const result = findMaxWithIndex(array);
console.log("Eng katta son: ", result.max);
console.log('Indexsi: ', result.index);


// ====MAX STAR ==== 
function Big(arr) {
    if (arr.length === 0) return null; // Massiv bo'sh bo'lsa null qaytaradi
    let max = arr[0]; // Birinchi elementni maksimum deb olamiz
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Agar joriy element kattaroq bo'lsa, max ni yangilaymiz
        }
    }
    
    return max;
};
console.log(`Eng katta son: ${Big(array)}`); // Natija: 9


// ====MIN STAR ==== 
function Small(arr) {
    if (arr.length === 0) return undefined; // Massiv bo'sh bo'lsa undefined qaytaradi
    let max = arr[0]; // Birinchi elementni minumim deb olamiz
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            max = arr[i]; // Agar joriy element kichik bo'lsa, min ni yangilaymiz
        }
    }
    
    return max;
};
console.log(`Eng kichik son: ${Small(array)}`); // Natija: -6


// Alternativ usul sifatida JavaScript'ning o'rnatilgan Math.max va Math.min funksiyasi va spread operatoridan foydalanish mumkin:

// ====MAX STAR ==== 
function maxFuction(num) {
  return num.length === 0 ? null : Math.max(...array);
}
console.log(`Eng katta son: ${maxFuction(array)}`); // Natija: 9


// ====MIN STAR ==== 
function minFuction(num) {
  return num.length === 0 ? null : Math.min(...array);
}
console.log(`Eng kichik son: ${minFuction(array)}`); // Natija: -6


// sort() metodi yordamida eng katta sonni topish

// 🔍 Foydali, lekin ehtiyotkorlik bilan ishlatiladi:
// Massivni sort qilib, oxirgi elementni olish mumkin. Lekin bu usul massivni o‘zgartiradi.
// ✅ sort() metodining vazifasi
// sort() — massiv ichidagi elementlarni tartiblash uchun ishlatiladi.
// 🔧 Raqamlar bilan ishlaganda, sort() ga taqqoslash funksiyasi kerak:
const array_Numbers = [-12, 45, -1, 67, 3, 89, -24, 90, 11];

// Avval nusxasini olamiz, asl massiv o‘zgarmasin
const sortedMax = [...array_Numbers].sort((a, b) => a - b); // O'sish tartibi
const sortedMin = [...array_Numbers].sort((a, b) => b - a); // Kamayish tartibi

// ====MAX STAR ==== 
const maxsimum = sortedMax[sortedMax.length - 1];
console.log("Eng katta son:", maxsimum); // 90

// ====MIN STAR ==== 
const minimum = sortedMin[sortedMin.length - 1];
console.log("Eng kichik son:", minimum); // -24

// 📌 Ogohlantirish:
// sort() asl massivni o‘zgartiradi! Agar asl massiv saqlanib qolishi kerak bo‘lsa, uni slice() bilan nusxa oling:

const sliceCopy_Max = array_Numbers.slice().sort((a, b) => a - b); // nusxa + sort
const sliceCopy_Min = array_Numbers.slice().sort((a, b) => b - a); // nusxa + sort

const slice_Max = sliceCopy_Max[sliceCopy_Max.length - 1];
const slice_Min = sliceCopy_Min[sliceCopy_Min.length -1];

console.log("Asl massiv:", array_Numbers); // [-12, 45, -1, 67, 3, 89, -24, 90, 11]
console.log("Eng katta son: ", sliceCopy_Max); // 90 [-24, -12, -1, 3, 11, 45, 67, 89, 90]
console.log("Eng kichik son: ", sliceCopy_Min); // -24 [90, 89, 67, 45, 11, 3, -1, -12, -24]


// ✅ Reduce() bilan eng katta sonni topish
// 🔧 Funksional uslubdagi yechim:

// ====MAX STAR ==== 
const reduce_Max = array_Numbers.reduce((acc, current) => {
  return current > acc ? current : acc;
});
console.log("Eng katta son:", reduce_Max); // 90

// ====MIN STAR ==== 
const reduce_Min = array_Numbers.reduce((acc, current) => {
  return current < acc ? current : acc;
});
console.log("Eng kichik son:", reduce_Min); // -24


// Funksiya reduce()bilan yoziladi
// ====MAX STAR ==== 
function findMaxReduce(arr) {
  return array_Numbers.reduce((acc, current) => (current > acc ? current : acc), arr[0])
}
console.log("Reduce bilan eng katta:", findMaxReduce(array_Numbers)); // 90

// ====MIN STAR ==== 
function findMinReduce(arr) {
  return array_Numbers.reduce((acc, current) => (current < acc ? current : acc), arr[0])
}
console.log("Reduce bilan eng katta:", findMinReduce(array_Numbers)); // -24