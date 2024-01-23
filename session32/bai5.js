class Book {
    constructor(author, name) {
      this.author = author;
      this.name = name;
    }
  }
  
  const books = [
    new Book("Author1", "Book1"),
    new Book("Author2", "Book2"),
    new Book("Author3", "Book3"),
  ];
  
  const authorToSearch = prompt("Nhập tên tác giả:");
  
  let foundBook = null;
  for (const book of books) {
    if (book.author.toLowerCase() === authorToSearch.toLowerCase()) {
      foundBook = book;
      break;
    }
  }
  if (foundBook) {
    console.log("Thông tin sách tìm được:");
    console.log("Tác giả:", foundBook.author);
    console.log("Tên sách:", foundBook.name);
  } else {
    console.log("Không tìm thấy sách");
  }
  