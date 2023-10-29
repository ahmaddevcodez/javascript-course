// GET AND SET ATTRIBUTE
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

const a = document.querySelector(".form-todo input");
console.log(a.getAttribute("type"));
