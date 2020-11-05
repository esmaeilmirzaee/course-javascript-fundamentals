/*
 * Module 02 | Section 10
 * Event bubbling and event delegation
 */
document.querySelector('.newTask').addEventListener('click', function (e) {
  console.log('newTask');
});

document
  .querySelector('.row.task__item')
  .addEventListener('click', function (e) {
    console.log('row task__item');
  });

document.querySelector('.row').addEventListener('click', function (e) {
  console.log('row');
});

document.querySelector('.container').addEventListener('click', function (e) {
  console.log('container');
});

// Event Delegation

document.body.addEventListener('click', function (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
});
