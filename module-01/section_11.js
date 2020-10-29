// Module 01 | Section 01
// Date & Time
const today = new Date();
let birthday = new Date('September 19 2020');
birthday = new Date('9/10/2020');

let res = today.getMonth();
res = today.getDay(); // Saturday = 0, Sunday = 1, ...
res = today.getDate(); // Day of month
res = today.getFullYear();
res = today.getHours();
res = today.getMinutes();
res = today.getSeconds();
res = today.getMilliseconds();
res = today.getTime();

console.log(res);

birthday.setMonth(0);
birthday.setDate(1);
birthday.setFullYear(2020);
birthday.setHours(1);
birthday.setMinutes(1);
birthday.setSeconds(Math.random() * 60);

console.log(birthday);
