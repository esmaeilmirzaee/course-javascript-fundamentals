/*
 * Module 02 | Section 07
 * Working with UI
 */

// 1
document.querySelector('#add-new-task').addEventListener('click', function (e) {
  console.log('Add a new task');
  e.preventDefault();
});

// 2
document.querySelector('#clear-all').addEventListener('click', onClick);

function onClick(e) {
  let val;
  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.classList;
  val = e.target.className;
  e.target.innerText = 'Hello';

  val = e.type;
  val = e.timeStamp;

  val = e.clientY;
  val = e.clientX;

  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
