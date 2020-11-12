// Module 05 | Section 02 | EcmaScript 6 with classes and objects
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {}

UI.prototype.addABookToList = function(book) {
    const delButton = document.createElement('button');
    delButton.className = 'delete';
    const list = document.querySelector('#books');
    const row = list.insertRow(-1);
    const idCell = row.insertCell(-1);
    const titleCell = row.insertCell(-1);
    const authorCell = row.insertCell(-1);
    const isbnCell = row.insertCell(-1);
    const delCell = row.insertCell(-1);
    idCell.appendChild(document.createTextNode(0));
    titleCell.appendChild(document.createTextNode(book.title));
    authorCell.appendChild(document.createTextNode(book.author));
    isbnCell.appendChild(document.createTextNode(book.isbn));
    delCell.appendChild(delButton);
};

UI.prototype.showNotification = function(msg) {
    const notificationUI = document.querySelector('#notification');
    const notificationMessageUI = document.querySelector('#notification-message');
    notificationMessageUI.textContent = msg;
    notificationUI.style.display = 'block';
    setTimeout(()=>{
        notificationUI.style.display = 'none';
    }, 3000);
};

UI.prototype.clearFields = function() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
};

UI.prototype.delBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

document.querySelector('#button').addEventListener('click', function(e) {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
    const book = new Book(title, author, isbn);
    const ui = new UI();
    if (book.title === '' || book.author === '' || book.isbn === '') {
        ui.showNotification('Fill in the blanks.');
    } else {
        ui.addABookToList(book);
        ui.clearFields();
    }
});

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('#notification').style.display = 'none';
});

document.querySelector('#books').addEventListener('click', function(e) {
    const ui = new UI();
    ui.delBook(e.target);
});