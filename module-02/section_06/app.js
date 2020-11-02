/* Module 02 | Section 06
 * delete, remove and replace elements
 */
// Replacing
const newHeading = document.createElement('h1');
newHeading.className = 'task-title';
newHeading.innerText = 'Tasks';

const rows = document.querySelectorAll('.row')[2];
const oldHeading = rows.querySelector('.subtitle');

rows.replaceChild(newHeading, oldHeading);
console.log(oldHeading);

// Query selecting
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link;
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link.hasAttribute('Google');

console.log(val);
