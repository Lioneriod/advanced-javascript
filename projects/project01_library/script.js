// Basic Functions as asked
const books = [];
function Book(title, author, pages, year) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = read;
}

// Website interactivity (the basics)
const libraryArea = document.querySelector(".mainArea");
const popup = document.getElementById("popupOverlay");
const registerButton = document.getElementById("registerButton");
const closeButton = document.getElementById("closeButton");

// Popup and buttons
registerButton.addEventListener("click", () => {
  popup.style.display = "grid";
});

closeButton.addEventListener("click", () => {
  popup.style.animation = "fadeOutMove 0.3s ease";
  popup.addEventListener(
    "animationend",
    () => {
      popup.style.display = "none";
      popup.style.animation = "";
    },
    { once: true },
  );
});

window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.animation = "fadeOutMove 0.3s ease";
    popup.addEventListener(
      "animationend",
      () => {
        popup.style.display = "none";
        popup.style.animation = "";
      },
      { once: true },
    );
  }
};

// Getting the form/popup info
const confirmButton = document.getElementById("confirmButton");

let = cardTitle = document.getElementById("title");
let = cardAuthor = document.getElementById("author");
let = cardPages = document.getElementById("pages");
let = cardYear = document.getElementById("year");
let = cardRead = document.getElementById("read");

let cardForm = document.getElementById("registerForm");
cardForm.addEventListener("submit", (event) => {
  popup.style.animation = "fadeOutMove 0.3s ease";
  popup.addEventListener(
    "animationend",
    () => {
      popup.style.display = "none";
      popup.style.animation = "";
    },
    { once: true },
  );
  event.preventDefault();
});
