//15. Create a Library class that can store Book and User objects. Add method to add books.

export class Book1 {
    constructor(public title: string, public author: string) {}
}

export class User1 {
    constructor(public name: string) {}
}

export class Library {
    private books: Book1[] = [];
    private users: User1[] = [];

    addBook(book: Book1): void {
        this.books.push(book);
    }

    addUser(user: User1): void {
        this.users.push(user);
    }
    listBooks(): void {
        console.log("Books in library:");
        this.books.forEach((book: Book1) => console.log(`${book.title} by ${book.author}`));
    }

    listUsers(): void {
        console.log("Users in library:");
        this.users.forEach((user: User1) => console.log(user.name));
    }
}