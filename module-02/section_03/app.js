// Module 02 | Section 03
// document.getElementsByClassName()
const items = document.getElementsByClassName('task');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('task');

console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

lis = Array.from(lis);
lis.reverse();
lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);
// document.querySelectorAll('li')
let itemsList = document.querySelectorAll('li');

itemsList.forEach(function (li, index) {
  li.style.color = 'red';
  li.innerText = `Task ${index}`;
});

let lisOdd = document.querySelectorAll('li:nth-child(odd)');
lisOdd.forEach(function (li, idx) {
  li.innerText = 'Odd';
  li.style.backgroundColor = '#ccc';
  li.style.color = '#fff';
});

let lisEven = document.querySelectorAll('li:nth-child(even');
lisEven.forEach(function (li, idx) {
  li.textContent = 'Even';
});
