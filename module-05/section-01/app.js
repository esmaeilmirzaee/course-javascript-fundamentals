const notificationUI = document.querySelector('#notification');
const notificationMessageUI = document.querySelector('#notification-message');
const titleUI = document.querySelector('#title');
const authorUI = document.querySelector('#author');
const isbnUI = document.querySelector('#isbn');
const buttonUI = document.querySelector('#button');
const tableBodyUI = document.querySelector('#books');

let book = {
    id: 0,
    title: '',
    author: '',
    isbn: ''
};
let books;

document.addEventListener('DOMContentLoaded', startApp);

function startApp(e) {
    e.preventDefault();
    notificationUI.style.display = 'none';
    console.log(titleUI, authorUI, isbnUI, buttonUI);
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
        loadOnLS();
    }
    buttonUI.addEventListener('click', addABook);
}

function addABook(e) {
    e.preventDefault();
    if (titleUI.value !== '' && authorUI.value !== '' && isbnUI !== '') {
        console.log('Start to build', titleUI.value);
        book = {id: books.length===0 ? 1 : books.length+1, title: titleUI.value, author: authorUI.value, isbn: isbnUI.value};
        save(book);
    } else {
        notificationMessageUI.textContent = 'Please fill all the required fields.';
        notificationUI.style.display = 'block';
        setTimeout(() => {
            notificationUI.style.display = 'none';
        }, 3000);
    }
}

function addARow(book) {
    const delIcon = document.createElement('button');
    delIcon.className = 'delete';

    let newBook = tableBodyUI.insertRow(-1);
    let idCell = newBook.insertCell(-1);
    let titleCell = newBook.insertCell(-1);
    let authorCell = newBook.insertCell(-1);
    let isbnCell = newBook.insertCell(-1);
    let delCell = newBook.insertCell(-1);

    idCell.appendChild(document.createTextNode(book.id));
    titleCell.appendChild(document.createTextNode(book.title));
    authorCell.appendChild(document.createTextNode(book.author));
    isbnCell.appendChild(document.createTextNode(book.isbn));
    delCell.appendChild(delIcon);
}

function save(book) {
    addARow(book);
    saveOnLS(book);
}

function loadOnLS() {
    books.forEach(function(book) {
        addARow(book);
    });
}

function saveOnLS(book) {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

function delABook() {

}