// Introduction to Event Handling
// Click Event
// Three ways to attach event listeners

const btn = document.querySelector(".btn");

// function onClick() {
//   console.log("Button Clicked");
// }
// Method Add Event listener

// btn.addEventListener("click", function () {
//   console.log("Button Clicked");
// });
btn.addEventListener("click", () => {
  console.log("Button Clicked");
});
