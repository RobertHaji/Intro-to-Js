/* 
Objects -> non primiitve
collection of data with key/value pairs(properties)
*/

/* We use curly brackets -> {}
 */

const car = {
  engine: "v8",
  color: "black",
  brand: "BMW",
  seatCapacity: 4,
  owner: {
    firstName: "Robert",
    phone: "0704161085",
    // special keys
    ["full name"]: "Robert Haji",
  },
  previousOwner: ["Chama"],
};
const key = "engine";

console.log(car[key]);

const firstName = "John";

console.log(firstName);

// Accessing values inside an object
// 1. Dot notation (.)
console.log(car.owner.firstName);

// 2. Square bracket notation ([]) -. Dynamically access value
// They aslo come in handy when dealing with special keys

console.log(car["owner"]["firstName"]);
console.log(car["owner"]["fullName"]);

const student = {
  name: "Jose Msafi",
  age: 29,
  gender: "Male",
  class: {
    cohort: "SDF-FT13",
    name: "Web 9",
    tm: {
      yearsofExp: 2,
      name: "Jose",
    },
    noStudents: 41,
    classModule: "SD",
  },
};

console.log(student.class.tm.name);
console.log(student["class"]["tm"]["yearsofExp"]);

// funtions + recurssion

// add more properties
student.regNo = "123";

console.log(student.regNo);

// update properties
student.age = 30;
console.log(student.age);

// delete properties
delete student.age;
console.log(student.age);

// Objects methods
// 1. Object.keys ()-> returns an array of object keys
console.log(Object.keys(student));

// 2. Object.values()-> reurns an arrray of object values

console.log(Object.values(student));
