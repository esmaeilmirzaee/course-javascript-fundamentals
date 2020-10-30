// Module 01 | Section 15
// Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While
let i = 10;
while (i > 10) {
  console.log('while: ', i);
  i++;
}

// Do While
// let i = 10;
do {
  console.log('do while: ', i);
} while (i > 10);

const fruits = ['Apple', 'Orange', 'Banana'];
for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

fruits.forEach(function (fruit, i, array) {
  // console.log(`${i}: ${fruit} - ${array}`);
});

const numbers = [1, 2, 3, 4, 5];
let square = numbers.map(function (number) {
  return number * number;
});

console.log(square);
