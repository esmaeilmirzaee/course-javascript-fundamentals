document.addEventListener('DOMContentLoaded', load);
document.addEventListener('click', load);

function load() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

    xhr.onload = function() {
        if (this.status === 200) {
            displayLoad(JSON.parse(this.responseText));
        }
    };

    xhr.send();
}

function displayLoad(item) {
    const jokeUI = document.getElementById('joke');
    jokeUI.innerText = `${item.value.joke}`;
    jokeUI.classList = 'is-size-1 has-text-centered is-bold';
}