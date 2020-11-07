/*
 * Module 03 | Section 03 | Save tasks into local storage
 */
const taskInput = document.querySelector('.task');
const addNewTaskBtn = document.querySelector('#new-task');
const taskList = document.querySelector('.collection');
const clearTasks = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

let tasks;
eventListener();

function eventListener() {
  // Retriving previous data from local storage
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add a new task event
  document.querySelector('#task-form').addEventListener('submit', addTask);
  // Remove a task event
  taskList.addEventListener('click', delTask);
  // Remove all tasks event
  clearTasks.addEventListener('click', delTasks);
  // Filter event
  filter.addEventListener('keyup', filterTasks);
}

// Add tasks from local storage
function getTasks(e) {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks.length > 0) {
      tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        taskList.appendChild(li);
      });
    }
  }
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('Please eneter a new task name!');
  }

  // task item
  let li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  // link item
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // add link to task list
  li.appendChild(link);
  taskList.appendChild(li);
  tasks.push(taskInput.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
}

// Remove a task using event delegation
function delTask(e) {
  if (e.target.classList.contains('fa')) {
    if (confirm('Are you sure?')) {
      delItem = e.target.parentElement.parentElement;
      console.log(tasks.indexOf(delItem.textContent));
      tasks.splice(tasks.indexOf(delItem.textContent), 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Remove all tasks
function delTasks(e) {
  if (confirm('You are about to empty your tasks. Are you sure?')) {
    console.log(`${taskList.children.length} is removed.`);
    // Which one is better?
    // 1
    // taskList.innerHTML = '';

    // 2
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    /*
     * The second is so much better.
     */

    // Empty localStorage to an empty list
    // localStorage.setItem('tasks', []);
    localStorage.clear();
  }
}

function filterTasks(e) {
  const filterInput = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(filterInput) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
