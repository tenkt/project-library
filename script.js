let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`
  }
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read');
console.log(theHobbit.info());

function addBookToLibrary() {
  // do stuff here
  return myLibrary.push(new Book.info());
}
addBookToLibrary();

console.log(myLibrary);