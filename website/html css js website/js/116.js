// querySelectorAll hame static list de giii
// GetElementSomething hama live list de giii

// Select all the existing list items
// const listItems = document.querySelectorAll(".todo-list li");
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
// Create a new list item
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

// Select the unordered list (ul) element
// const ul = document.querySelector(".todo-list");

// Append the new list item to the ul
ul.appendChild(sixthLi);

// Print the list of all list items again
console.log(listItems);

// const listItems = document.querySelectorAll(".todo-list li");
// const myArray = new Array(5).fill("Ahamd");
// let ans = myArray;

// const myArray = new Array(6).fill("Ahmad");

// listItems.forEach((item, index) => {
//   item.textContent = myArray[index];
// });
// console.log(listItems);
