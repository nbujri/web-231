// ==========================================================
//     ; Title: Assignment 6.2
//     ; Author: Ngi Bujri
//     ; Date: 21 November 2022
//     ; Description: Assignment demonstrating use of objects
// ==========================================================

// get DOM elements
const books = document.getElementById("favorite-books");
const authors = document.getElementById("favorite-authors");
const btnDisplayListings = document.getElementById("btn-display-listing");
const dropDown = document.getElementById("favorite-list");
const booksTable = document.getElementById("books-table");
const authorsTable = document.getElementById("authors-table");

// set tables display to none
// books.style.display = "none";
// authors.style.display = "none";

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

// store books and authors in array
let bookArr = [book1, book2, book3];
let authorArr = [author1, author2, author3];

// populate favorite books table
function populateBookTable() {
  bookArr.forEach(function (book) {
    // create row for each book
    const tr = document.createElement("tr");
    for (const key in book) {
      // create table data for each property
      const td = document.createElement("td");
      td.textContent = book[key];

      tr.appendChild(td);
    }
    booksTable.appendChild(tr);
  });
}

function populateAuthorTable() {
  authorArr.forEach(function (author) {
    // create row for each book
    const tr = document.createElement("tr");
    for (const key in author) {
      // create table data for each property
      const td = document.createElement("td");
      td.textContent = author[key];

      tr.appendChild(td);
    }
    authorsTable.appendChild(tr);
  });
}

populateBookTable();
populateAuthorTable();

// events
btnDisplayListings.onclick = function () {
  const choice = dropDown.value;
  console.log(choice);
};
