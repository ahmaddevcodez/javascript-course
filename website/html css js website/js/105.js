//change style of elements

const main_heading = document.querySelector("div.headline h2");
// var main_heading = document.getElementById("main_heading");
main_heading.style.border = "13px groove #0C8DCC";
main_heading.style.borderRadius = "20px";
main_heading.style.padding = "10px";
main_heading.style.width = "100%";
main_heading.style.backgroundColor = "invisible";

const nav = document.querySelector(".nav");

nav.style.width = "90%";
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";
nav.style.minHeight = "15vh";

const header = document.querySelector(".header");
header.style.minHeight = "80vh";
