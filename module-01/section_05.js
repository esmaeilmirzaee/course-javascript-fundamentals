// Conversion

// string to number
val = String(5);

// boolean to string
val = String(true);
val = String(false);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 3]);

// toString()
val = (5).toString();
val = true.toString();

// string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
// val = Number(Null);
// val = Number('');
val = Number('hello');
val = Number([1, 2, 3]);

// parseInt
val = parseInt('100');
val = parseInt('100.301');
val = parseFloat('100');
val = parseFloat('100.3'); // console.log(val.toFixed(3));

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed()); // for numbers

// calculation on conversion
val = String(7);
valTwo = 6;
sum = Number(val + valTwo);
sum = Number(Number(val) + valTwo);
console.log(sum);
console.log(typeof sum);
