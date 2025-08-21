"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//15. Create a Library class that can store Book and User objects. Add method to add books.
exports.Library = exports.User1 = exports.Book1 = void 0;
class Book1 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
exports.Book1 = Book1;
class User1 {
    constructor(name) {
        this.name = name;
    }
}
exports.User1 = User1;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    listBooks() {
        console.log("Books in library:");
        this.books.forEach((book) => console.log(`${book.title} by ${book.author}`));
    }
    listUsers() {
        console.log("Users in library:");
        this.users.forEach((user) => console.log(user.name));
    }
}
exports.Library = Library;
