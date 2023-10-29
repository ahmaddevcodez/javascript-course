// const toDoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// const toDoList = document.querySelector(".todo-list");

// toDoForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const newTodoItem = todoInput.value.trim(); // Trim to remove leading/trailing spaces

//   if (newTodoItem !== "") {
//     // Check if it's not empty
//     const newli = document.createElement("li");

//     const newInnerHtml = `
//       <span class="text">${newTodoItem}</span>
//       <div class="todo-buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//       </div>
//     `;

//     newli.innerHTML = newInnerHtml;
//     toDoList.append(newli);
//     todoInput.value = "";
//   }
// });

// toDoList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("done")) {
//     const lispan = e.target.parentNode.previousElementSibling;
//     console.log(lispan);
//     lispan.style.textDecoration = "line-through";
//   }
//   if (e.target.classList.contains("remove")) {
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
// });
// Select elements
const toDoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const toDoList = document.querySelector(".todo-list");

// Function to create a new todo item
function createTodoItem(text) {
  const newLi = document.createElement("li");

  const newInnerHtml = `
    <span class="text">${text}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `;

  newLi.innerHTML = newInnerHtml;
  return newLi;
}

// Function to mark a todo item as done
function markAsDone(item) {
  item.querySelector(".text").style.textDecoration = "line-through";
}

// Function to remove a todo item
function removeTodoItem(item) {
  item.remove();
}

// Event listener for form submission
toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodoItemText = todoInput.value.trim();

  if (newTodoItemText !== "") {
    const newTodoItem = createTodoItem(newTodoItemText);
    toDoList.appendChild(newTodoItem);
    todoInput.value = "";
  }
});

// Event listener for todo list actions
toDoList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("done")) {
    markAsDone(target.closest("li"));
  }

  if (target.classList.contains("remove")) {
    removeTodoItem(target.closest("li"));
  }
});
