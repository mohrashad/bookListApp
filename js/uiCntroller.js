import { Store } from './bookController.js';
import elements from './base.js' ;

// ui class: handle books data in UI
export default class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const html = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            </tr>
        `;
        elements.bookList.insertAdjacentHTML('beforeend', html);
    }

    static deleteBook(el) {
        if (el.matches('.delete')) {
            el.parentElement.parentElement.remove();
        }   
    }

    static showAlerts(msg, className) {
        const html = `<div class="alert alert-${className}">${msg}</div>`;
        elements.bookForm.insertAdjacentHTML('beforebegin', html);

        // remove alert after 1 second
        setTimeout(() => document.querySelector('.alert').remove(), 1500);
    }

    static clearFields() {
        elements.titleInput.value = '';
        elements.authorInput.value = '';
        elements.isbnInput.value = '';
    }
}