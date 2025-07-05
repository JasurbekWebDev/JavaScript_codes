# JavaScript Algoritmik Masalalar - To'liq Qo'llanma

## Mundarija

1. [Kirish](#kirish)
2. [Oson Masalalar](#oson-masalalar)
3. [O'rta Masalalar](#orta-masalalar)
4. [Qiyin Masalalar](#qiyin-masalalar)
5. [Matematik Algoritmlar](#matematik-algoritmlar)
6. [String Algoritmlar](#string-algoritmlar)
7. [Array Algoritmlar](#array-algoritmlar)
8. [Backtracking Algoritmlar](#backtracking-algoritmlar)
9. [Grafik Algoritmlar](#grafik-algoritmlar)
10. [Optimizatsiya Usullari](#optimizatsiya-usullari)

---

## Kirish

Bu qo'llanmada JavaScript tilida algoritmik masalalarni yechish usullari keltirilgan. Har bir masala uchun:
- Muammoning tavsifi
- Strategik yondashuv
- To'liq kod yechimi
- Alternativ yechimlar
- Optimizatsiya usullari
- Murakkablik tahlili

**Maqsad:** Dasturlashda algoritmik fikrlash qobiliyatini rivojlantirish va keng tarqalgan masalalarni yechish ko'nikmalarini o'rgatish.

---

## Oson Masalalar

### 1. Massivdagi Dublikatlarni Topish

**Masala:** Berilgan massivdagi takrorlanuvchi elementlarni aniqlash.

**Strategiya:** Set, Hash Map yoki saralash orqali yechish mumkin.

```javascript
// Yechim 1: Set yordamida
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    
    return Array.from(duplicates);
}

// Yechim 2: Frequency map
function findDuplicatesFreq(arr) {
    const freq = {};
    const duplicates = [];
    
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    for (const num in freq) {
        if (freq[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }
    
    return duplicates;
}

// Yechim 3: Saralangan massiv uchun
function findDuplicatesSorted(arr) {
    const duplicates = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] && 
            duplicates[duplicates.length - 1] !== arr[i]) {
            duplicates.push(arr[i]);
        }
    }
    
    return duplicates;
}

// Test qilish
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 3])); // [2, 3]
console.log(findDuplicatesFreq([1, 1, 2, 2, 3, 4, 4])); // [1, 2, 4]
```

**Murakkablik:** O(n) vaqt, O(n) xotira

### 2. Massivni Aylantirish (Rotate Array)

**Masala:** Massivni k pozitsiyaga o'ngga aylantirish.

```javascript
// Yechim 1: Qo'shimcha massiv
function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n; // k > n bo'lgan holat uchun
    
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = nums[i];
    }
    
    return result;
}

// Yechim 2: In-place (3 marta teskari)
function rotateArrayInPlace(nums, k) {
    const n = nums.length;
    k = k % n;
    
    // Yordamchi funksiya
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    
    // 1. Butun massivni teskari aylantirish
    reverse(nums, 0, n - 1);
    
    // 2. Birinchi k elementni teskari aylantirish
    reverse(nums, 0, k - 1);
    
    // 3. Qolgan elementlarni teskari aylantirish
    reverse(nums, k, n - 1);
    
    return nums;
}

// Yechim 3: Chapga aylantirish
function rotateLeft(nums, k) {
    const n = nums.length;
    k = k % n;
    
    return nums.slice(k).concat(nums.slice(0, k));
}

// Test qilish
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
```

**Murakkablik:** O(n) vaqt, O(1) xotira (in-place)

### 3. Valid Parentheses

**Masala:** Qavs ketma-ketligi to'g'ri ekanligini tekshirish.

```javascript
function isValidParentheses(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Kengaytirilgan versiya
function isValidParenthesesGeneral(s, pairs = ['()', '{}', '[]']) {
    const stack = [];
    const openBrackets = new Set();
    const closeBrackets = new Map();
    
    for (const pair of pairs) {
        openBrackets.add(pair[0]);
        closeBrackets.set(pair[1], pair[0]);
    }
    
    for (const char of s) {
        if (openBrackets.has(char)) {
            stack.push(char);
        } else if (closeBrackets.has(char)) {
            if (stack.length === 0 || stack.pop() !== closeBrackets.get(char)) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Test qilish
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
```

**Murakkablik:** O(n) vaqt, O(n) xotira

### 4. Yetishmayotgan Sonni Topish

**Masala:** 0 dan n gacha bo'lgan ketma-ketlikda yetishmayotgan sonni topish.

```javascript
// Yechim 1: Matematik formula
function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Yechim 2: XOR operatsiyasi
function missingNumberXOR(nums) {
    let xor = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];
    }
    
    return xor;
}

// Yechim 3: Set yordamida
function missingNumberSet(nums) {
    const numSet = new Set(nums);
    
    for (let i = 0; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
}

// Test qilish
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumberXOR([0, 1])); // 2
console.log(missingNumberSet([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
```

**Murakkablik:** O(n) vaqt, O(1) xotira

### 5. Ikki Sonning Yig'indisi

**Masala:** Massivda yig'indisi target ga teng bo'lgan ikki sonni topish.

```javascript
// Yechim 1: Hash Map
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// Yechim 2: Ikki pointer (saralangan massiv uchun)
function twoSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// Test qilish
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumSorted([2, 7, 11, 15], 9)); // [0, 1]
```

**Murakkablik:** O(n) vaqt, O(n) xotira

---

## O'rta Masalalar

### 1. Merge Sort

**Masala:** Bo'lib birlashtirish orqali saralash algoritmini amalga oshirish.

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Qolgan elementlarni qo'shish
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

// In-place merge sort
function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    
    const mid = Math.floor((left + right) / 2);
    mergeSortInPlace(arr, left, mid);
    mergeSortInPlace(arr, mid + 1, right);
    mergeInPlace(arr, left, mid, right);
}

function mergeInPlace(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

// Test qilish
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
```

**Murakkablik:** O(n log n) vaqt, O(n) xotira

### 2. Quick Sort

**Masala:** Tez saralash algoritmi.

```javascript
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

// Randomized Quick Sort
function quickSortRandom(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        [arr[randomIndex], arr[right]] = [arr[right], arr[randomIndex]];
        
        const pivotIndex = partition(arr, left, right);
        quickSortRandom(arr, left, pivotIndex - 1);
        quickSortRandom(arr, pivotIndex + 1, right);
    }
    return arr;
}

// Test qilish
console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
```

**Murakkablik:** O(n log n) o'rtacha, O(n²) eng yomon

### 3. Binary Search

**Masala:** Saralangan massivda elementni qidirish.

```javascript
// Iterativ binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Rekursiv binary search
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Birinchi va oxirgi pozitsiyani topish
function findFirstAndLast(arr, target) {
    function findFirst(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    function findLast(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    return [findFirst(arr, target), findLast(arr, target)];
}

// Test qilish
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
```

**Murakkablik:** O(log n) vaqt, O(1) xotira

### 4. Longest Common Subsequence (LCS)

**Masala:** Ikki stringdagi eng uzun umumiy subsequence ni topish.

```javascript
// LCS uzunligini topish
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

// LCS stringini qaytarish
function findLCS(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // DP jadvalini to'ldirish
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // LCS ni tiklash
    let lcs = '';
    let i = m, j = n;
    
    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs = text1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs;
}

// Test qilish
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(findLCS("abcde", "ace")); // "ace"
```

**Murakkablik:** O(m × n) vaqt, O(m × n) xotira

---

## Qiyin Masalalar

### 1. Knapsack Problem

**Masala:** Berilgan hajmli sumkaga eng qimmat buyumlarni joylashtirish.

```javascript
// 0/1 Knapsack Problem
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

// Tanlangan buyumlarni qaytarish
function knapsackWithItems(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    // Tanlangan buyumlarni topish
    const selectedItems = [];
    let w = capacity;
    for (let i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selectedItems.push(i - 1);
            w -= weights[i - 1];
        }
    }
    
    return {
        maxValue: dp[n][capacity],
        items: selectedItems.reverse()
    };
}

// Test qilish
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;

console.log(knapsack(weights, values, capacity)); // 220
console.log(knapsackWithItems(weights, values, capacity)); 
// { maxValue: 220, items: [1, 2] }
```

**Murakkablik:** O(n × W) vaqt, O(n × W) xotira

### 2. Traveling Salesman Problem (TSP)

**Masala:** Barcha shaharlarni bir marta tashrif qilib eng qisqa yo'lni topish.

```javascript
// Dynamic Programming + Bitmasking
function tspDP(graph) {
    const n = graph.length;
    const dp = Array(1 << n).fill().map(() => Array(n).fill(Infinity));
    
    // Boshlang'ich nuqta
    dp[1][0] = 0;
    
    for (let mask = 0; mask < (1 << n); mask++) {
        for (let u = 0; u < n; u++) {
            if (!(mask & (1 << u))) continue;
            
            for (let v = 0; v < n; v++) {
                if (mask & (1 << v)) continue;
                
                const newMask = mask | (1 << v);
                dp[newMask][v] = Math.min(
                    dp[newMask][v],
                    dp[mask][u] + graph[u][v]
                );
            }
        }
    }
    
    // Oxirgi nuqtadan boshlanishga qaytish
    const finalMask = (1 << n) - 1;
    let result = Infinity;
    
    for (let i = 1; i < n; i++) {
        result = Math.min(result, dp[finalMask][i] + graph[i][0]);
    }
    
    return result;
}

// Brute Force TSP (kichik n uchun)
function tspBruteForce(graph) {
    const n = graph.length;
    const vertices = Array.from({ length: n - 1 }, (_, i) => i + 1);
    
    let minPath = Infinity;
    let bestPath = [];
    
    function permute(arr, start = 0) {
        if (start === arr.length) {
            const currentPath = [0, ...arr, 0];
            const distance = calculateDistance(currentPath, graph);
            if (distance < minPath) {
                minPath = distance;
                bestPath = [...currentPath];
            }
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            permute(arr, start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
    
    permute(vertices);
    return { distance: minPath, path: bestPath };
}

function calculateDistance(path, graph) {
    let distance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        distance += graph[path[i]][path[i + 1]];
    }
    return distance;
}

// Test qilish
const graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

console.log(tspDP(graph)); // 80
console.log(tspBruteForce(graph)); // { distance: 80, path: [0, 1, 3, 2, 0] }
```

**Murakkablik:** O(n² × 2ⁿ) vaqt, O(n × 2ⁿ) xotira

### 3. N-Queens Problem

**Masala:** N×N shaxmat taxtasiga N ta malika qo'yish.

```javascript
function solveNQueens(n) {
    const solutions = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isValid(board, row, col) {
        // Vertikal tekshirish
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Chapga diagonal tekshirish
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // O'ngga diagonal tekshirish
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return solutions;
}

// Optimizatsiya qilingan versiya
function solveNQueensOptimized(n) {
    const solutions = [];
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function backtrack(row) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }
            
            // Malika qo'yish
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            
            backtrack(row + 1);
            
            // Backtrack
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }
    
    backtrack(0);
    return solutions;
}

// Test qilish
console.log(solveNQueens(4));
