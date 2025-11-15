## 🧩 **JavaScript’da obyekt → massiv → obyekt shaklidagi ma’lumotlar tuzilmasi**

JavaScript’da ko‘p hollarda ma’lumotlar **murakkab, iyerarxik** ko‘rinishda saqlanadi. Bunda:

* Obyekt ichida
* Massiv bo‘ladi,
* Massiv ichida yana obyektlar bo‘ladi.

Bu bizga katta tizimlarni tartibli va tushunarli holatda saqlash imkonini beradi.

---

## 🏢 **Misol: Kompaniya tuzilmasi**

Quyidagi obyekt "company" kompaniyani bildiradi. Unda:

* **name** → kompaniya nomi
* **location** → joylashuvi
* **departments** → bo‘limlar massivi

Har bir **bo‘lim (department)** obyekt bo‘lib:

* id
* name
* head
* employees → **xodimlar massivi**

Xodimlarning o‘zi ham obyekt:

* id
* name
* position (lavozimi)

---

### **JavaScript kodi:**

```js
const company = {
  name: "Tech Solutions Inc.",
  location: "Silicon Valley",
  departments: [
    {
      id: "D001",
      name: "Engineering",
      head: "Alice Johnson",
      employees: [
        { id: "E001", name: "Bob Smith", position: "Software Engineer" },
        { id: "E002", name: "Charlie Brown", position: "Senior Developer" }
      ]
    },
    {
      id: "D002",
      name: "Marketing",
      head: "David Lee",
      employees: [
        { id: "E003", name: "Eve Davis", position: "Marketing Specialist" }
      ]
    }
  ]
};
```

---

## 📌 **Ma’lumotlarga murojaat qilish (Accessing Data)**

### 1) **Oddiy obyekt ichidagi qiymat**

```javascipr
console.log(company.name); 
// Natija: Tech Solutions Inc.
```

### 2) **Massiv ichidagi obyektga murojaat**

```javascipr
console.log(company.departments[0].name);
// Natija: Engineering
```

### 3) **Massiv ichida massiv → obyekt ichidagi qiymat**

```javascipr
console.log(company.departments[0].employees[1].position);
// Natija: Senior Developer
```

---

## 🔁 **Bo‘limlar va xodimlar ustidan aylanib chiqish**

```js
company.departments.forEach(department => {
  console.log(`Department: ${department.name} (Head: ${department.head})`);
  
  department.employees.forEach(employee => {
    console.log(`  - Employee: ${employee.name} (Position: ${employee.position})`);
  });
});
```

### Natijasi:

```
Department: Engineering (Head: Alice Johnson)
  - Employee: Bob Smith (Position: Software Engineer)
  - Employee: Charlie Brown (Position: Senior Developer)

Department: Marketing (Head: David Lee)
  - Employee: Eve Davis (Position: Marketing Specialist)
```

---

## 💡 **Xulosa**

Bu kabi nested (ichma-ich) tuzilmalar:

✔ Real hayotdagi tuzilmalarni (kompaniya, universitet, do‘kon, katalog) eng aniq ifodalaydi

✔ Ma’lumotlar bilan ishlashni tartibli qiladi

✔ Bo‘limlar va xodimlarni boshqarishni osonlashtiradi

✔ Har qanday murakkab ma’lumotni model qilishga imkon beradi

Shu struktura bo‘yicha **CRUD (create, read, update, delete)** amallarni ishlab chiqish...