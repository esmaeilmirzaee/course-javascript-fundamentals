// Variables
let indefinitely = false;
const min = 0;
const max = 100;
let randomInt;


// UI variables
const guessUI = document.querySelector("#guess");
const messageUI = document.querySelector("#message");
const indefinitelyUI = document.querySelector("#indefinitely");
const buttonUI = document.querySelector("#checkBtn");
const replayButtonUI = document.querySelector("#replay");

document.addEventListener('DOMContentLoaded', function(e) {
    generateRandomInt();
    replayButtonUI.style.display = 'none';
    messageUI.style.display = 'none';
    guessUI.placeholder = `${min} ~ ${max}`
});

indefinitelyUI.addEventListener("change", function(e) {
    indefinitely = !indefinitely;
});

buttonUI.addEventListener("click", function(e) {
    if (!isNaN(parseInt(guessUI.value))) {
        checkTheAnswer(randomInt, parseInt(guessUI.value));
    }
});


replayButtonUI.addEventListener("click", function(e) {
    resetTheGame();
});

function checkTheAnswer(random, guess) {
    console.log(random, guess);
    if (random === guess) {
        buttonUI.classList.add('is-light');
        buttonUI.children[1].style.display = 'none';
        buttonUI.disabled = true;
        guessUI.disabled = true;
        guessUI.parentElement.children[2].classList.add('has-text-primary');
        messageUI.innerText = "You won.";
        messageUI.classList.add("has-text-primary");
        messageUI.style.display = 'block';
        replayButtonUI.style.display = 'block';
    } else {
        generateRandomInt();
    }
}

function generateRandomInt() {
    randomInt = parseInt(Math.random() * max + min);
    console.log(randomInt);
}

function resetTheGame() {
    messageUI.style.display = 'none';
    guessUI.value = "";
    guessUI.disabled = false;
    buttonUI.disabled = false;
    buttonUI.classList.remove('is-light');
    buttonUI.children[1].style.display = 'none';
    generateRandomInt();
}