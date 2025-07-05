# JavaScript tilida Algoritmik Masalalar

## Mundarija

1. [Kirish](#kirish)
2. [Oson daraja masalalari](#oson-daraja)
3. [O'rta daraja masalalari](#orta-daraja)
4. [Qiyin daraja masalalari](#qiyin-daraja)
5. [Algoritmik murakkablik](#algoritmik-murakkablik)
6. [Foydali maslahatlar](#foydali-maslahatlar)

---

## Kirish

Bu qo'llanma JavaScript tilida turli darajadagi algoritmik masalalarni yechish usullarini o'z ichiga oladi. Har bir masala uchun:
- Masala tavsifi
- Yechim strategiyasi
- Kod namunasi
- Vaqt va xotira murakkabligi
- Misollar

---

## Oson daraja masalalari

### 1. Massivdagi eng katta sonni topish

**Masala:** Berilgan massivdagi eng katta sonni toping.

**Yechim strategiyasi:** 
Massivni bir marta o'tib, har bir elementni joriy maksimum bilan taqqoslaymiz.

```javascript
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
```

**Murakkablik:** O(n) vaqt, O(1) xotira

### 2. Palindrom tekshirish

**Masala:** Berilgan string palindrom ekanligini tekshiring.

**Yechim strategiyasi:**
Stringni boshi va oxiridan taqqoslab, o'rtaga qarab harakat qilamiz.

```javascript
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
```

**Murakkablik:** O(n) vaqt, O(n) xotira

### 3. Faktorial hisoblash

**Masala:** Berilgan sonning faktorialini hisoblang.

**Yechim strategiyasi:**
Rekursiv yoki iterativ usuldan foydalanish.

```javascript
// Iterativ yechim
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Rekursiv yechim
function factorialRecursive(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Misol
console.log(factorial(5)); // 120
console.log(factorialRecursive(5)); // 120
```

**Murakkablik:** O(n) vaqt, O(1) xotira (iterativ), O(n) xotira (rekursiv)

### 4. Fibonacci ketma-ketligi

**Masala:** Fibonacci ketma-ketligining n-chi elementini toping.

```javascript
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
}

// Rekursiv yechim (sekin)
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Memoization bilan
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Misol
console.log(fibonacci(10)); // 55
console.log(fibonacciMemo(10)); // 55
```

**Murakkablik:** O(n) vaqt, O(1) xotira (iterativ)

---

## O'rta daraja masalalari

### 1. Massivni saralash (Bubble Sort)

**Masala:** Massivni o'sish tartibida saralang.

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    const result = [...arr]; // Asl massivni o'zgartirmaslik uchun
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Elementlarni almashtiramiz
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    return result;
}

// Misol
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
// [11, 12, 22, 25, 34, 64, 90]
```

**Murakkablik:** O(n²) vaqt, O(1) xotira

### 2. Binary Search

**Masala:** Saralangan massivdan elementni toping.

```javascript
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
    
    return -1; // Topilmadi
}

// Misol
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7)); // 3
console.log(binarySearch(sortedArray, 6)); // -1
```

**Murakkablik:** O(log n) vaqt, O(1) xotira

### 3. Anagrams tekshirish

**Masala:** Ikkita string anagram ekanligini tekshiring.

```javascript
function isAnagram(str1, str2) {
    // Uzunliklar teng bo'lishi kerak
    if (str1.length !== str2.length) return false;
    
    // Harflarni hisoblash
    const charCount = {};
    
    // Birinchi stringdagi harflarni hisoblash
    for (const char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Ikkinchi stringdagi harflarni kamaytirish
    for (const char of str2.toLowerCase()) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

// Yoki sodda yechim
function isAnagramSimple(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === 
           str2.toLowerCase().split('').sort().join('');
}

// Misol
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
```

**Murakkablik:** O(n) vaqt, O(1) xotira

### 4. Linked List yaratish va boshqarish

**Masala:** Linked List strukturasini yarating va asosiy operatsiyalarni amalga oshiring.

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // Boshiga element qo'shish
    prepend(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    // Oxiriga element qo'shish
    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    // Element o'chirish
    remove(val) {
        if (!this.head) return false;
        
        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        
        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }
        
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }
        
        return false;
    }
    
    // Qidirish
    find(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) return true;
            current = current.next;
        }
        return false;
    }
    
    // Chop etish
    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        return values;
    }
}

// Misol
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.print()); // [0, 1, 2, 3]
console.log(list.find(2)); // true
list.remove(2);
console.log(list.print()); // [0, 1, 3]
```

---

## Qiyin daraja masalalari

### 1. Quick Sort

**Masala:** Tez saralash algoritmini amalga oshiring.

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    
    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }
    
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// In-place Quick Sort
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSortInPlace(arr, low, pi - 1);
        quickSortInPlace(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Misol
console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); 
// [1, 1, 2, 3, 6, 8, 10]
```

**Murakkablik:** O(n log n) o'rtacha, O(n²) eng yomon holat

### 2. Daraxt struktura (Binary Search Tree)

**Masala:** Binary Search Tree yarating va asosiy operatsiyalarni amalga oshiring.

```javascript
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    // Element qo'shish
    insert(val) {
        this.root = this.insertNode(this.root, val);
    }
    
    insertNode(node, val) {
        if (node === null) {
            return new TreeNode(val);
        }
        
        if (val < node.val) {
            node.left = this.insertNode(node.left, val);
        } else if (val > node.val) {
            node.right = this.insertNode(node.right, val);
        }
        
        return node;
    }
    
    // Qidirish
    search(val) {
        return this.searchNode(this.root, val);
    }
    
    searchNode(node, val) {
        if (node === null) return false;
        
        if (val === node.val) return true;
        if (val < node.val) return this.searchNode(node.left, val);
        return this.searchNode(node.right, val);
    }
    
    // In-order traversal
    inOrder() {
        const result = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }
    
    inOrderTraversal(node, result) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.val);
            this.inOrderTraversal(node.right, result);
        }
    }
    
    // Element o'chirish
    delete(val) {
        this.root = this.deleteNode(this.root, val);
    }
    
    deleteNode(node, val) {
        if (node === null) return null;
        
        if (val < node.val) {
            node.left = this.deleteNode(node.left, val);
        } else if (val > node.val) {
            node.right = this.deleteNode(node.right, val);
        } else {
            // Node topildi
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            
            // Ikki farzandli node
            const minNode = this.findMin(node.right);
            node.val = minNode.val;
            node.right = this.deleteNode(node.right, minNode.val);
        }
        
        return node;
    }
    
    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// Misol
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.inOrder()); // [20, 30, 40, 50, 60, 70, 80]
console.log(bst.search(40)); // true
console.log(bst.search(25)); // false
```

### 3. Dynamic Programming - Longest Common Subsequence

**Masala:** Ikki string orasidagi eng uzun umumiy ketma-ketlikni toping.

```javascript
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // DP jadval yaratish
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Jadvalni to'ldirish
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

// LCS stringini topish
function getLCS(text1, text2) {
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
    
    // LCS stringini qayta qurish
    let lcs = "";
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

// Misol
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(getLCS("abcde", "ace")); // "ace"
```

**Murakkablik:** O(m×n) vaqt va xotira

### 4. Graph algorithms - Depth-First Search (DFS)

**Masala:** Grafda chuqur qidiruv algoritmini amalga oshiring.

```javascript
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    
    // Vertex qo'shish
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    
    // Qirra qo'shish
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // Yo'naltirilmagan graf
    }
    
    // DFS - Rekursiv
    dfsRecursive(startVertex) {
        const visited = new Set();
        const result = [];
        
        const dfsHelper = (vertex) => {
            visited.add(vertex);
            result.push(vertex);
            
            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };
        
        dfsHelper(startVertex);
        return result;
    }
    
    // DFS - Iterativ
    dfsIterative(startVertex) {
        const visited = new Set();
        const result = [];
        const stack = [startVertex];
        
        while (stack.length > 0) {
            const vertex = stack.pop();
            
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                
                const neighbors = this.adjacencyList.get(vertex) || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    // BFS - Kenglik bo'yicha qidiruv
    bfs(startVertex) {
        const visited = new Set();
        const result = [];
        const queue = [startVertex];
        
        visited.add(startVertex);
        
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            
            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        
        return result;
    }
}

// Misol
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("DFS (Recursive):", graph.dfsRecursive("A"));
console.log("DFS (Iterative):", graph.dfsIterative("A"));
console.log("BFS:", graph.bfs("A"));
```

---

## Algoritmik murakkablik

### Vaqt murakkabligi

- **O(1)** - Konstanta: Element olish, qo'shish
- **O(log n)** - Logaritmik: Binary search, balanced tree operatsiyalari
- **O(n)** - Chiziqli: Massivni bir marta o'tish, linear search
- **O(n log n)** - Linearithmik: Samarali saralash (merge sort, heap sort)
- **O(n²)** - Kvadratik: Nested loops, bubble sort
- **O(2^n)** - Eksponensial: Recursive fibonacci, subset generation

### Xotira murakkabligi

- **O(1)** - Konstanta: In-place algoritmlar
- **O(n)** - Chiziqli: Qo'shimcha massiv yaratish
- **O(log n)** - Logaritmik: Rekursiv call stack

### Tanlash mezonlari

1. **Kichik ma'lumotlar uchun:** Sodda algoritmlar yetarli
2. **Katta ma'lumotlar uchun:** Samarali algoritmlar zarur
3. **Xotira cheklovi:** In-place algoritmlarni tanlash
4. **Stabil saralash:** Merge sort, insertion sort
5. **Tezlik:** Quick sort, hash table

---

## Foydali maslahatlar

### 1. Problem yechish strategiyasi

1. **Masalani tushunish:** Kirish va chiqish formatlarini aniqlashtirish
2. **Misollar bilan ishlash:** Kichik misollarni qo'lda yechish
3. **Strategiya tanlash:** Brute force, divide and conquer, dynamic programming
4. **Kod yozish:** Oddiy va tushunarli kod
5. **Test qilish:** Turli holatlarni sinab ko'rish
6. **Optimizatsiya:** Murakkablikni kamaytirish

### 2. Keng tarqalgan naqshlar

**Two Pointers:**
```javascript
function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return null;
}
```

**Sliding Window:**
```javascript
function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    // Birinchi oynani hisoblash
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Oynani siljitish
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

### 3. Debugging maslahatlar

1. **Console.log:** Oraliq natijalarni tekshirish
2. **Kichik misollar:** Sodda holatlarni sinab ko'rish
3. **Edge cases:** Bo'sh massiv, null qiymatlar
4. **Step-by-step:** Har bir qadamni kuzatish

### 4. Kode yozish tamoyillari

1. **Tushunarli nomlar:** Funksiya va o'zgaruvchilar uchun
2. **Kommentarlar:** Murakkab logika uchun
3. **Modulyarlik:** Kichik funksiyalarga ajratish
4. **Error handling:** Xatolik holatlarini ko'rib chiqish

---

## Xulosa

JavaScript tilida algoritmik masalalarni yechish uchun:

1. **Asosiy ma'lumot strukturalarini** (array, object, set, map) yaxshi bilish
2. **Keng tarqalgan algoritmlarni** (saralash, qidiruv) tushunish
3. **Murakkablik tahlilini** o'rganish
4. **Muntazam amaliyot** qilish
5. **Turli yondashuvlarni** sinab ko'rish

Bu qo'llanma sizga JavaScript tilida algoritmik masalalarni yechishda yordam beradi. Har bir masala uchun turli yechimlarni taqqoslang va eng mosini tanlang.

**Foydali havolalar:**
- MDN Web Docs - JavaScript
- LeetCode - Amaliyot masalalari
- HackerRank - Algoritmik musobaqalar
- GeeksforGeeks - Algoritmlar va ma'lumot strukturalari

---

*Bu qo'llanma JavaScript tilida algoritmik masalalarni yechish uchun batafsil yo'riqnoma hisoblanadi.*