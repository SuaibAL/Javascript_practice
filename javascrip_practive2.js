
// Task 1 — Array Methods


let fruits = ["Apple", "Mango", "Banana"];
fruits.push("Orange");
fruits.pop();
fruits.forEach(function (fruit) {
  console.log(fruit);
});



// Task 2 — map() & filter()


let numbers = [10, 20, 30, 40, 50];
let addedNumbers = numbers.map(function (number) {
  return number + 10;
});

console.log("After adding 10:", addedNumbers);
let filteredNumbers = numbers.filter(function (number) {
  return number > 30;
});

console.log("Numbers greater than 30:", filteredNumbers);



// Task 3 — reduce(), find(), findIndex()


let marks = [40, 55, 70, 85, 30];
let totalMarks = marks.reduce(function (total, mark) {
  return total + mark;
}, 0);

console.log("Total Marks:", totalMarks);
let first70OrMore = marks.find(function (mark) {
  return mark >= 70;
});

console.log("First 70 or more:", first70OrMore);
let indexOf85 = marks.findIndex(function (mark) {
  return mark === 85;
});

console.log("Index of 85:", indexOf85);

// Task 4 — Object Methods


let student = {
  name: "Rahim",
  age: 22,
  city: "Chittagong",
};
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));
console.log("Has name property:", student.hasOwnProperty("name"));

// Task 5 — Set


let numberSet = new Set([10, 20, 30]);
numberSet.add(40);
numberSet.delete(20);
console.log("Has 30:", numberSet.has(30));
numberSet.forEach(function (value) {
  console.log("Set value:", value);
});


// Task 6 — Map

let studentMap = new Map();
studentMap.set("name", "Rahim");
studentMap.set("age", 22);
console.log("Student name:", studentMap.get("name"));
console.log("Has age:", studentMap.has("age"));
console.log("Map size:", studentMap.size);

// Task 7 — Spread & Rest


let a = [1, 2, 3];
let b = [4, 5, 6];
let combinedArray = [...a, ...b];

console.log("Combined Array:", combinedArray);
function sum(...numbers) {
  return numbers.reduce(function (total, number) {
    return total + number;
  }, 0);
}

console.log("Sum:", sum(10, 20, 30));

// Task 8 — Class & Constructor


class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}
let student1 = new Student("Rahim", 22, "JavaScript");
let student2 = new Student("Karim", 23, "React");

console.log("Student 1:", student1);
console.log("Student 2:", student2);

// Task 9 — Inheritance & Overriding

class Person {
  introduce() {
    console.log("Hello, I am a person.");
  }
}
class StudentPerson extends Person {
  introduce() {
    console.log("Hello, I am a student.");
  }
}

let person1 = new Person();
let studentPerson1 = new StudentPerson();

person1.introduce();
studentPerson1.introduce();

// Task 10 — Small OOP Project

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log("Deposited:", amount);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn:", amount);
    } else {
      console.log("Insufficient balance!");
    }
  }
  static bankName() {
    console.log("Bank: ABC Bank");
  }
}
let account = new BankAccount("Rahim", 5000);
account.deposit(1000);
account.withdraw(500);
console.log("Account Holder:", account.name);
console.log("Current Balance:", account.balance);

// static method call
BankAccount.bankName();