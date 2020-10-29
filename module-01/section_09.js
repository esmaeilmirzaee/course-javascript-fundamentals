// Module 01 | Section 09
// Arrays

const numbers = [1, 2, 3, 4, 5];
const favourites = new Array('apple', 'car', 'swiming', 13);

res = numbers.length;
res = Array.isArray(numbers);

res = favourites[0];

res = `My favourites are ${favourites}.`;
favourites.push('MotoGP');
res = `My favourites are ${favourites}.`;

res = favourites.indexOf(13);

numbers[2] = 10;
console.log(numbers);

res = favourites.indexOf('Car');
res = favourites.indexOf('Car'.toLowerCase());

// Mutating arrays | ARRAYS are Immutable
favourites.push('Cycling');
favourites.pop(); // removes last element from an array
favourites.unshift('Cycling');
favourites.shift();

favourites.splice(1, 1);
favourites.reverse();

res = favourites.concat(['Apple', 'Orange', 'Banana']);

// Sorting ana array
res = favourites.sort();
res = numbers.sort(function (a, b) {
  return a - b;
  // return b - a;
});

// find
res = numbers.findIndex(function (a) {
  return a < 10;
});

console.log(favourites);

console.log(res);
