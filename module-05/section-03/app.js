class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    showNotification(msg, type) {
        const notificationUI = document.getElementById('notification');
        notificationUI.style.display = 'block';
        setTimeout(function() {
            notificationUI.style.display = 'none';
        }, 3000);
        document.getElementById('notification-message').innerHTML = msg;
        if (type === 'is-danger') {
            notificationUI.childNodes[1].classList = 'notification is-align-content-center is-danger';
        } else {
            notificationUI.childNodes[1].classList = 'notification is-align-content-center is-success';

        }
    }

    addABook(book) {
        const delIcon = document.createElement('button');
        delIcon.className = 'delete';

        const row = document.getElementById('books').insertRow(-1);

        const idCell = row.insertCell(-1);
        const titleCell = row.insertCell(-1);
        const authorCell = row.insertCell(-1);
        const isbnCell = row.insertCell(-1);
        const delCell = row.insertCell(-1);

        idCell.appendChild(document.createTextNode('0'));
        titleCell.appendChild(document.createTextNode(book.title));
        authorCell.appendChild(document.createTextNode(book.author));
        isbnCell.appendChild(document.createTextNode(book.isbn));
        delCell.appendChild(delIcon);

        return true;
    }

    delABook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
            const ui = new UI();
            ui.showNotification("A book has been deleted", 'is-danger');
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Storage
class Store {
    static addABook(book) {
        const books = this.retrieveBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static delABook(isbn) {
        const books = this.retrieveBooks();
        books.forEach(function (book, index) {
            if (isbn === book.isbn) {
                books.splice(index, 1);
                localStorage.setItem('books', JSON.stringify(books));
            }
        });
    }

    static retrieveBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const ui = new UI();
        const books = this.retrieveBooks();
        books.forEach(function (book) {
            ui.addABook(book);
        });
    }

}

// Load
document.addEventListener('DOMContentLoaded', function(e) {
   e.preventDefault();
   document.getElementById('notification').style.display = 'none';
   Store.displayBooks();
});


// Submit button
document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    const titleUI = document.getElementById('title');
    const authorUI = document.getElementById('author');
    const isbnUI = document.getElementById('isbn');
    let ui = new UI();

    if (titleUI.value === '' || authorUI.value === '' || isbnUI.value === '') {
        ui.showNotification("Please fill in all fields.", "is-danger");
    } else {
        const book = new Book(titleUI.value, authorUI.value, isbnUI.value);
        const resultAddABook = ui.addABook(book);
        if (resultAddABook) {
            ui.showNotification("A new book added.", 'is-success');
            Store.addABook(book);
            ui.clearFields();
        } else {
            ui.showNotification("A new book add failed.", 'is-danger');
        }
    }
});

// Delete button
document.getElementById('books').addEventListener('click', function(e) {
    const ui = new UI();
    ui.delABook(e.target);
    Store.delABook(e.target.parentElement.previousElementSibling.textContent);
});