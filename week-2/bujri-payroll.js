// ; Title: Assignment 2.3 - Values and Variables
// ; Author: Ngi Bujri
// ; Date: 25 October 2022
// ; Description: assignment demonstrating our understanding of how to declare
// ;              and define JavaScript variables

const txtFirstNameLudwig = document.querySelector("#txt-first-name-ludwig");
const txtLastNameBeethoven = document.querySelector("#txt-last-name-beethoven");
const txtAddressLudwig = document.querySelector("#txt-address-ludwig");
const txtHireDateLudwig = document.querySelector("#txt-hire-date-ludwig");
const txtPayRateLudwig = document.querySelector("#txt-pay-rate-ludwig");

const txtFirstNameJohann = document.querySelector("#txt-first-name-johann");
const txtLastNameBach = document.querySelector("#txt-last-name-bach");
const txtAddressJohann = document.querySelector("#txt-address-johann");
const txtHireDateJohann = document.querySelector("#txt-hire-date-johann");
const txtPayRateJohann = document.querySelector("#txt-pay-rate-johann");

const txtFirstNameWolfgang = document.querySelector("#txt-first-name-wolfgang");
const txtLastNameMozart = document.querySelector("#txt-last-name-mozart");
const txtAddressWolfgang = document.querySelector("#txt-address-wolfgang");
const txtHireDateWolfgang = document.querySelector("#txt-hire-date-wolfgang");
const txtPayRateWolfgang = document.querySelector("#txt-pay-rate-wolfgang");

txtFirstNameLudwig.innerHTML = "Ludwig";
txtFirstNameJohann.innerHTML = "Johann";
txtFirstNameWolfgang.innerHTML = "Wolfgang";

txtLastNameBeethoven.innerHTML = "Beethoven";
txtLastNameBach.innerHTML = "Bach";
txtLastNameMozart.innerHTML = "Mozart";

txtAddressLudwig.innerHTML = "505 main street";
txtAddressJohann.innerHTML = "512 main street";
txtAddressWolfgang.innerHTML = "600 main street";

txtHireDateLudwig.innerHTML = new Date().toLocaleDateString("en-US");
txtHireDateJohann.innerHTML = new Date().toLocaleDateString("en-US");
txtHireDateWolfgang.innerHTML = new Date().toLocaleDateString("en-US");

txtPayRateLudwig.innerHTML = (18.91).toFixed(1);
txtPayRateJohann.innerHTML = (25.51).toFixed(1);
txtPayRateWolfgang.innerHTML = (50.11).toFixed(1);
