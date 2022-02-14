// eslint-disable-next-line import/prefer-default-export
export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static books = [];

  static store = window.localStorage;

  addNewBook() {
    Book.books.push({ title: this.title, author: this.author });
    Book.store.setItem('books', JSON.stringify(Book.books));
  }

  static removeBook(title) {
    Book.books = Book.books.filter((book) => book.title !== title);
    Book.store.setItem('books', JSON.stringify(Book.books));
  }
}
