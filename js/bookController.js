// Book class: Add new book
export class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// store calss: store book data in local storage
export class Store {
    static getBooks() {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, idx) => {
            if (book.isbn === isbn) {
                books.splice(idx, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}