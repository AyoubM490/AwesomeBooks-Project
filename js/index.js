import { Book } from '../modules/Book.js';
import { DateTime } from '../modules/luxon.js';

const addBtn = document.getElementById('addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');

const addBook = (e) => {
  e.preventDefault();

  // update class
  const titleText = `"${title.value}"`;
  const book = new Book(titleText, author.value);
  book.addNewBook();
  title.value = '';
  author.value = '';

  // update ui
  const ul = document.querySelector('#book-list');
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'list-group-item-active');
  if (Book.books.length % 2 === 1) {
    li.classList.add('list-group-item-secondary');
  }

  const titleElem = document.createElement('p');
  titleElem.classList.add('title');
  titleElem.innerText = titleText;
  const authorElem = document.createElement('p');
  authorElem.classList.add('ms-2');
  authorElem.innerText = ` by ${author.value}`;
  const button = document.createElement('button');
  button.classList.add('ms-auto');
  button.innerText = 'Remove';
  button.addEventListener('click', (e) => {
    const liElem = e.target.parentElement;
    let title = liElem.querySelector('.title');
    title = title.innerText;
    Book.removeBook(title);
    liElem.remove();
    if (!Book.books.length) {
      document
        .querySelector('.list')
        .classList.remove('border', 'border-dark', 'border-2');
    }
  });

  if (Book.books.length) {
    let count = 0;
    do {
      document
        .querySelector('.list')
        .classList.add('border', 'border-dark', 'border-2');
      count += 1;
    } while (count === 1);
  }

  li.appendChild(titleElem);
  li.appendChild(authorElem);
  li.appendChild(button);

  ul.appendChild(li);
};

addBtn.addEventListener('click', addBook);

const navAnchs = document.querySelectorAll('nav ul li a');

navAnchs.forEach((a) => {
  function navFunction(e) {
    e.preventDefault();
    const sections = document.querySelectorAll('section');
    const linkTarget = e.target.href;
    sections.forEach((section) => {
      if (linkTarget.includes(section.id)) {
        section.classList.remove('d-none');
      } else {
        section.classList.add('d-none');
      }
    });
  }
  a.addEventListener('click', navFunction);
});

const date = document.querySelector('.date');
date.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_FULL)}`;
