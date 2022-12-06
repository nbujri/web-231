// ==========================================================
//     ; Title: Assignment 8.2
//     ; Author: Ngi Bujri
//     ; Date: 5 December 2022
//     ; Description: demonstration of arrays
// ==========================================================

// DOM elements
const txtPosition = document.getElementById("txt-position");
const btnFindLetter = document.getElementById("btn-find-letter");
const alphabetsDisplay = document.getElementById("alphabet");
const resultsDisplay = document.getElementById("alphabet-letter");

// array of alphabets
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let alphabetOutput = "";

for (const letter in alphabet) {
  alphabetOutput += `${alphabet[letter]}, `;
}

alphabetsDisplay.textContent = alphabetOutput.toUpperCase().slice(0, -2);

btnFindLetter.onclick = () => {
  const pos = parseInt(txtPosition.value);
  const letter = alphabet[pos - 1];

  if (letter === undefined) {
    resultsDisplay.textContent = `There are not ${pos} letters in the alphabet`;
  } else {
    resultsDisplay.textContent = `${letter.toUpperCase()} is at position ${pos} in the alphabet`;
  }
};
