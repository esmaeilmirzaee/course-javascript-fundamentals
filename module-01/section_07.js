// Module 01 | Section 07
// Strings
const firstName = 'Esmaeil';
const lastName = 'MIRZAEE';
let result;

result = firstName + lastName;

// concatenation
result = firstName + ' ' + lastName;

// append
name = 'Esmaeil ';
name += 'MIRZAEE';

result = 'Hello, my name is ' + name + '.';

// escaping
result = "That's awesome news.";

// length
result = firstName.length; // properties vs functions/methods

// concat
result = firstName.concat(lastName);
result = firstName.concat(' ', lastName);

// alter case
result = firstName.toLowerCase();
result = firstName.toUpperCase();
result = firstName[0];
// result = firstName[-1];

// search strings
result = firstName.indexOf('a');
result = firstName.indexOf('z');
result = firstName.lastIndexOf('a');
result = firstName.lastIndexOf('z');

result = firstName.charAt('2');

result = name.charAt(name.length - 1);
name += 'z';
result = name.charAt(name.length - 1);

// string manipulation
result = firstName.substr(0, 2);
result = firstName.substring(0, 2);
result = firstName.slice(0, 2);
result = firstName.slice(-3);

result = firstName + ',' + lastName;
result = result.split(',');

result = lastName + '-' + firstName;
result = result.split('-');

str = firstName + '-' + lastName + ',' + name;
result = str.replace('e', 'E');

result = str.normalize();
result = str.repeat(2);
str = '  a' + str + 'a  ';
result = str.trim();

// search string
result = str.includes('s');
result = str.endsWith(name);

console.log(result);
