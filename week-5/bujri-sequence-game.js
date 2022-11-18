// ==========================================================
//     ; Title: Assignment 5.2
//     ; Author: Ngi Bujri
//     ; Date: 14 November 2022
//     ; Description: Sequence game demonstrating loops
// ==========================================================

const displayResults = document.getElementById("display-results");

// Generate string of fibonacci sequence less than 40
function generateFibonacciSequence() {
  let num1 = 0;
  let num2 = 1;
  let next = null;
  let fibonacciSequenceText = "";

  while (next < 40) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    fibonacciSequenceText += `${num1}, `;
  }

  displayResults.innerText = fibonacciSequenceText.slice(0, -2);
}

// Generate string of even numbers less than 20
function generateEvenNumbers() {
  let num = 0;
  let evenNumbersText = "";
  do {
    num += 1;
    // Append only if number is even
    if (num % 2 === 0) {
      evenNumbersText += `${num}, `;
    }
  } while (num < 19);

  // Remove comma for last number
  displayResults.innerHTML = evenNumbersText.slice(0, -2);
}

// Generate string of odd numbers less than 20
function generateOddNumbers() {
  let num = 0;
  let oddNumbersText = "";
  do {
    num += 1;
    // Append only if number is odd
    if (num % 2 !== 0) {
      oddNumbersText += `${num}, `;
    }
  } while (num < 19);

  // Remove comma for last number
  displayResults.innerHTML = oddNumbersText.slice(0, -2);
}

document.getElementById("btnDisplaySequence").onclick = function () {
  const choice = document.getElementById("sequence").value;

  // call function according to selected option
  if (choice == "select") {
    alert("Invalid selection, please try again!");
  } else if (choice == "fibonacci") {
    generateFibonacciSequence();
  } else if (choice == "even") {
    generateEvenNumbers();
  } else if (choice == "odd") {
    generateOddNumbers();
  }
};
