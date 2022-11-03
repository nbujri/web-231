// ==========================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 2 November 2022
//     ; Description: App that converts fahrenheit to celsius
// ==========================================================

const btnConvert = document.querySelector("#btnConvert");
const conversionResults = document.querySelector("#conversionResults");

btnConvert.addEventListener("click", function () {
  // convert txtFahrenheit string to number
  const fahrenheit = parseFloat(document.querySelector("#txtFahrenheit").value);
  // convert to celsius
  const celsius = ((fahrenheit - 32) / 1.8).toFixed(2);

  // check if input is not NaN
  if (!isNaN(fahrenheit)) {
    conversionResults.innerHTML = celsius;
  } else {
    alert("ENTER A VALID NUMBER!");
  }
});
