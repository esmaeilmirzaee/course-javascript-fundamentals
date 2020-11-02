// Module 02 | Section 06
// delete, remove and replace elements
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');
console.log(oldHeading);

const cardAction = document.querySelectorAll('.row')[2];
console.log(cardAction);

cardAction.replaceChild(newHeading, oldHeading);
