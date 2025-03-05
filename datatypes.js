// Datatypes-they allow us to represent real world data in a programmimng

/*1. Primitive- String,number, boolean, undefined,null
2. None Primitive- objects and arrays
Use the typeof keyword to check/know the datatype
*/

// 1. Strings-represent texts, paragraph

// Double quotes
const firstName = "Jane";

// Single quotes
const lastName = "Doe";

// Use of backticks

const fullName = `Jane Doe`;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof fullName);

// sring concatenation using the + operator
console.log(firstName + lastName);

// BODMAS - PEMDAS Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction

// curly brackets -> {}
// paranthesis (soft brackets) -> ()
// Square brackets -> []

// string interpolation - injecting values into strings - We must use the backticks

console.log(`Jane ${lastName}, age is ${2025 - 2000}`);
console.log(`${firstName} ${lastName}, $40,000`);

// 2. Numbers -> whole numbers, decimals, negative

console.log(typeof 3);
console.log(typeof -40);

// 3. Boolean -> True/False
console.log(typeof true);
console.log(typeof false);

// 4. Objects -> Collection of data consisting of key value pairs
// separated by a comma - We use curly brackets
const student = {
  name: "Robert",
  class: "Web 9",
  age: 23,
  studentEmail: "robert.haji@moringaschool.com",
  isDisciplined: true,
};
console.log(student);

// 5. arrays -> list of values enclosed using the square brackets
const students = ["Robert", "Lewis", "Ruth"];
const scores = [40, 50, 60];

console.log(typeof student);

// 6. null -> represents an intentionally absent value
let name = null;

// 7. undefined -> not assigned any value
let age;
console.log(age);
