//
document.addEventListener('DOMContentLoaded', loadData);

//
class Verb {
    constructor(id, verb, meaning) {
        this.id = id;
        this.verb = verb;
        this.meaning = meaning;
    }
}


function loadData(e) {
    loadItems();

    // const parler = new Verb(1, 'Parler', 'Speak');
    // addARow(parler);

    e.preventDefault();
}

function loadAnItem() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data/vocabulary.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const item = JSON.parse(this.responseText);
            addARow(item);
        }
    };

    xhr.send();
}

function loadItems() {
    //
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data/vocabularies.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const items = JSON.parse(this.responseText);
            items.forEach(item => {
                addARow(item);
            });
        }
    };

    xhr.send();
}

function addARow(item) {
    const list = document.getElementById('list');

    const newRow = list.insertRow(-1);
    const idCell = newRow.insertCell(-1);
    idCell.innerText = item.id;
    const verbCell = newRow.insertCell(-1);
    verbCell.innerText = item.verb;
    const meaningCell = newRow.insertCell(-1);
    meaningCell.innerText = item.meaning;
    const actionCell = newRow.insertCell(-1);

    const actionButton = document.createElement('button');
    actionButton.className = 'delete';
    actionCell.appendChild(actionButton);

    list.appendChild(newRow);
}

