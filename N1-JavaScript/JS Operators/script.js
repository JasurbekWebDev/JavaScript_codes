// 8. Boshqa Operatorlar
// typeof Operatori
console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (bug)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // object

// instanceof Operatori
let arr = [1, 2, 3];
// let obj = {};
let date = new Date();

console.log(arr instanceof Array);
// console.log(obj instanceof String);
console.log(date instanceof Boolean);

// in Operatori
let obj = {name: "Ali", age: 25};
console.log("name" in obj); // true
console.log("height" in obj); // false

// Array bilan
console.log(0 in arr); // true
console.log(3 in arr); // false

// delete Operatori
delete obj.age;
console.log(obj); // {name: "Ali"}

// Array bilan
delete arr[1];
console.log(arr); // [1, 2]

console.log(void 0);
console.log(void (0));
console.log(void "Hello");


// new Operatori

date = new Date()
arr = new Array(1, 2, 3);
obj = new Object();

function Person(name) {
  this.name = name;
}

let person = new Person('ali');
console.log(person.name);




















