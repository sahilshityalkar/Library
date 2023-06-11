// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array
// let myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }

  // Function to create a new book element
  function createBook(name, pages, author) {
    const mainContent = document.getElementById('main-content');

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;

    const pagesParagraph = document.createElement('p');
    pagesParagraph.textContent = `Pages: ${pages}`;

    const authorParagraph = document.createElement('p');
    authorParagraph.textContent = `Author: ${author}`;

    bookDiv.appendChild(nameHeading);
    bookDiv.appendChild(pagesParagraph);
    bookDiv.appendChild(authorParagraph);

    mainContent.appendChild(bookDiv);
  }