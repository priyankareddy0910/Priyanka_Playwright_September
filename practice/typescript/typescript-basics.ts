// TypeScript basics practice file

// 1. Variables with types
const courseName: string = "TypeScript Basics";
let duration: number = 30;
let isActive: boolean = true;

console.log("Course Name:", courseName);
console.log("Duration:", duration);
console.log("Is Active:", isActive);

// 2. Function with types
function add(a: number, b: number): number {
  return a + b;
}

console.log("Addition:", add(10, 20));

// 3. Arrow function
const multiply = (a: number, b: number): number => a * b;
console.log("Multiplication:", multiply(5, 4));

// 3a. IIFE
(function (): void {
  console.log("This is a normal IIFE in TypeScript");
})();

((name: string): void => {
  console.log(`This is an arrow IIFE in TypeScript: ${name}`);
})("Priyanka");

// 4. Array
const fruits: string[] = ["apple", "banana", "orange"];
console.log("First fruit:", fruits[0]);

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 5. Object with type
type Student = {
  name: string;
  age: number;
  city: string;
};

const student: Student = {
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

// 8. map() and filter()
const numbers: number[] = [10, 20, 30, 40];
const doubledNumbers: number[] = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

const filteredNumbers: number[] = numbers.filter((num) => num > 20);
console.log("Filtered Numbers:", filteredNumbers);

type Employee = {
  name: string;
  salary: number;
};

const employees: Employee[] = [
  { name: "Priya", salary: 30000 },
  { name: "Ravi", salary: 40000 },
  { name: "John", salary: 50000 },
];

const employeeNames: string[] = employees.map((employee) => employee.name);
console.log("Employee Names using map():", employeeNames);

const increasedSalaries: number[] = employees.map((employee) => employee.salary + 5000);
console.log("Updated Salaries using map():", increasedSalaries);

const marks: number[] = [35, 67, 89, 42, 90, 25];
const passedMarks: number[] = marks.filter((mark) => mark >= 40);
console.log("Passed Marks using filter():", passedMarks);

// 9. Destructuring
const [firstFruit, secondFruit]: string[] = fruits;
console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);

// 10. Interface
interface User {
  id: number;
  username: string;
  email: string;
}

const user: User = {
  id: 1,
  username: "test_user",
  email: "test@example.com",
};

console.log("User:", user);

// 11. Union type
let value: string | number;
value = "Hello";
console.log("Union Value:", value);
value = 100;
console.log("Union Value:", value);

// 12. Promise and async/await
function getUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 2,
        username: "typescript_user",
        email: "typescript@example.com",
      });
    }, 1000);
  });
}

async function printUser(): Promise<void> {
  const userData: User = await getUser();
  console.log("User Data:", userData);
}

printUser();
