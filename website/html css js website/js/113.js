const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Ahmad";
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);
todoList.prepend(newTodoItem);
console.log(newTodoItem);
// const textNode = document.createTextNode("AHMAD TAHIR");
// newTodoElemnt.append(textNode);
// console.log(newTodoElemnt);
// // const todoItem = document.querySelector(".todo-list button ");
// todoItem.remove();

// const newTodoElement = document.createElement("li");
// newTodoElement.textContent = "Ahmad Tahir";
// newTodoElement.style.listStyle = "none";
// // const todoItem = document.querySelector(".todo-list");
// todoItem.before(newTodoElement);
// todoItem.after(newTodoElement);
