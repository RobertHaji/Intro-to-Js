/*
Statements

* Default seguence/execution order -> Left to right, top to bottom

* Selection -> We can choose to run certain codes and not others Example if/switch
* Repetioon -> We can choose to run certain codes until a condition is met Example while, do while
*/

// Selection using if (single if)

const age = 18;
const nationality = "Kenyan";
const constituency = "Juja";
const hasVoted = false;
console.log(!hasVoted);
// the first part of the if condition only checks for truthiness
if (
  age >= 18 &&
  nationality === "Kenyan" &&
  constituency === "Juja" &&
  !hasVoted
) {
  console.log("You can vote");
} else {
  //the else part allows us to account for falsiness
  console.log("You cannot vote");
}

// mutiple conditions

const fruit = "apple";

if (fruit === "apple") {
  console.log("placed in the apple basket");
} else if (fruit === "mango") {
  console.log("placed in the mango basket");
} else if (fruit === "banana") {
  console.log("placed in the banana basket");
} else {
  console.log("We do not have a basket for ${fruit}");
}

// selection using switch - Treat it as an assignment

//  Repetition using while loop

// Natural terminating loop

let count = 0;

while (count < 5) {
  console.log("count ${count}");
  // terminating  condition
  count = count + 2;
}

console.log(count);

let timer = 0;

while (timer <= 9) {
  console.log("Alarm ringing, ${timer}");
  timer = timer + 1;
}
console.log(timer);

// do/while -> always runs at least once

let countTwo = 6;
do {
  console.log("count ${countTwo}");
  // countTwo++;
  countTwo + 1;
} while (countTwo <= 5);

console.log(countTwo);

console.log("Execution is still happening");
