// Bubbling events
// Capturing events
const grandParent = document.querySelector(".grandParent");

// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const body = document.body;

// child.addEventListener("click", () => {
//   console.log("You Clicked child");
//   document.body.style.backgroundColor = "#311122";
// });

// parent.addEventListener("click", () => {
//   console.log("You Clicked parent");
//   document.body.style.backgroundColor = "#3D9422";
// });

// grandParent.addEventListener("click", () => {
//   console.log("You Clicked grandParent");
//   document.body.style.backgroundColor = "#9D9494";
// });

// body.addEventListener("click", () => {
//   console.log("You Clicked BODY");
//   document.body.style.backgroundColor = "#3D9494";
// });

// child.addEventListener(
//   "click",
//   () => {
//     console.log("You capture !!!!! child");
//     document.body.style.backgroundColor = "#311122";
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("You capture !!!!! parent");
//     document.body.style.backgroundColor = "#3D9422";
//   },
//   true
// );

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("You capture !!!!! grandParent");
//     document.body.style.backgroundColor = "#9D9494";
//   },
//   true
// );

// body.addEventListener(
//   "click",
//   () => {
//     console.log("You capture !!!!! BODY");
//     document.body.style.backgroundColor = "#3D9494";
//   },
//   true
// );
grandParent.addEventListener("click", () => {
  console.log("you clicked grand-parent");
});
