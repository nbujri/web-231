// ==========================================================
//     ; Title: Assignment 3.2
//     ; Author: Ngi Bujri
//     ; Date: 2 November 2022
//     ; Description: App that converts fahrenheit to celsius
// ==========================================================

document.getElementById("btnConvert").onclick = function () {
  // get value of txtFahrenheit
  const fahrenheit = document.getElementById("txtFahrenheit").value;

  // convert fahrenheit to number and format to two decimal places
  // parseFloat() used twice because .toFixed returns a string
  const celsius = parseFloat(((parseFloat(fahrenheit) - 32) / 1.8).toFixed(2));

  if (!isNaN(celsius)) {
    document.getElementById("conversionResults").innerHTML = celsius;
  } else {
    alert("ENTER A VALID NUMBER!");
  }
};
