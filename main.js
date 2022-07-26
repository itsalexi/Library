const libraryDiv = document.querySelector(".library");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBook(title, author, pages, read) {
  // Create new book from Book constructor
  // Add to the myLibrary array
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  updateLibrary();
}

function updateLibrary() {
  resetLibrary();
  createNewElements();
}

function resetLibrary() {
  // resets the library div
  libraryDiv.innerHTML = "";
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  updateLibrary();
}

function createNewElements() {
  for (let book in myLibrary) {
    const bookElement = document.createElement("div");
    const titleElement = document.createElement("p");
    const authorElement = document.createElement("p");
    const pagesElement = document.createElement("p");
    const readElement = document.createElement("button");
    const removeElement = document.createElement("button");

    bookElement.classList.add("book");

    titleElement.classList.add("bookTitle");
    authorElement.classList.add("author");
    pagesElement.classList.add("pages");
    readElement.classList.add("bookButton");
    removeElement.classList.add("bookButton", "remove");

    titleElement.textContent = `"${myLibrary[book].title}"`;
    authorElement.textContent = `By ${myLibrary[book].author}`;
    pagesElement.textContent = `${myLibrary[book].pages} pages`;

    removeElement.textContent = "Remove";

    if (myLibrary[book].read) {
      readElement.textContent = "Read";
      readElement.classList.add("read");
    } else {
      readElement.textContent = "Not read";
      readElement.classList.add("notread");
    }
    bookElement.dataset.index = book;
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    bookElement.appendChild(removeElement);

    libraryDiv.appendChild(bookElement);
  }
}

function readBook(index, e) {
  console.log(myLibrary[index]);
  myLibrary[index].read
    ? (myLibrary[index].read = false)
    : (myLibrary[index].read = true);

  e.classList.toggle("read");
  e.classList.toggle("notread");
  updateLibrary();
}

function findButton(e) {
  if (e.target.tagName !== "BUTTON") return;
  let classes = e.target.classList;
  let parent = e.target.parentNode;
  let element = e.target;

  if (classes.contains("headerButtons")) {
    if (classes.contains("addBook")) {
      // TODO: open a modal
    }
  }
  if (classes.contains("bookButton")) {
    let index = parent.getAttribute("data-index");
    console.log(`Current index: ${index}`);
    if (classes.contains("read") || classes.contains("notread")) {
      readBook(index, element);
    } else if (classes.contains("remove")) {
      removeBook(index);
    }
  }

  //   console.log(`${classes} \n${parent}`);
}

// Modal Code

let modal = document.querySelector(".modal");
let modalbutton = document.getElementById("addBook");
let cancelButton = document.getElementById("cancelModal");
let addButton = document.getElementById("addModalButton");

let titleInput = document.getElementById("titleInput");
let authorInput = document.getElementById("authorInput");
let pagesInput = document.getElementById("pagesInput");
let readBox = document.getElementById("readInput");
let addBookForm = document.getElementById("modalForm");
modalbutton.onclick = function () {
  modal.style.display = "flex";
};

cancelButton.onclick = function () {
  modal.style.display = "none";
};

function addModalBook() {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readBox.checked;
  createBook(title, author, pages, read);
  modal.style.display = "none";
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readBox.checked = false;
}

addBookForm.submit = addModalBook;

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("click", findButton);
// TODO
// Create a function that creates a new book and adds it to the Library array (then call the update Library array)
// Create a function that updates the Library Div (reset the library Div and create new Elements for each book)
// Create a function that creates new elements for each book.
// Create a function that resets the Library Div
