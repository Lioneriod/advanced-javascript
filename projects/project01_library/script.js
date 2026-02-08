// Basic Functions as asked
const books = [];
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Website interactivity (the basics)
const libraryArea = document.querySelector(".mainArea");
const popup = document.getElementById("popupOverlay");
const registerButton = document.getElementById("registerButton");
const confirmButton = document.getElementById("confirmButton");
const closeButton = document.getElementById("closeButton");

// Popup and buttons
registerButton.addEventListener("click", () => {
  popup.style.display = "grid";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

// Getting the popup info
confirmButton.addEventListener("click", () => {});
