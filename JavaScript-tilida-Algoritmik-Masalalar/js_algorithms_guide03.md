# JavaScript Algoritmik Masalalar - Qisqacha Qo'llanma

## 1. Kirish

JavaScript dasturlash tilida algoritmik masalalarni yechish uchun asosiy strategiyalar va usullar to'plami. Har bir masala uchun:
- Muammo tavsifi
- Yechish strategiyasi
- Kod namunasi
- Murakkablik tahlili

## 2. Oson Masalalar

### 2.1 Massivdagi Dublikatlarni Topish

```javascript
// Set yordamida
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
```
**Murakkablik:** O(n) vaqt, O(n) xotira

### 2.2 Massivni Aylantirish

```javascript
// In-place (3 marta teskari)
function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n;
    
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    
    return nums;
}
```
**Murakkablik:** O(n) vaqt, O(1) xotira

### 2.3 Valid Parentheses

```javascript
function isValidParentheses(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };
    
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
```
**Murakkablik:** O(n) vaqt, O(n) xotira

### 2.4 Ikki Sonning Yig'indisi

```javascript
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
```
**Murakkablik:** O(n) vaqt, O(n) xotira

## 3. O'rta Masalalar

### 3.1 Merge Sort

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```
**Murakkablik:** O(n log n) vaqt, O(n) xotira

### 3.2 Binary Search

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
    
    return -1;
}
```
**Murakkablik:** O(log n) vaqt, O(1) xotira

### 3.3 Longest Common Subsequence

```javascript
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
```
**Murakkablik:** O(m × n) vaqt, O(m × n) xotira

## 4. Qiyin Masalalar

### 4.1 Knapsack Problem

```javascript
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
```
**Murakkablik:** O(n × W) vaqt, O(n × W) xotira

### 4.2 N-Queens Problem

```javascript
function solveNQueens(n) {
    const solutions = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isValid(board, row, col) {
        // Vertikal tekshirish
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Diagonal tekshirish
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
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
```
**Murakkablik:** O(N!) vaqt, O(N²) xotira

## 5. Matematik Algoritmlar

### 5.1 Fibonacci

```javascript
// Iterativ usul
function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    
    return b;
}

// Memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
```
**Murakkablik:** O(n) vaqt, O(1) xotira

### 5.2 Tub sonlarni topish (Sieve of Eratosthenes)

```javascript
function sieveOfEratosthenes(limit) {
    const primes = Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;
    
    for (let i = 2; i * i <= limit; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primes[j] = false;
            }
        }
    }
    
    return primes.map((isPrime, num) => isPrime ? num : null)
                .filter(num => num !== null);
}
```
**Murakkablik:** O(n log log n) vaqt, O(n) xotira

## 6. String Algoritmlar

### 6.1 String Palindrome Tekshirish

```javascript
function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
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
```
**Murakkablik:** O(n) vaqt, O(1) xotira

### 6.2 Anagram Tekshirish

```javascript
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const count = {};
    
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
}
```
**Murakkablik:** O(n) vaqt, O(k) xotira

## 7. Array Algoritmlar

### 7.1 Maximum Subarray (Kadane's Algorithm)

```javascript
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```
**Murakkablik:** O(n) vaqt, O(1) xotira

### 7.2 Merge Intervals

```javascript
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    return merged;
}
```
**Murakkablik:** O(n log n) vaqt, O(1) xotira

## 8. Backtracking Algoritmlar

### 8.1 Subset Generation

```javascript
function subsets(nums) {
    const result = [];
    
    function backtrack(start, currentSubset) {
        result.push([...currentSubset]);
        
        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}
```
**Murakkablik:** O(2^n) vaqt, O(n) xotira

### 8.2 Permutations

```javascript
function permute(nums) {
    const result = [];
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (const num of nums) {
            if (!current.includes(num)) {
                current.push(num);
                backtrack(current);
                current.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}
```
**Murakkablik:** O(n!) vaqt, O(n) xotira

## 9. Grafik Algoritmlar

### 9.1 Depth-First Search (DFS)

```javascript
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
```
**Murakkablik:** O(V + E) vaqt, O(V) xotira

### 9.2 Breadth-First Search (BFS)

```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node);
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```
**Murakkablik:** O(V + E) vaqt, O(V) xotira

### 9.3 Dijkstra's Algorithm

```javascript
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = [[0, start]];
    
    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDistance, currentNode] = pq.shift();
        
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        
        for (const [neighbor, weight] of graph[currentNode]) {
            const distance = currentDistance + weight;
            
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.push([distance, neighbor]);
            }
        }
    }
    
    return distances;
}
```
**Murakkablik:** O((V + E) log V) vaqt, O(V) xotira

## 10. Optimizatsiya Usullari

### 10.1 Memoization

```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Foydalanish
const fibMemo = memoize(function(n) {
    if (n <= 1) return n;
    return fibMemo(n - 1) + fibMemo(n - 2);
});
```

### 10.2 Two Pointers Technique

```javascript
function twoPointers(arr, target) {
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
    
    return [];
}
```

### 10.3 Sliding Window

```javascript
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    // Birinchi window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Windowni siljitish
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

---

## Xulosa

Ushbu qo'llanma JavaScript dasturlash tilida eng muhim algoritmik masalalarni qamrab oladi. Har bir algoritm uchun:

- **Vaqt murakkabligi** - algoritm ishlash tezligi
- **Xotira murakkabligi** - kerakli xotira miqdori
- **Qo'llanish sohalari** - qaysi masalalar uchun mos
- **Optimizatsiya usullari** - samaradorlikni oshirish yo'llari

Algoritmlarni o'rganishda:
1. Avval muammoni to'liq tushining
2. Oddiy yechimdan boshlang
3. Optimizatsiya qiling
4. Murakkablikni tahlil qiling
5. Testlar yozing

**Eslatma:** Har doim eng oddiy va tushinarli yechimni tanlang, keyin zarurat bo'lsagina optimizatsiya qiling.