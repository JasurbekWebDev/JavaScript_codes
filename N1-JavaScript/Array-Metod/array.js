// some() metodi misoli

// some() metodi massivdagi har bir element uchun berilgan funksiyani chaqiradi va
// agar funksiyadan qaytgan qiymat true bo'lsa, darhol true qaytaradi. Aks holda, false qaytaradi.
function isArray(element, index, array) {
  return element > 5;
}



// Massiv yaratish va some() metodini qo'llash 
function isCreatedArray() {
  // Bu yerda massiv yaratiladi va some() metodi qo'llaniladi.
  let array = [2, 5, 8, 1, 4];
  
  // some() metodi yordamida massivda 5 dan katta element borligini tekshirish
  let value = array.some(isArray);

  // Natijani konsolga chiqarish
  console.log(value); // true

  // Agar massivda 5 dan katta element bo'lmasa
  let array2 = [1, 2, 3, 4, 5];
  let value2 = array2.some(isArray);
  console.log(value2); // false
}

// Funksiyani chaqirish
isCreatedArray();

// Nima uchun some() metodidan foydalanamiz?
// some() metodi massivdagi elementlarning ma'lum bir shartga javob berishini tekshirish uchun qulay.
// Bu metod yordamida biz massivda kerakli shartga mos keladigan element bor-yo'qligini tezda aniqlashimiz mumkin.
// Agar shartga mos keladigan element topilsa, qidiruv to'xtatiladi va true qaytariladi, bu esa samaradorlikni oshiradi.  

// some() metodi ni quyidagi hollarda ishlatish mumkin:
// 1. Foydalanuvchi kiritgan ma'lumotlar orasida ma'lum bir qiymat mavjudligini tekshirish.
// 2. Ma'lumotlar bazasidan olingan yozuvlar orasida ma'lum bir shartga javob beradigan yozuv bor-yo'qligini aniqlash.
// 3. Formadagi maydonlarning to'ldirilganligini tekshirish.
// 4. Ro'yxatdagi elementlarning ma'lum bir xususiyatga ega ekanligini aniqlash.  
// 5. O'yinlarda o'yinchi inventarida ma'lum bir buyum bor-yo'qligini tekshirish.
// 6. Filtrlash operatsiyalarida ma'lum bir shartga javob beradigan elementlar mavjudligini aniqlash.
// 7. Foydalanuvchi ruxsatnomalarini tekshirishda ma'lum bir ruxsatnoma mavjudligini aniqlash.
// 8. Veb-sayt yoki ilova konfiguratsiyasida ma'lum bir sozlama mavjudligini tekshirish.
// 9. Ma'lumotlar to'plamida takroriy elementlar mavjudligini aniqlash.
// 10. Ma'lum bir shartga javob beradigan elementlar mavjudligini tekshirishda ishlatiladi.

// 1. Masala: Foydalanuvchi kiritgan yoshlar ro'yxatida 18 yoshdan katta foydalanuvchi bor-yo'qligini tekshirish.
// 1.1 YeChIM:
function isAdultPresent(ages) {
  return ages.some(age => age >= 18);
}
console.log(isAdultPresent([12, 15, 17, 19, 14])); // true
console.log(isAdultPresent([10, 12, 15, 16])); // false
// 1.1 Izoh: Bu funksiyada some() metodi yordamida yoshlar ro'yxatida 18 yoshdan katta foydalanuvchi bor-yo'qligi tekshiriladi.

// 1.2 YeChIM:
function hasPermission(permissions, requiredPermission) {
  return permissions.some(permission => permission === requiredPermission);
}
console.log(hasPermission(['read', 'write', 'execute'], 'write')); // true
console.log(hasPermission(['read', 'execute'], 'write')); // false
// 1.2 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchi ruxsatnomalari orasida kerakli ruxsatnoma bor-yo'qligi tekshiriladi.

// 1.3 YeChIM:
function containsKeyword(keywords, keyword) {
  return keywords.some(kw => kw.toLowerCase() === keyword.toLowerCase());
}
console.log(containsKeyword(['JavaScript', 'Python', 'Java'], 'python')); // true
console.log(containsKeyword(['HTML', 'CSS', 'Ruby'], 'Java')); // false
// 1.3 Izoh: Bu funksiyada some() metodi yordamida kalit so'zlar ro'yxatida ma'lum bir kalit so'z bor-yo'qligi tekshiriladi.

// 1.4 YeChIM:
function hasEvenNumber(numbers) {
  return numbers.some(num => num % 2 === 0);
}
console.log(hasEvenNumber([1, 3, 5, 7, 8])); // true
console.log(hasEvenNumber([1, 3, 5, 7])); // false
// 1.4 Izoh: Bu funksiyada some() metodi yordamida raqamlar ro'yxatida juft son bor-yo'qligi tekshiriladi.

// 1.5 YeChIM:
function hasExpiredItems(items) {
  const currentDate = new Date();
  return items.some(item => new Date(item.expiryDate) < currentDate);
} 
console.log(hasExpiredItems([{name: 'Milk', expiryDate: '2023-01-01'}, {name: 'Bread', expiryDate: '2024-12-31'}])); // true
console.log(hasExpiredItems([{name: 'Eggs', expiryDate: '2024-12-31'}, {name: 'Butter', expiryDate: '2025-01-01'}])); // false
// 1.5 Izoh: Bu funksiyada some() metodi yordamida mahsulotlar ro'yxatida muddati o'tgan mahsulot bor-yo'qligi tekshiriladi.  

// 1.6 YeChIM:
function hasLongWords(words) {
  return words.some(word => word.length > 7);
}
console.log(hasLongWords(['apple', 'banana', 'strawberry', 'kiwi'])); // true
console.log(hasLongWords(['cat', 'dog', 'fish'])); // false
// 1.6 Izoh: Bu funksiyada some() metodi yordamida so'zlar ro'yxatida uzun so'zlar bor-yo'qligi tekshiriladi.

// 1.7 YeChIM:
function hasNegativeNumbers(numbers) {
  return numbers.some(num => num < 0);
} 
console.log(hasNegativeNumbers([3, 5, -2, 8])); // true
console.log(hasNegativeNumbers([1, 2, 3, 4])); // false
// 1.7 Izoh: Bu funksiyada some() metodi yordamida raqamlar ro'yxatida manfiy sonlar bor-yo'qligi tekshiriladi.

// 1.8 YeChIM:
function hasVowels(words) {
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
  return words.some(word => 
    word.split('').some(char => vowels.includes(char.toLowerCase()))
  );
}
console.log(hasVowels(['sky', 'fly', 'try'])); // false
console.log(hasVowels(['apple', 'banana', 'cherry'])); // true
// 1.8 Izoh: Bu funksiyada some() metodi yordamida so'zlar ro'yxatida unli harflar bor-yo'qligi tekshiriladi.

// 1.9 YeChIM:
function hasPrimeNumbers(numbers) {
  function isPrime(num) { 
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    } 
    return true;
  }
  return numbers.some(isPrime);
}
console.log(hasPrimeNumbers([4, 6, 8, 9, 10])); // false
console.log(hasPrimeNumbers([4, 5, 6, 8])); // true
// 1.9 Izoh: Bu funksiyada some() metodi yordamida raqamlar ro'yxatida tub sonlar bor-yo'qligi tekshiriladi.

// 1.10 YeChIM:
function hasUpperCaseWords(words) {
  return words.some(word => /[A-Z]/.test(word));
}
console.log(hasUpperCaseWords(['hello', 'world', 'JavaScript'])); // true
console.log(hasUpperCaseWords(['hello', 'world', 'javascript'])); // false
// 1.10 Izoh: Bu funksiyada some() metodi yordamida so'zlar ro'yxatida katta harflar bor-yo'qligi tekshiriladi.

// 1.11 YeChIM:
function hasSpecialCharacters(strings) {
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  return strings.some(str => specialCharPattern.test(str));
}
console.log(hasSpecialCharacters(['hello', 'world!', 'test'])); // true
console.log(hasSpecialCharacters(['hello', 'world', 'test'])); // false
// 1.11 Izoh: Bu funksiyada some() metodi yordamida matnlar ro'yxatida maxsus belgilar bor-yo'qligi tekshiriladi.

// 1.12 YeChIM:
function hasWhitespace(strings) {
  return strings.some(str => /\s/.test(str));
}
console.log(hasWhitespace(['hello', 'world', 'test'])); // false
console.log(hasWhitespace(['hello', 'world test', 'example'])); // true
// 1.12 Izoh: Bu funksiyada some() metodi yordamida matnlar ro'yxatida bo'sh joylar bor-yo'qligi tekshiriladi.

// 1.13 YeChIM:
function hasDuplicateElements(array) {
  return array.some((element, index) => array.indexOf(element) !== index);
}
console.log(hasDuplicateElements([1, 2, 3, 4, 5])); // false
console.log(hasDuplicateElements([1, 2, 3, 4, 5, 3])); // true
// 1.13 Izoh: Bu funksiyada some() metodi yordamida massivda takroriy elementlar bor-yo'qligi tekshiriladi.

// 1.14 YeChIM:
function hasLongSentences(sentences) {
  return sentences.some(sentence => sentence.split(' ').length > 10);
}
console.log(hasLongSentences(['This is a short sentence.', 'This sentence is definitely way too long because it contains more than ten words.'])); // true
console.log(hasLongSentences(['Short sentence.', 'Another short one.'])); // false
// 1.14 Izoh: Bu funksiyada some() metodi yordamida gaplar ro'yxatida uzun gaplar bor-yo'qligi tekshiriladi.

// 1.15 YeChIM:
function hasDecimalNumbers(numbers) {
  return numbers.some(num => !Number.isInteger(num));
}
console.log(hasDecimalNumbers([1, 2, 3.5, 4])); // true
console.log(hasDecimalNumbers([1, 2, 3, 4])); // false
// 1.15 Izoh: Bu funksiyada some() metodi yordamida raqamlar ro'yxatida o'nlik sonlar bor-yo'qligi tekshiriladi.
// 1.16 YeChIM:
function hasWeekendDays(dates) {
  return dates.some(dateStr => {
    const date = new Date(dateStr);
    const day = date.getDay();
    return day === 0 || day === 6; // Yakshanba yoki Shanba
  });
}
console.log(hasWeekendDays(['2024-06-10', '2024-06-15'])); // true
console.log(hasWeekendDays(['2024-06-10', '2024-06-12'])); // false
// 1.16 Izoh: Bu funksiyada some() metodi yordamida sanalar ro'yxatida dam olish kunlari bor-yo'qligi tekshiriladi. 

// 1.17 YeChIM:
function hasLongNames(names) {
  return names.some(name => name.length > 12);
}
console.log(hasLongNames(['Alexander', 'Elizabeth', 'Christopher'])); // true
console.log(hasLongNames(['Anna', 'Bob', 'Cathy'])); // false
// 1.17 Izoh: Bu funksiyada some() metodi yordamida ism ro'yxatida uzun ismlar bor-yo'qligi tekshiriladi.

// 1.18 YeChIM:
function hasLowStockProducts(products) {
  return products.some(product => product.stock < 5);
} 
console.log(hasLowStockProducts([{name: 'Laptop', stock: 10}, {name: 'Mouse', stock: 3}])); // true
console.log(hasLowStockProducts([{name: 'Keyboard', stock: 15}, {name: 'Monitor', stock: 8}])); // false
// 1.18 Izoh: Bu funksiyada some() metodi yordamida mahsulotlar ro'yxatida zaxirasi kam bo'lgan mahsulotlar bor-yo'qligi tekshiriladi.
// 1.19 YeChIM:
function hasHighRatings(items) {
  return items.some(item => item.rating >= 4.5);
}
console.log(hasHighRatings([{name: 'Product A', rating: 4.2}, {name: 'Product B', rating: 4.7}])); // true
console.log(hasHighRatings([{name: 'Product C', rating: 3.8}, {name: 'Product D', rating: 4.0}])); // false
// 1.19 Izoh: Bu funksiyada some() metodi yordamida elementlar ro'yxatida yuqori reytingga ega bo'lgan elementlar bor-yo'qligi tekshiriladi.
// 1.20 YeChIM:
function hasRecentPosts(posts) {
  const currentDate = new Date(); 
  return posts.some(post => {
    const postDate = new Date(post.date);
    const timeDiff = currentDate - postDate;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff <= 7; // So'nggi 7 kun ichida
  });
}
console.log(hasRecentPosts([{title: 'Old Post', date: '2024-05-01'}, {title: 'New Post', date: '2024-06-08'}])); // true
console.log(hasRecentPosts([{title: 'Older Post', date: '2024-05-20'}, {title: 'Oldest Post', date: '2024-05-15'}])); // false
// 1.20 Izoh: Bu funksiyada some() metodi yordamida postlar ro'yxatida yaqinda joylashtirilgan postlar bor-yo'qligi tekshiriladi. 

// 1.21 YeChIM:
function hasActiveUsers(users) {
  return users.some(user => user.isActive);
}
console.log(hasActiveUsers([{name: 'Alice', isActive: false}, {name: 'Bob', isActive: true}])); // true
console.log(hasActiveUsers([{name: 'Charlie', isActive: false}, {name: 'David', isActive: false}])); // false
// 1.21 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchilar ro'yxatida faol foydalanuvchilar bor-yo'qligi tekshiriladi.
// 1.22 YeChIM:
function hasCompletedTasks(tasks) {
  return tasks.some(task => task.completed);
}
console.log(hasCompletedTasks([{title: 'Task 1', completed: false}, {title: 'Task 2', completed: true}])); // true
console.log(hasCompletedTasks([{title: 'Task 3', completed: false}, {title: 'Task 4', completed: false}])); // false
// 1.22 Izoh: Bu funksiyada some() metodi yordamida vazifalar ro'yxatida bajarilgan vazifalar bor-yo'qligi tekshiriladi.
// 1.23 YeChIM:
function hasSubscribedUsers(users) {
  return users.some(user => user.isSubscribed);
} 
console.log(hasSubscribedUsers([{name: 'Eve', isSubscribed: true}, {name: 'Frank', isSubscribed: false}])); // true
console.log(hasSubscribedUsers([{name: 'Grace', isSubscribed: false}, {name: 'Heidi', isSubscribed: false}])); // false
// 1.23 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchilar ro'yxatida obuna bo'lgan foydalanuvchilar bor-yo'qligi tekshiriladi.

// 1.24 YeChIM:
function hasOverdueBooks(books) {
  const currentDate = new Date();
  return books.some(book => new Date(book.dueDate) < currentDate);
}
console.log(hasOverdueBooks([{title: 'Book A', dueDate: '2024-05-01'}, {title: 'Book B', dueDate: '2024-06-15'}])); // true
console.log(hasOverdueBooks([{title: 'Book C', dueDate: '2024-06-20'}, {title: 'Book D', dueDate: '2024-07-01'}])); // false
// 1.24 Izoh: Bu funksiyada some() metodi yordamida kitoblar ro'yxatida muddati o'tgan kitoblar bor-yo'qligi tekshiriladi.

// 1.25 YeChIM:
function hasFeaturedItems(items) {
  return items.some(item => item.isFeatured);
}
console.log(hasFeaturedItems([{name: 'Item 1', isFeatured: false}, {name: 'Item 2', isFeatured: true}])); // true
console.log(hasFeaturedItems([{name: 'Item 3', isFeatured: false}, {name: 'Item 4', isFeatured: false}])); // false
// 1.25 Izoh: Bu funksiyada some() metodi yordamida elementlar ro'yxatida tavsiya etilgan elementlar bor-yo'qligi tekshiriladi.

// 1.26 YeChIM:
function hasHighValueOrders(orders) {
  return orders.some(order => order.totalAmount > 1000);
} 
console.log(hasHighValueOrders([{orderId: 1, totalAmount: 500}, {orderId: 2, totalAmount: 1500}])); // true
console.log(hasHighValueOrders([{orderId: 3, totalAmount: 200}, {orderId: 4, totalAmount: 800}])); // false
// 1.26 Izoh: Bu funksiyada some() metodi yordamida buyurtmalar ro'yxatida yuqori qiymatli buyurtmalar bor-yo'qligi tekshiriladi. 
// 1.27 YeChIM:
function hasInternationalUsers(users) {
  return users.some(user => user.country !== 'USA');
}
console.log(hasInternationalUsers([{name: 'Ivan', country: 'USA'}, {name: 'Olga', country: 'Canada'}])); // true
console.log(hasInternationalUsers([{name: 'John', country: 'USA'}, {name: 'Mike', country: 'USA'}])); // false
// 1.27 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchilar ro'yxatida xalqaro foydalanuvchilar bor-yo'qligi tekshiriladi.
// 1.28 YeChIM:
function hasDiscountedProducts(products) {
  return products.some(product => product.discount > 0);
}
console.log(hasDiscountedProducts([{name: 'Product A', discount: 0}, {name: 'Product B', discount: 10}])); // true
console.log(hasDiscountedProducts([{name: 'Product C', discount: 0}, {name: 'Product D', discount: 0}])); // false
// 1.28 Izoh: Bu funksiyada some() metodi yordamida mahsulotlar ro'yxatida chegirmaga ega bo'lgan mahsulotlar bor-yo'qligi tekshiriladi.
// 1.29 YeChIM:
function hasActiveSubscriptions(subscriptions) {
  return subscriptions.some(subscription => subscription.isActive);
}
console.log(hasActiveSubscriptions([{user: 'User1', isActive: false}, {user: 'User2', isActive: true}])); // true
console.log(hasActiveSubscriptions([{user: 'User3', isActive: false}, {user: 'User4', isActive: false}])); // false
// 1.29 Izoh: Bu funksiyada some() metodi yordamida obunalar ro'yxatida faol obunalar bor-yo'qligi tekshiriladi.
// 1.30 YeChIM:
function hasHighSpeedConnections(connections) {
  return connections.some(connection => connection.speedMbps > 100);
}
console.log(hasHighSpeedConnections([{type: 'Fiber', speedMbps: 150}, {type: 'DSL', speedMbps: 50}])); // true
console.log(hasHighSpeedConnections([{type: 'Cable', speedMbps: 80}, {type: 'DSL', speedMbps: 50}])); // false
// 1.30 Izoh: Bu funksiyada some() metodi yordamida internet ulanishlari ro'yxatida yuqori tezlikdagi ulanishlar bor-yo'qligi tekshiriladi. 

// 1.31 YeChIM:
function hasEcoFriendlyProducts(products) {
  return products.some(product => product.isEcoFriendly);
}
console.log(hasEcoFriendlyProducts([{name: 'Product A', isEcoFriendly: false}, {name: 'Product B', isEcoFriendly: true}])); // true
console.log(hasEcoFriendlyProducts([{name: 'Product C', isEcoFriendly: false}, {name: 'Product D', isEcoFriendly: false}])); // false
// 1.31 Izoh: Bu funksiyada some() metodi yordamida mahsulotlar ro'yxatida ekologik toza mahsulotlar bor-yo'qligi tekshiriladi.

// 1.32 YeChIM:
function hasVerifiedAccounts(accounts) {
  return accounts.some(account => account.isVerified);
}
console.log(hasVerifiedAccounts([{username: 'user1', isVerified: false}, {username: 'user2', isVerified: true}])); // true
console.log(hasVerifiedAccounts([{username: 'user3', isVerified: false}, {username: 'user4', isVerified: false}])); // false
// 1.32 Izoh: Bu funksiyada some() metodi yordamida hisoblar ro'yxatida tasdiqlangan hisoblar bor-yo'qligi tekshiriladi.

// 1.33 YeChIM:
function hasMultimediaContent(contents) {
  return contents.some(content => content.type === 'video' || content.type === 'audio');
} 
console.log(hasMultimediaContent([{title: 'Article 1', type: 'text'}, {title: 'Video 1', type: 'video'}])); // true
console.log(hasMultimediaContent([{title: 'Article 2', type: 'text'}, {title: 'Image 1', type: 'image'}])); // false
// 1.33 Izoh: Bu funksiyada some() metodi yordamida kontentlar ro'yxatida multimedia kontenti bor-yo'qligi tekshiriladi.

// 1.34 YeChIM:
function hasHighAltitudeLocations(locations) {
  return locations.some(location => location.altitudeMeters > 2000);
}
console.log(hasHighAltitudeLocations([{name: 'City A', altitudeMeters: 1500}, {name: 'City B', altitudeMeters: 2500}])); // true
console.log(hasHighAltitudeLocations([{name: 'City C', altitudeMeters: 1000}, {name: 'City D', altitudeMeters: 1800}])); // false
// 1.34 Izoh: Bu funksiyada some() metodi yordamida joylar ro'yxatida yuqori balandlikdagi joylar bor-yo'qligi tekshiriladi.
// 1.35 YeChIM:
function hasFrequentTravelers(travelers) {
  return travelers.some(traveler => traveler.tripsThisYear > 5);
}
console.log(hasFrequentTravelers([{name: 'Alice', tripsThisYear: 3}, {name: 'Bob', tripsThisYear: 7}])); // true
console.log(hasFrequentTravelers([{name: 'Charlie', tripsThisYear: 2}, {name: 'David', tripsThisYear: 4}])); // false
// 1.35 Izoh: Bu funksiyada some() metodi yordamida sayohatchilar ro'yxatida yil davomida ko'p sayohat qilgan sayohatchilar bor-yo'qligi tekshiriladi.

// 1.36 YeChIM:
function hasLargeFiles(files) {
  return files.some(file => file.sizeMB > 100);
}
console.log(hasLargeFiles([{name: 'file1.txt', sizeMB: 50}, {name: 'file2.zip', sizeMB: 150}])); // true
console.log(hasLargeFiles([{name: 'file3.doc', sizeMB: 20}, {name: 'file4.pdf', sizeMB: 80}])); // false
// 1.36 Izoh: Bu funksiyada some() metodi yordamida fayllar ro'yxatida katta hajmdagi fayllar bor-yo'qligi tekshiriladi.

// 1.37 YeChIM:
function hasActivePromotions(promotions) {
  const currentDate = new Date();
  return promotions.some(promo => new Date(promo.endDate) > currentDate);
}
console.log(hasActivePromotions([{name: 'Promo A', endDate: '2024-05-01'}, {name: 'Promo B', endDate: '2024-12-31'}])); // true
console.log(hasActivePromotions([{name: 'Promo C', endDate: '2024-01-01'}, {name: 'Promo D', endDate: '2024-03-01'}])); // false
// 1.37 Izoh: Bu funksiyada some() metodi yordamida aksiyalar ro'yxatida faol aksiyalar bor-yo'qligi tekshiriladi.

// 1.38 YeChIM:
function hasHighCalorieMeals(meals) {
  return meals.some(meal => meal.calories > 800);
} 
console.log(hasHighCalorieMeals([{name: 'Salad', calories: 300}, {name: 'Burger', calories: 900}])); // true
console.log(hasHighCalorieMeals([{name: 'Soup', calories: 400}, {name: 'Sandwich', calories: 600}])); // false
// 1.38 Izoh: Bu funksiyada some() metodi yordamida ovqatlar ro'yxatida yuqori kaloriyali ovqatlar bor-yo'qligi tekshiriladi.

// 1.39 YeChIM:
function hasExperiencedEmployees(employees) {
  return employees.some(employee => employee.yearsOfExperience > 10);
}
console.log(hasExperiencedEmployees([{name: 'John', yearsOfExperience: 5}, {name: 'Jane', yearsOfExperience: 12}])); // true
console.log(hasExperiencedEmployees([{name: 'Mike', yearsOfExperience: 3}, {name: 'Sara', yearsOfExperience: 7}])); // false
// 1.39 Izoh: Bu funksiyada some() metodi yordamida xodimlar ro'yxatida ko'p tajribaga ega bo'lgan xodimlar bor-yo'qligi tekshiriladi.

// 1.40 YeChIM:
function hasHighResolutionImages(images) {
  return images.some(image => image.width >= 1920 && image.height >= 1080);
}
console.log(hasHighResolutionImages([{name: 'img1.jpg', width: 1280, height: 720}, {name: 'img2.png', width: 2560, height: 1440}])); // true
console.log(hasHighResolutionImages([{name: 'img3.jpg', width: 800, height: 600}, {name: 'img4.png', width: 1024, height: 768}])); // false
// 1.40 Izoh: Bu funksiyada some() metodi yordamida rasmalar ro'yxatida yuqori aniqlikdagi rasmlar bor-yo'qligi tekshiriladi.

// 1.41 YeChIM:
function hasPopularArticles(articles) {
  return articles.some(article => article.views > 10000);
}
console.log(hasPopularArticles([{title: 'Article 1', views: 5000}, {title: 'Article 2', views: 15000}])); // true
console.log(hasPopularArticles([{title: 'Article 3', views: 3000}, {title: 'Article 4', views: 8000}])); // false
// 1.41 Izoh: Bu funksiyada some() metodi yordamida maqolalar ro'yxatida mashhur maqolalar bor-yo'qligi tekshiriladi.

// 1.42 YeChIM:
function hasDiverseGenres(books) {
  const genres = new Set();
  books.forEach(book => genres.add(book.genre));
  return genres.size > 3;
}
console.log(hasDiverseGenres([{title: 'Book A', genre: 'Fiction'}, {title: 'Book B', genre: 'Science'}, {title: 'Book C', genre: 'History'}, {title: 'Book D', genre: 'Fantasy'}])); // true
console.log(hasDiverseGenres([{title: 'Book E', genre: 'Fiction'}, {title: 'Book F', genre: 'Fiction'}, {title: 'Book G', genre: 'Science'}])); // false
// 1.42 Izoh: Bu funksiyada some() metodi yordamida kitoblar ro'yxatida turli janrlarga ega kitoblar bor-yo'qligi tekshiriladi.

// 1.43 YeChIM:
function hasActiveDevices(devices) {
  return devices.some(device => device.isOnline);
}
console.log(hasActiveDevices([{name: 'Device 1', isOnline: false}, {name: 'Device 2', isOnline: true}])); // true
console.log(hasActiveDevices([{name: 'Device 3', isOnline: false}, {name: 'Device 4', isOnline: false}])); // false
// 1.43 Izoh: Bu funksiyada some() metodi yordamida qurilmalar ro'yxatida faol qurilmalar bor-yo'qligi tekshiriladi.

// 1.44 YeChIM:
function hasHighPerformanceCars(cars) {
  return cars.some(car => car.horsepower > 400);
}
console.log(hasHighPerformanceCars([{model: 'Car A', horsepower: 350}, {model: 'Car B', horsepower: 450}])); // true
console.log(hasHighPerformanceCars([{model: 'Car C', horsepower: 300}, {model: 'Car D', horsepower: 380}])); // false
// 1.44 Izoh: Bu funksiyada some() metodi yordamida avtomobillar ro'yxatida yuqori unumdorlikka ega avtomobillar bor-yo'qligi tekshiriladi.

// 1.45 YeChIM:
function hasLuxuryHotels(hotels) {
  return hotels.some(hotel => hotel.stars === 5);
}
console.log(hasLuxuryHotels([{name: 'Hotel A', stars: 4}, {name: 'Hotel B', stars: 5}])); // true
console.log(hasLuxuryHotels([{name: 'Hotel C', stars: 3}, {name: 'Hotel D', stars: 4}])); // false
// 1.45 Izoh: Bu funksiyada some() metodi yordamida mehmonxonalar ro'yxatida hashamatli mehmonxonalar bor-yo'qligi tekshiriladi.

// 1.46 YeChIM:
function hasCuttingEdgeTechnologies(products) {
  const cuttingEdgeTechs = ['AI', 'Blockchain', 'Quantum Computing', '5G']; 
  return products.some(product => 
    cuttingEdgeTechs.some(tech => product.technologies.includes(tech))
  );
}
console.log(hasCuttingEdgeTechnologies([{name: 'Product A', technologies: ['AI', 'Cloud']}, {name: 'Product B', technologies: ['IoT']} ])); // true
console.log(hasCuttingEdgeTechnologies([{name: 'Product C', technologies: ['Cloud', 'Big Data']}, {name: 'Product D', technologies: ['IoT']} ])); // false
// 1.46 Izoh: Bu funksiyada some() metodi yordamida mahsulotlar ro'yxatida ilg'or texnologiyalarga ega mahsulotlar bor-yo'qligi tekshiriladi.

// 1.47 YeChIM:
function hasHealthyRecipes(recipes) {
  return recipes.some(recipe => recipe.calories < 300 && recipe.fatGrams < 10);
}
console.log(hasHealthyRecipes([{name: 'Recipe A', calories: 250, fatGrams: 8}, {name: 'Recipe B', calories: 400, fatGrams: 15}])); // true
console.log(hasHealthyRecipes([{name: 'Recipe C', calories: 350, fatGrams: 12}, {name: 'Recipe D', calories: 450, fatGrams: 20}])); // false
// 1.47 Izoh: Bu funksiyada some() metodi yordamida retseptlar ro'yxatida sog'lom retseptlar bor-yo'qligi tekshiriladi.

// 1.48 YeChIM:
function hasScenicDestinations(destinations) {
  return destinations.some(destination => destination.rating >= 4.5 && destination.natureSpots > 5);
}
console.log(hasScenicDestinations([{name: 'Destination A', rating: 4.6, natureSpots: 7}, {name: 'Destination B', rating: 4.2, natureSpots: 3}])); // true
console.log(hasScenicDestinations([{name: 'Destination C', rating: 4.0, natureSpots: 4}, {name: 'Destination D', rating: 4.3, natureSpots: 2}])); // false
// 1.48 Izoh: Bu funksiyada some() metodi yordamida manzillar ro'yxatida manzarali manzillar bor-yo'qligi tekshiriladi.

// 1.49 YeChIM:
function hasCuttingEdgeGadgets(gadgets) {
  const cuttingEdgeFeatures = ['AR', 'VR', 'AI Integration', '5G Support'];
  return gadgets.some(gadget => 
    cuttingEdgeFeatures.some(feature => gadget.features.includes(feature))
  );
} 
console.log(hasCuttingEdgeGadgets([{name: 'Gadget A', features: ['AR', 'Bluetooth']}, {name: 'Gadget B', features: ['WiFi']} ])); // true
console.log(hasCuttingEdgeGadgets([{name: 'Gadget C', features: ['Bluetooth', 'WiFi']}, {name: 'Gadget D', features: ['NFC']} ])); // false
// 1.49 Izoh: Bu funksiyada some() metodi yordamida gadjetlar ro'yxatida ilg'or xususiyatlarga ega gadjetlar bor-yo'qligi tekshiriladi.

// 1.50 YeChIM:
function hasSustainableBrands(brands) {
  return brands.some(brand => brand.isSustainable);
}
console.log(hasSustainableBrands([{name: 'Brand A', isSustainable: false}, {name: 'Brand B', isSustainable: true}])); // true
console.log(hasSustainableBrands([{name: 'Brand C', isSustainable: false}, {name: 'Brand D', isSustainable: false}])); // false
// 1.50 Izoh: Bu funksiyada some() metodi yordamida brendlar ro'yxatida barqaror brendlar bor-yo'qligi tekshiriladi.

// 2. Masala: Ma'lumotlar bazasidan olingan yozuvlar orasida ma'lum bir shartga javob beradigan yozuv bor-yo'qligini aniqlash.
// 2.1 YeChIM:
function hasActiveRecords(records) {
  return records.some(record => record.status === 'active');
}
console.log(hasActiveRecords([{id: 1, status: 'inactive'}, {id: 2, status: 'active'}])); // true
console.log(hasActiveRecords([{id: 3, status: 'inactive'}, {id: 4, status: 'inactive'}])); // false
// 2.1 Izoh: Bu funksiyada some() metodi yordamida yozuvlar ro'yxatida faol yozuvlar bor-yo'qligi tekshiriladi.

// 2.2 YeChIM:
function hasRecentLogins(users) {
  const currentDate = new Date();
  return users.some(user => {
    const lastLoginDate = new Date(user.lastLogin);
    const timeDiff = currentDate - lastLoginDate;
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff <= 30; // So'nggi 30 kun ichida
  });
}
console.log(hasRecentLogins([{username: 'user1', lastLogin: '2024-05-15'}, {username: 'user2', lastLogin: '2024-06-05'}])); // true
console.log(hasRecentLogins([{username: 'user3', lastLogin: '2024-03-10'}, {username: 'user4', lastLogin: '2024-04-20'}])); // false
// 2.2 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchilar ro'yxatida yaqinda tizimga kirgan foydalanuvchilar bor-yo'qligi tekshiriladi.

// 2.3 YeChIM:
function hasPendingApprovals(items) {
  return items.some(item => item.approvalStatus === 'pending');
} 
console.log(hasPendingApprovals([{id: 1, approvalStatus: 'approved'}, {id: 2, approvalStatus: 'pending'}])); // true
console.log(hasPendingApprovals([{id: 3, approvalStatus: 'approved'}, {id: 4, approvalStatus: 'rejected'}])); // false
// 2.3 Izoh: Bu funksiyada some() metodi yordamida elementlar ro'yxatida tasdiqlash kutayotgan elementlar bor-yo'qligi tekshiriladi.

// 2.4 YeChIM:
function hasHighPriorityTasks(tasks) {
  return tasks.some(task => task.priority === 'high');
}
console.log(hasHighPriorityTasks([{title: 'Task 1', priority: 'medium'}, {title: 'Task 2', priority: 'high'}])); // true
console.log(hasHighPriorityTasks([{title: 'Task 3', priority: 'low'}, {title: 'Task 4', priority: 'medium'}])); // false
// 2.4 Izoh: Bu funksiyada some() metodi yordamida vazifalar ro'yxatida yuqori ustuvorlikka ega vazifalar bor-yo'qligi tekshiriladi.

// 2.5 YeChIM:
function hasExpiredSessions(sessions) {
  const currentDate = new Date();
  return sessions.some(session => new Date(session.expiryDate) < currentDate);
}
console.log(hasExpiredSessions([{sessionId: 'abc', expiryDate: '2024-05-01'}, {sessionId: 'def', expiryDate: '2024-12-31'}])); // true
console.log(hasExpiredSessions([{sessionId: 'ghi', expiryDate: '2024-12-31'}, {sessionId: 'jkl', expiryDate: '2025-01-01'}])); // false
// 2.5 Izoh: Bu funksiyada some() metodi yordamida sessiyalar ro'yxatida muddati o'tgan sessiyalar bor-yo'qligi tekshiriladi.

// 2.6 YeChIM:
function hasFlaggedComments(comments) {
  return comments.some(comment => comment.isFlagged);
}
console.log(hasFlaggedComments([{id: 1, isFlagged: false}, {id: 2, isFlagged: true}])); // true
console.log(hasFlaggedComments([{id: 3, isFlagged: false}, {id: 4, isFlagged: false}])); // false
// 2.6 Izoh: Bu funksiyada some() metodi yordamida izohlar ro'yxatida belgilangan izohlar bor-yo'qligi tekshiriladi.

// 2.7 YeChIM:
function hasUnverifiedEmails(users) {
  return users.some(user => !user.isEmailVerified);
}
console.log(hasUnverifiedEmails([{username: 'user1', isEmailVerified: true}, {username: 'user2', isEmailVerified: false}])); // true
console.log(hasUnverifiedEmails([{username: 'user3', isEmailVerified: true}, {username: 'user4', isEmailVerified: true}])); // false
// 2.7 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchilar ro'yxatida tasdiqlanmagan elektron pochta manzillari bor-yo'qligi tekshiriladi.

// 2.8 YeChIM:
function hasOverdueInvoices(invoices) {
  const currentDate = new Date();
  return invoices.some(invoice => new Date(invoice.dueDate) < currentDate && !invoice.isPaid);
}
console.log(hasOverdueInvoices([{invoiceId: 1, dueDate: '2024-05-01', isPaid: false}, {invoiceId: 2, dueDate: '2024-12-31', isPaid: true}])); // true
console.log(hasOverdueInvoices([{invoiceId: 3, dueDate: '2024-12-31', isPaid: true}, {invoiceId: 4, dueDate: '2025-01-01', isPaid: false}])); // false
// 2.8 Izoh: Bu funksiyada some() metodi yordamida hisob-fakturalar ro'yxatida muddati o'tgan va to'lanmagan hisob-fakturalar bor-yo'qligi tekshiriladi.

// 2.9 YeChIM:
function hasLowBalanceAccounts(accounts) {
  return accounts.some(account => account.balance < 100);
} 
console.log(hasLowBalanceAccounts([{accountId: 1, balance: 150}, {accountId: 2, balance: 50}])); // true
console.log(hasLowBalanceAccounts([{accountId: 3, balance: 200}, {accountId: 4, balance: 300}])); // false
// 2.9 Izoh: Bu funksiyada some() metodi yordamida hisoblar ro'yxatida balansi past bo'lgan hisoblar bor-yo'qligi tekshiriladi.

// 2.10 YeChIM:
function hasInactiveSubscriptions(subscriptions) {
  return subscriptions.some(subscription => !subscription.isActive);
}
console.log(hasInactiveSubscriptions([{userId: 1, isActive: true}, {userId: 2, isActive: false}])); // true
console.log(hasInactiveSubscriptions([{userId: 3, isActive: true}, {userId: 4, isActive: true}])); // false
// 2.10 Izoh: Bu funksiyada some() metodi yordamida obunalar ro'yxatida faol bo'lmagan obunalar bor-yo'qligi tekshiriladi.

// 2.11 YeChIM:
function hasHighValueCustomers(customers) {
  return customers.some(customer => customer.totalSpent > 5000);
}
console.log(hasHighValueCustomers([{customerId: 1, totalSpent: 3000}, {customerId: 2, totalSpent: 7000}])); // true
console.log(hasHighValueCustomers([{customerId: 3, totalSpent: 2000}, {customerId: 4, totalSpent: 4000}])); // false
// 2.11 Izoh: Bu funksiyada some() metodi yordamida mijozlar ro'yxatida yuqori qiymatli mijozlar bor-yo'qligi tekshiriladi.

// 2.12 YeChIM:
function hasDuplicateUsernames(users) {
  const usernames = users.map(user => user.username);
  return usernames.some((username, index) => usernames.indexOf(username) !== index);
}
console.log(hasDuplicateUsernames([{username: 'user1'}, {username: 'user2'}, {username: 'user1'}])); // true
console.log(hasDuplicateUsernames([{username: 'user3'}, {username: 'user4'}, {username: 'user5'}])); // false
// 2.12 Izoh: Bu funksiyada some() metodi yordamida foydalanuvchilar ro'yxatida takroriy foydalanuvchi nomlari bor-yo'qligi tekshiriladi. 
// 2.13 YeChIM:
function hasExpiredProducts(products) {
  const currentDate = new Date();
  return products.some(product => new Date(product.expiryDate) < currentDate);
}
console.log(hasExpiredProducts([{name: 'Product A', expiryDate: '2024-05-01'}, {name: 'Product B', expiryDate: '2024-12-31'}])); // true
console.log(hasExpiredProducts([{name: 'Product C', expiryDate: '2024-12-31'}, {name: 'Product D', expiryDate: '2025-01-01'}])); // false
// 2.13 Izoh: Bu funksiyada some() metodi yordamida mahsulotlar ro'yxatida muddati o'tgan mahsulotlar bor-yo'qligi tekshiriladi.