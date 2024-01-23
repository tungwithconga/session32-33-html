class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}, Available: ${this.isAvailable}`);
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Book "${this.title}" has been borrowed.`);
        } else {
            console.log(`Book "${this.title}" is not available for borrowing.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" is already available.`);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAllBooks() {
        console.log("Library Books:");
        this.books.forEach((book, index) => {
            console.log(`\nBook ${index + 1}:`);
            book.displayInfo();
        });
    }

    isBookAvailable(bookTitle) {
        const book = this.books.find(book => book.title === bookTitle);
        if (book) {
            return book.isAvailable;
        } else {
            console.log(`Book "${bookTitle}" not found in the library.`);
            return false;
        }
    }
}

let myLibrary = new Library();

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("1984", "George Orwell", 1949);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.displayAllBooks();

book1.borrow();
book2.borrow();
book2.returnBook();
book3.borrow();

console.log("\nCheck book availability:");
console.log(`Book "The Great Gatsby" availability: ${myLibrary.isBookAvailable("The Great Gatsby")}`);
console.log(`Book "To Kill a Mockingbird" availability: ${myLibrary.isBookAvailable("To Kill a Mockingbird")}`);
console.log(`Book "1984" availability: ${myLibrary.isBookAvailable("1984")}`);
console.log(`Book "Nonexistent Book" availability: ${myLibrary.isBookAvailable("Nonexistent Book")}`);
