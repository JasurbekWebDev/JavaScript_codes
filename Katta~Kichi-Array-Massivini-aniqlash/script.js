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