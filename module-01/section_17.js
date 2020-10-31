// Module 01 | Section 17
// Scope
var a = 1;
let b = 2;
const c = 3;

console.log(`a: ${a}, b: ${b}, c: ${c}`);

a = 4;
b = 5;
// c = 6; // attempting to reasign const variable
console.log(`a: ${a}, b: ${b}, c: ${c}`);

function scope() {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

scope();

function ScopeOne() {
  a = 10;
  b = 11;
  // c = 12; // attempting to reasign const variable
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

ScopeOne();
console.log(`a: ${a}, b: ${b}, c: ${c}`);

function ScopeTwo(a, b, c) {
  console.log(`ST 1: a: ${a}, b: ${b}, c: ${c}`);
}

ScopeTwo(1, 2, 3);
console.log(`ST 2: a: ${a}, b: ${b}, c: ${c}`);
ScopeTwo();
console.log(`ST 3: a: ${a}, b: ${b}, c: ${c}`);
