const taskInput = document.querySelector('.task');
const addNewTaskBtn = document.querySelector('#new-task');
const taskList = document.querySelector('.collection');
const clearTasks = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

eventListener();

function eventListener() {
  // Add a new task event
  document.querySelector('#task-form').addEventListener('submit', addTask); // Remove a task event
  taskList.addEventListener('click', delTask);
  // Remove all tasks event
  clearTasks.addEventListener('click', delTasks);
  // Filter event
  filter.addEventListener('keyup', filterTasks);
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
  taskInput.value = '';
}

// Remove a task using event delegation
function delTask(e) {
  if (e.target.classList.contains('fa')) {
    if (confirm('Are you sure?')) {
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
