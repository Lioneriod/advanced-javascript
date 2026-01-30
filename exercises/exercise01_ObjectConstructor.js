function Exist(exists) {
  this.exists = exists;
}

Exist.prototype.doesItExist = function () {
  console.log("I do exist!");
};

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.sayInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

Object.setPrototypeOf(Book.prototype, Exist.prototype);

const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 310, "Read");
console.log(theHobbit.sayInfo(), theHobbit.doesItExist());
