/*
* Boolean expressions - Expressions that evaluate to true/false

Expression -> combination of data & symbols called operators
Evaluation -> Executing the expression to a constant expression
*/

// 1 Comparison operators -> allow us to compare equality of values/datatypes

/* Strict equality operator (===) -> Compares values and datatypes*/

// console.log(1 + 1)
console.log(2 === 2);
console.log(2 === "2");
console.log(Boolean);

/*srict inequality operator (!==)
checks if the value plus datatype is not equal*/
console.log(2 !== 2);

/* Loose equality (==) & inequality (!=) operator
compares the values only
*/
console.log(2 == "2");
console.log(2 != "3");

// 2 Logical operators

// a. NOT/bang operator (!) returns the opposite
console.log(!true);
console.log(!false);

// b. Double bang operator (!!) -> allows you to convert other datatypes to boolean
// its a shortcut to a boolean condtructor
console.log(Boolean("0"));
console.log(!!"0");

// the moment a mathematical expressions encounters a string it does coercion: Example
console.log(1 + "2 Jane");

// c. AND (&&) and the OR (//) -> double pipes - they allow combining of
// boolean expressions
console.log(2 === 2 && 2 == "2");
console.log(2 === 2 || 2 == "2");
console.log(2 === 2 || (2 == "3" && 3 == 3));

// 3 Number operators -> less than, greater than, less than or equal to
console.log(50 > 32);
console.log(34 >= 50);

// statements + Execution sequence
