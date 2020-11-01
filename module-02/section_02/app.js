// Module 02 | Section 02
// document.getElementById()
console.log(document.getElementById('title'));

console.log(document.getElementById('title').id);
console.log(document.getElementById('title').className);

const taskTitle = document.getElementById('title');

// Styling
taskTitle.style.background = '#333';
taskTitle.style.background = 'gray';
taskTitle.style.background = 'rgb(100, 100, 100)';

taskTitle.style.color = '#fff';
taskTitle.style.padding = '1rem';
// taskTitle.style.display = 'none';

// Content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span style="color:red">A New TASK</span>';

// document.querySelector()
console.log(document.querySelector('#title'));
console.log(document.querySelector('.title'));

// styling
document.querySelector('li').style.color = 'blue';
document.querySelector('ul li').style.backgroundColor = '#ccc';

document.querySelector('li:last-child').style.fontWeight = '800';
document.querySelector('li:first-child').style.color = 'red';
document.querySelector('li:nth-child(2)').textColor = 'yellow';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#ccc';
