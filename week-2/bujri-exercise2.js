// ; Title: Exercise 2.2 - Hello JavaScript
// ; Author: Ngi Bujri
// ; Date: 24 October 2022
// ; Description: Script for bujri-exercise2.html

const txtMyWorld = document.querySelector(".txt-my-world");
const btnMyCourse = document.querySelector("#btn-my-course");

txtMyWorld.innerHTML = "You are now in Bujri's world!";
btnMyCourse.addEventListener("click", function () {
  alert("WEB 231 - Enterprise JavaScript I");
});
