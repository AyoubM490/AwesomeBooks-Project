export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.store = window.localStorage;
  }

  static books = [];

  addNewBook() {
    Book.books.push({ title: this.title, author: this.author });
    this.store.setItem("books", JSON.stringify(Book.books));
  }

  static removeBook(title) {
    Book.books = Book.books.filter((book) => book.title !== title);
    store.setItem("books", JSON.stringify(Book.books));
  }
}
