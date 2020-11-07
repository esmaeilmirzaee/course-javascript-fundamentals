const min = 0
const max = 100

const tickUI = document.getElementById('tick');
tickUI.style.display = 'none';
document.getElementById('message').style.display = 'none'
document.getElementById('guess').placeholder = `${min} ~ ${max}`