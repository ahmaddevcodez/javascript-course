let body = document.getElementsByTagName("body");
//
//
//
//
const buttons = document.querySelectorAll(".container button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     document.body.style.backgroundColor = "#3D9494";
//     console.dir(this.nodeName);
//     console.dir(this.textContent);

//     console.dir(this);
//   });
// }
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     document.body.style.backgroundColor = "#3D9494";
//     console.dir(this.nodeName);
//     console.dir(this.textContent);
//     console.dir(this);
//   });
// }

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.body.style.backgroundColor = "#3D9494";
  });
});

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     document.body.style.backgroundColor = "#5D9494";
//   });
// });
