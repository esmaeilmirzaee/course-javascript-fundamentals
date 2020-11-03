/*
 * Module 02 | Section 08
 * Mouse Events
 */
const clearBtn = document.querySelector('#clear-all');
const row = document.querySelector('.row');
const heading = document.querySelector('h6');

// Click
clearBtn.addEventListener('click', eventType);
// DoubleClick
clearBtn.addEventListener('dblclick', eventType);
// mouseDown
clearBtn.addEventListener('mousedown', eventType);
// mouseUp
clearBtn.addEventListener('mouseup', eventType);
// mouseEnter
row.addEventListener('mouseenter', eventType);
// mouseLeave
row.addEventListener('mouseleave', eventType);
// mouseOver
row.addEventListener('mouseover', eventType);
// mouseOut
row.addEventListener('mouseout', eventType);
// mouseMove
row.addEventListener('mousemove', eventType);

function eventType(e) {
  console.log(`Heading ${e.type}`);
  heading.innerText = `${e.offsetX} ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
