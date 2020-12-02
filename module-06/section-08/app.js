const sayHello = () => console.log("Hello");

const sayHi = (name) => `Hi ${name}`;

const returningObjects = () => ({msg: 'Hello'});

const str = ["Esmaeil", "MIRZAEE", "James", "John", "Doe"];
const stringsLength = str.map(name => name.length);

sayHello();
sayHi();
console.log(stringsLength);