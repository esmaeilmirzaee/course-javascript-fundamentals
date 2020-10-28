// Module 01 | Section 08
// String Literals
const aPerson = {
  name: 'Esmaeil',
  surname: 'MIRZAEE',
  career: 'Software developer',
  city: 'Tehran',
};

html =
  '<ul><li>Name: ' +
  aPerson.name +
  ' ' +
  aPerson.surname +
  '</li><li>Career: ' +
  aPerson.career +
  '</li><li>City: ' +
  aPerson.city +
  '</li></ul>';

// leveraging template strings (ES6 ~ 2015)
/*
 * 'template literal syntax' is only available in ES6 (use 'esversion: 6').
 * create .jshintrc in root directory then add
 * {"esversion": 6}
 */
html = `<ul><li>Name: ${aPerson.name} </li><li>Career: ${aPerson.career} </li><li>City: ${aPerson.city} </li></ul>`;

document.body.innerHTML = html;
