// Module 01 | Section 13
// Switch statements
let day;

let date = new Date();
date.setDate(22);

switch (date.getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'NaN';
    break;
}

console.log(`The day is ${day}.`);
