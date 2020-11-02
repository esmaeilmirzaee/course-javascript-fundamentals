// Module 02 | Section 05
// Creating an element and add attributes to it

const li = document.createElement('li');
const aDeleteTask = document.createElement('a');
const iElement = document.createElement('i');

li.className = 'New-task';
aDeleteTask.className = 'delete-item';
iElement.className = 'fa fa-remove';

li.setAttribute('title', 'New Item');

li.appendChild(document.createTextNode('Hello World'));
// li.textContent = 'A new task';

aDeleteTask.href = '#';
aDeleteTask.appendChild(iElement);
li.appendChild(aDeleteTask);

document.querySelector('ul.tasks').appendChild(li);

console.log(li);
