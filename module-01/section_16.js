// Module 01 | Section 16
// Window object
// Alert
// alert('Welcome');

// Confirm
// if (confirm('Are you sure you want to quit?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// Prompt
// let userInput = prompt('Please enter your name: ');
// alert(`Welcome ${userInput}`);

// outer size
console.log(window.outerHeight);
console.log(window.innerWidth);

// inner size
console.log(window.innerHeight);
console.log(window.innerWidth);

// Scroll
res = window.scrollX;
res = window.scrollY;

res = window.location;
res = window.location.hostname;
res = window.location.port;
res = window.location.href;
res = window.location.search;

// Redirect
window.location.href = 'https://google.com';

// Reload
window.location.reload();

// Navigator object
res = window.navigator;
res = window.navigator.appName;
res = window.navigator.appVersion;
res = window.navigator.geolocation;
res = window.navigator.platform;

console.log(res);
