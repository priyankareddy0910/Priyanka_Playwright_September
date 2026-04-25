// JavaScript basics practice file

// 1. Variables
const courseName = "JavaScript Basics";
let duration = 30;
let isActive = true;

console.log("Course Name:", courseName);
console.log("Duration:", duration);
console.log("Is Active:", isActive);

// 2. Function
function add(a, b) {
  return a + b;
}

console.log("Addition:", add(10, 20));

// 3. Arrow function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(5, 4));

// 3a. IIFE (Immediately Invoked Function Expression)
// IIFE runs immediately after it is created.
(function () {
  console.log("This is a normal IIFE function");
})();

((name) => {
  console.log(`This is an arrow IIFE function: ${name}`);
})("Priyanka");

// 4. Array
const fruits = ["apple", "banana", "orange"];
console.log("First fruit:", fruits[0]);

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 5. Object
const student = {
  name: "Priyanka",
  age: 25,
  city: "Chicago",
};

console.log("Student Name:", student.name);
console.log("Student City:", student.city);

// 6. Condition
if (duration > 20) {
  console.log("This is a long course");
} else {
  console.log("This is a short course");
}

// 7. Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// 8. Array methods
const numbers = [10, 20, 30, 40];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

const filteredNumbers = numbers.filter((num) => num > 20);
console.log("Filtered Numbers:", filteredNumbers);

// 8a. map() example
// map() is used when we want to transform every element of an array.
const employees = [
  { name: "Priya", salary: 30000 },
  { name: "Ravi", salary: 40000 },
  { name: "John", salary: 50000 },
];

const employeeNames = employees.map((employee) => employee.name);
console.log("Employee Names using map():", employeeNames);

const increasedSalaries = employees.map((employee) => employee.salary + 5000);
console.log("Updated Salaries using map():", increasedSalaries);

// 8b. filter() example
// filter() is used when we want only matching elements from an array.
const marks = [35, 67, 89, 42, 90, 25];

const passedMarks = marks.filter((mark) => mark >= 40);
console.log("Passed Marks using filter():", passedMarks);

const failedMarks = marks.filter((mark) => mark < 40);
console.log("Failed Marks using filter():", failedMarks);

// 9. Destructuring
const [firstFruit, secondFruit] = fruits;
console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);

// 10. Promise and async/await
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, username: "test_user" });
    }, 1000);
  });
}

async function printUser() {
  const user = await getUser();
  console.log("User Data:", user);
}

printUser();
