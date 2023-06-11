// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array
// let myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }

function openNewBookWindow() {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Book Name');

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'text');
    pagesInput.setAttribute('placeholder', 'Number of Pages');

    const authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('placeholder', 'Author');

  }

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

  // Event listener for the create button
  const createButton = document.getElementById('create-button');
  createButton.addEventListener('click', openNewBookWindow);