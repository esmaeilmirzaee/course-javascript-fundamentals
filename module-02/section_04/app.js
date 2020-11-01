// Module 02 | Section 04
// Access children and parents of an element

let res;

const list = document.querySelector('ul.tasks');
const listItem = document.querySelector('li.task:first-child');

res = listItem;
res = list;

// Get child nodes
res = list.childNodes;
res = list.childNodes[0];
res = list.childNodes[0].nodeName;

/*
 * 1: Element
 * 2: Attribute (depricated)
 * 3: Text node
 * 8: Comment
 * 9: Document itself
 * 10: Doctype
 */

res = list.childNodes[0].nodeType;
res = list.childNodes[1].nodeType;

// Children -> HTMLCollection
res = list.children;
res = list.children[1];
list.children[0].textContent = 'App.JS';

// Children of children
res = list.children[0].children;
list.children[1].children[0].id = 'test-link';
res = list.children[3].children[0];

res = list.lastChild;
res = list.lastElementChild;

// Count child elements
res = list.childElementCount;

// Parents
res = listItem.parentNode;
res = listItem.parentElement;
res = listItem.parentElement.parentElement;

// Siblings
res = listItem.nextSibling;
res = listItem.nextElementSibling;

res = listItem.previousSibling;
res = listItem.previousElementSibling; // first item has no previous sibling

console.log(res);
