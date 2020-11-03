/*
 * Module 02 | Section 09
 * Keyboard Events
 */
const form = document.querySelector('form');
const taskInput = document.getElementsByClassName('newTask')[0];
const heading = document.querySelector('h6');

// Clear input
console.log(taskInput);
taskInput.value = '';
// form.addEventListener('submit', eventType);
// keydown
taskInput.addEventListener('keydown', eventType);

// keyup
taskInput.addEventListener('keyup', eventType);

// keypress
taskInput.addEventListener('keypress', eventType);

// Focus
taskInput.addEventListener('focus', eventType);

// blur
taskInput.addEventListener('blur', eventType);

// cut
taskInput.addEventListener('cut', eventType);

// paste
taskInput.addEventListener('paste', eventType);

// Input
taskInput.addEventListener('input', eventType);

function eventType(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);
  heading.innerText = e.target.value;
  // e.preventDefault(); // remove to make the screen responsible when keys pressed
}
