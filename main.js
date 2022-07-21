const libraryDiv = document.querySelector(".library");

const bookElement = document.createElement("div");
const titleElement = document.createElement("p");
const authorElement = document.createElement("p");
const pagesElement = document.createElement("p");
const readElement = document.createElement("button");
const removeElement = document.createElement("button");

bookElement.classList.add("book");

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
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function updateLibrary() {

}

function resetLibrary() {
  libraryDiv.innerHTML = "";
}

// TODO
// Create a function that creates a new book and adds it to the Library array (then call the update Library array)
// Create a function that updates the Library Div (reset the library Div and create new Elements for each book)
// Create a function that creates new elements for each book.
// Create a function that resets the Library Div
