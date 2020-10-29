// Module 01 | Section 14
// Functions
// Declare
function greet() {
  return 'Hello';
}

function greet(firstName, lastName) {
  return `Hello ${fristName} ${lastName}`;
}

function greet(firstName = 'Esmaeil', lastName = 'MIRZAEE') {
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet());
console.log(greet('Esmaeil', 'MIRZAEE'));

// Expressions
const square = function (x) {
  return x * x;
};

console.log(square(2));

// Immediately Invokable Function Expresions -- IIFEs
(function () {
  console.log('Running IIFEs...');
});

(function () {
  console.log('Running IIFEs...');
})();

(function (name) {
  console.log(`'Running ${name}...'`);
})('IIFEs');

// Property methods
const math = {
  add: function (x, y) {
    console.log(x + y);
  },
  sub: function (x, y) {
    console.log(x - y);
  },
};

math.add(2, 1);
math.sub(2, 1);
