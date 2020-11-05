/*
 * Module 02 | Section 11
 * Working with storage---local and session
 */

// Local Storage
localStorage.setItem('name', 'Esmaeil');

const name = localStorage.getItem('name');
console.log(localStorage.getItem('age')); // reports null
console.log(name);

localStorage.removeItem('name');

// Session Storage
sessionStorage.setItem('name', 'Esmaeil MIRZAEE');
let ephemeralName = sessionStorage.getItem('name');
console.log(ephemeralName);
sessionStorage.removeItem(ephemeralName);
ephemeralName = sessionStorage.getItem('name');
console.log(ephemeralName);

// Storing and retriving multiple items
let tasks;

document.querySelector('form').addEventListener('submit', function (e) {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  let taskInput = document.querySelector('.newTask').value;
  console.log(typeof tasks);
  tasks.push(taskInput);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  e.preventDefault();
});

tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
});
