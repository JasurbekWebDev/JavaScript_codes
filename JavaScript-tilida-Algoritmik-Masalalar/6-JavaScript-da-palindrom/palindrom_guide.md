# JavaScript da Palindrom Tekshirish - To'liq Qo'llanma

## Palindrom nima?

**Palindrom** - bu oldinga ham, orqaga ham bir xil o'qiladigan so'z, ibora yoki raqamlar ketma-ketligi. Masalan:
- **So'zlar**: "ana", "sos", "non", "radar"
- **Iboralar**: "A man a plan a canal Panama"
- **Raqamlar**: 121, 1221, 12321

## Palindrom nima uchun kerak?

### 1. **Dasturlash mashqlari**
- Algoritmik fikrlashni rivojlantirish
- String manipulyatsiya ko'nikmalarini oshirish
- Rekursiya va iteratsiya tushunchalarini o'rganish

### 2. **Amaliy qo'llanilishi**
- **Parol tekshirish**: Ba'zi tizimlarda maxsus parollar
- **Ma'lumotlar validatsiyasi**: Kredit karta raqamlari, ID raqamlar
- **Biologiya**: DNA ketma-ketliklarini tahlil qilish
- **Kriptografiya**: Maxfiylashtirish algoritmlarida

### 3. **Texnik suhbatlarda**
- Eng keng tarqalgan dasturlash savollari
- Algoritmik tafakkurni baholash
- Kod yozish ko'nikmalarini tekshirish

## JavaScript da Palindrom Tekshirish Usullari

### 1. **Oddiy Usul (Split, Reverse, Join)**

```javascript
function isPalindrome1(str) {
    // String ni kichik harflarga o'tkazish
    const cleanStr = str.toLowerCase();
    
    // Stringni teskari qilish
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Taqqoslash
    return cleanStr === reversedStr;
}

// Test
console.log(isPalindrome1("radar")); // true
console.log(isPalindrome1("hello")); // false
console.log(isPalindrome1("Ana"));   // true
```

### 2. **Ikki Pointer Usuli (Eng Samarali)**

```javascript
function isPalindrome2(str) {
    const cleanStr = str.toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test
console.log(isPalindrome2("racecar")); // true
console.log(isPalindrome2("world"));   // false
```

### 3. **Rekursiv Usul**

```javascript
function isPalindrome3(str) {
    const cleanStr = str.toLowerCase();
    
    // Bazaviy holat
    if (cleanStr.length <= 1) {
        return true;
    }
    
    // Birinchi va oxirgi harfni taqqoslash
    if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) {
        return false;
    }
    
    // Rekursiv chaqirish
    return isPalindrome3(cleanStr.slice(1, -1));
}

// Test
console.log(isPalindrome3("level")); // true
console.log(isPalindrome3("test"));  // false
```

### 4. **For Loop Usuli**

```javascript
function isPalindrome4(str) {
    const cleanStr = str.toLowerCase();
    const length = cleanStr.length;
    
    for (let i = 0; i < length / 2; i++) {
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test
console.log(isPalindrome4("noon")); // true
console.log(isPalindrome4("code")); // false
```

### 5. **Maxsus Belgilarni Tozalash bilan**

```javascript
function isPalindromeAdvanced(str) {
    // Faqat harflar va raqamlarni qoldirish
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test
console.log(isPalindromeAdvanced("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeAdvanced("race a car")); // false
```

## Ishlash Tezligi Taqqoslash

| Usul | Vaqt Murakkabligi | Xotira Murakkabligi | Afzallik |
|------|-------------------|---------------------|----------|
| Split-Reverse | O(n) | O(n) | Oddiy, tushunish oson |
| Ikki Pointer | O(n) | O(1) | Eng samarali |
| Rekursiv | O(n) | O(n) | Elegang, lekin stack overflow xavfi |
| For Loop | O(n) | O(1) | Klassik yondashuv |

## Amaliy Misollar

### 1. **Palindrom So'zlarni Topish**

```javascript
function findPalindromes(words) {
    return words.filter(word => isPalindrome2(word));
}

const words = ["radar", "hello", "level", "world", "noon"];
console.log(findPalindromes(words)); // ["radar", "level", "noon"]
```

### 2. **Eng Uzun Palindrom Substring**

```javascript
function longestPalindrome(str) {
    if (!str || str.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < str.length; i++) {
        let len1 = expandAroundCenter(str, i, i);     // Toq uzunlik
        let len2 = expandAroundCenter(str, i, i + 1); // Juft uzunlik
        let len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return str.substring(start, end + 1);
}

function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

console.log(longestPalindrome("raceacar")); // "racecar"
```

### 3. **Raqamli Palindrom**

```javascript
function isNumberPalindrome(num) {
    const str = num.toString();
    return isPalindrome2(str);
}

console.log(isNumberPalindrome(121));  // true
console.log(isNumberPalindrome(123));  // false
```

## Xato Bilan Ishlash

```javascript
function safePalindromeCheck(input) {
    try {
        // Input tekshirish
        if (typeof input !== 'string' && typeof input !== 'number') {
            throw new Error('Input string yoki raqam bo\'lishi kerak');
        }
        
        const str = input.toString();
        
        if (str.length === 0) {
            return true; // Bo'sh string palindrom deb hisoblanadi
        }
        
        return isPalindrome2(str);
        
    } catch (error) {
        console.error('Xato:', error.message);
        return false;
    }
}

// Test
console.log(safePalindromeCheck("radar")); // true
console.log(safePalindromeCheck(121));     // true
console.log(safePalindromeCheck(null));    // false (xato)
```

## Muhim Eslatmalar

### 1. **Katta va Kichik Harflar**
```javascript
// Noto'g'ri
"Radar" === "radaR" // false

// To'g'ri
"Radar".toLowerCase() === "radar".toLowerCase() // true
```

### 2. **Bo'sh Joylar va Maxsus Belgilar**
```javascript
// Oddiy palindrom
isPalindrome2("race car") // false

// Tozalangan palindrom
isPalindromeAdvanced("race car") // false
isPalindromeAdvanced("A man a plan a canal Panama") // true
```

### 3. **Unicode Belgilar**
```javascript
function isPalindromeUnicode(str) {
    const cleanStr = str.toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '') // Accent belgilerini olib tashlash
                        .replace(/[^a-z0-9]/g, '');
    
    return isPalindrome2(cleanStr);
}
```

## Xulosa

Palindrom tekshirish - bu:
- **Dasturlash ko'nikmalarini oshirish** uchun foydali
- **Turli algoritmik yondashuvlarni** o'rganish imkoniyati
- **Amaliy dasturlash masalalarida** qo'llaniladi
- **Texnik suhbatlarda** tez-tez uchraydi

Eng samarali usul - **ikki pointer usuli** bo'lib, O(n) vaqt va O(1) xotira murakkabligiga ega.

---

*Bu qo'llanma JavaScript da palindrom bilan ishlashning barcha asosiy usullarini o'z ichiga oladi. Har bir usulning o'ziga xos afzalliklari va qo'llanilish sohalari mavjud.*