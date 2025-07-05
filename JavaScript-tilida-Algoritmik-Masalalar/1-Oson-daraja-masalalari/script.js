// === Oson daraja masalalari === //

//  1. Massivdagi eng katta sonni topish
// Masala: Berilgan massivdagi eng katta sonni toping.

// Yechim strategiyasi:
// Massivni bir marta o'tib, har bir elementni joriy maksimum bilan taqqoslaymiz.

function findMax(arr) {
  if (arr.length === 0) return undefined;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// Misol
console.log(findMax([3, 7, 2, 9, 1])); // 9
console.log(findMax([-5, -2, -8, -1])); // -1


// 2. Palindrom tekshirish
// Masala: Berilgan string palindrom ekanligini tekshiring.
// Yechim strategiyasi:
// Stringni boshi va oxiridan taqqoslab, o'rtaga qarab harakat qilamiz.

function isPalindrome(str) {
  // Faqat harflar va raqamlarni qoldirish
  const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Misol
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false


// 3. Faktorial hisoblash
// Masala: Berilgan sonning faktorialini hisoblang.

// Yechim strategiyasi:
// Rekursiv yoki iterativ usuldan foydalanish.

// Rekursiv yechim
function factorialRecursive(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1); 
}
console.log(factorialRecursive(5)); // 120


// Iterativ yechim
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *=i;
  }
  return result;
}
console.log(factorial(5)); // 120

// 4. Fibonacci ketma-ketligi
// Masala: Fibonacci ketma-ketligining n-chi elementini toping.

// Rekursiv yechim (sekin)
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(10));

// Iterativ yechim
function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};
console.log(fibonacci(10)); // 55

// Memoization bilan
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
};
console.log(fibonacciMemo(10)); // 55