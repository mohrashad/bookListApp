import { Book, Store } from './bookController.js';
import UI from './uiCntroller.js';
import elements from './base.js' ;

// event: Display book
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// event: Add a book
elements.bookForm.addEventListener('submit', e => {
    // prevent default submit action
    e.preventDefault();

    // get form input values
    const bookDataInput = (id) => document.getElementById(id).value;
    const title = bookDataInput('title');
    const author = bookDataInput('author');
    const isbn = bookDataInput('isbn');

    // validate form fields
    if (title === '' || author === '' || isbn === '') {
        if (!elements.alertBox) {
            UI.showAlerts('Please fill in all fields', 'danger');
        }
    }else {
        // create an instance from book class
        const book = new Book(title, author, isbn);

        // add a book to UI
        UI.addBookToList(book);

        // add book to store
        Store.addBook(book);

        // show success message
        if (!elements.alertBox) {
            UI.showAlerts('Book had been added successfully', 'success');
        }

        // clear Fileds
        UI.clearFields();
    }
});

// event: Remove a book
elements.bookList.addEventListener('click', e => {

    // remove a book from UI
    UI.deleteBook(e.target);

    // remove a book from a store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show success message
    if (!elements.alertBox) {
        UI.showAlerts('Book had been removed successfully', 'success');
    }
});