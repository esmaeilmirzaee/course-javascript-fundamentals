let res = document;

res = document;
res = document.all; // deprecated
res = document.all[0];
res = document.all.length;
res = document.head;
res = document.body;
res = document.doctype;
res = document.domain;
res = document.URL;
res = document.characterSet;
res = document.contentType;

res = document.forms;
res = document.forms[0];
res = document.forms[0].id;
res = document.forms[0].method;
res = document.forms[0].action;

res = document.links;
res = document.links[0];
res = document.links[0].id;
res = document.links[0].className;
res = document.links[0].classList[0];

res = document.images;
res = document.scripts;
res = document.scripts[0].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach((script) => {
  console.log(script.getAttribute('src'));
});

console.log(res);
