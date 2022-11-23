// ==========================================================
//     ; Title: Assignment 6.2
//     ; Author: Ngi Bujri
//     ; Date: 21 November 2022
//     ; Description: Assignment demonstrating use of objects
// ==========================================================

// objects
const book1 = {
  isbn: "1506715214",
  title: "Berserk Volume 4",
  pages: 704,
};

const book2 = {
  isbn: "0316497541",
  title: "The Witcher: The Last Wish",
  pages: 352,
};

const book3 = {
  isbn: "0547928211",
  title: "The Lord of The Rings: The Fellowship of The Ring",
  pages: 432,
};

const author1 = {
  name: "Kentaro Miura",
  genre: "Fantasy",
};

const author2 = {
  name: "Andrzej Sapkowski",
  genre: "Fantasy",
};

const author3 = {
  name: "J.R.R Tolkien",
  genre: "Fantasy",
};

// get DOM elements
const books = document.getElementById("favorite-books");
const authors = document.getElementById("favorite-authors");
const btnDisplayListings = document.getElementById("btn-display-listing");
const dropDown = document.getElementById("favorite-list");
const booksTable = document.getElementById("books-table");
const authorsTable = document.getElementById("authors-table");

// td elements for books
const berserkISBN = document.getElementById("berserk-isbn");
const berserkTitle = document.getElementById("berserk-title");
const berserkPages = document.getElementById("berserk-pages");
const witcherISBN = document.getElementById("witcher-isbn");
const witcherTitle = document.getElementById("witcher-title");
const witcherPages = document.getElementById("witcher-pages");
const fellowshipISBN = document.getElementById("fellowship-isbn");
const fellowshipTitle = document.getElementById("fellowship-title");
const fellowshipPages = document.getElementById("fellowship-pages");

// td elements for authors
const kentaro = document.getElementById("kentaro");
const kentaroGenre = document.getElementById("kentaro-genre");
const andrzej = document.getElementById("andrzej");
const andrzejGenre = document.getElementById("andrzej-genre");
const jrr = document.getElementById("jrr");
const jrrGenre = document.getElementById("jrr-genre");

// set text for tables
berserkISBN.textContent = book1["isbn"];
berserkTitle.textContent = book1["title"];
berserkPages.textContent = book1["pages"];
witcherISBN.textContent = book2["isbn"];
witcherTitle.textContent = book2["title"];
witcherPages.textContent = book2["pages"];
fellowshipISBN.textContent = book3["isbn"];
fellowshipTitle.textContent = book3["title"];
fellowshipPages.textContent = book3["pages"];

kentaro.textContent = author1["name"];
kentaroGenre.textContent = author1["genre"];
andrzej.textContent = author2["name"];
andrzejGenre.textContent = author2["genre"];
jrr.textContent = author3["name"];
jrrGenre.textContent = author3["genre"];

// set tables display to none
books.style.display = "none";
authors.style.display = "none";

// events
btnDisplayListings.onclick = function () {
  const choice = dropDown.value;

  if (choice === "books") {
    authors.style.display = "none";
    books.style.display = "block";
  } else if (choice === "authors") {
    books.style.display = "none";
    authors.style.display = "block";
  } else {
    books.style.display = "none";
    authors.style.display = "none";
  }
};
