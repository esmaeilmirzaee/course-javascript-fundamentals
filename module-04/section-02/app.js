// Module 04 | Section 02 | Primitive Data Types
const name = "Esmaeil";
const nameP = new String("Esmaeil");

console.log(name);
console.log(nameP);
console.log(typeof name);
console.log(typeof nameP);

if (name === 'Esmaeil') {
    console.log('Yes');
} else {
    console.log('No');
}

const num = 2;
const numP = new Number(2);

console.log(num);
console.log(numP);
console.log(typeof num);
console.log(typeof numP);

const bool = true;
const boolP = new Boolean(true);

console.log(bool);
console.log(boolP);
console.log(typeof bool);
console.log(typeof boolP);

const getSum = function(a, b) {
    return a + b;
}
const getSumP = new Function('a', 'b', 'return a + b');
console.log(getSum(2, 2));
console.log(getSumP(2, 2));
console.log(typeof getSum);
console.log(typeof getSumP);

const obj = {name: 'Esmaeil'};
const objP = new Object({name: 'Esmaeil'});
console.log(obj);
console.log(objP);

const arr = [1, 2, 3, 4, 5];
const arrP = new Array(1, 2, 3, 4, 5);
console.log(arr);
console.log(arrP);

