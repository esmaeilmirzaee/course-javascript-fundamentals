// Module 01 | Section 12
// Conditions
if (true == true) {
  console.log('true == true');
}

if (true == true) {
  console.log('true == true');
} else {
  console.log('true is not equal to true');
}

if (1 == 'a') {
  console.log('1 is equal to a');
} else if (2 == '2') {
  console.log('2 is equal to 2');
} else {
  console.log('none of if conditions were true');
}

// What's the difference between == and ===?
if ('true' == true) {
  console.log('true' == true);
}

if (2 == 2) {
  console.log('2 == 2');
}

if ('true' === true) {
  console.log("'true' === true");
} else {
  console.log("'true' is not equal to true");
}

if (1 === true) {
  console.log('1 === true');
} else {
  console.log('1 is not equal to true');
}

// Braces could be omitted but stick with it
if (typeof id !== 'undefined') {
  console.log(`${id}`);
} else {
  console.log('Check if the id is defined.');
}

//
/*
 * >
 * <
 * ==
 * ===
 * >=
 * <=
 * !=
 * !==
 */

if (1 <= 1) {
  console.log('1 is equal to 1');
}

// logical operators
/*
 * && and
 * || or
 * !
 */
if (true == true && false === false) {
  console.log('Correct');
}

// Ternary operators
console.log(1 < 2 ? '1' : '2');
