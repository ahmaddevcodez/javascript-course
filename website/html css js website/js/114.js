const todoItem = document.querySelector(".todo-list");
console.log(todoItem);

todoItem.insertAdjacentHTML(
  "beforeend",
  '<li class="nav-item"><a href="#home">Home</a></li>'
);
todoItem.insertAdjacentHTML("beforebegin", "<h1>Ahmad Tahir</h1>");
todoItem.insertAdjacentHTML("afterbegin", "<h1>Ahmad Tahir</h1>");
