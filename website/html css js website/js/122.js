// // Corrected selector to use querySelectorAll
// const allButtons = document.querySelectorAll(".container button");

// console.log("script start !!!!!");

// // Use forEach directly on the NodeList
// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     let num = 0;
//     // This loop has been reduced to a reasonable value
//     for (let i = 0; i <= 10000000; i++) {
//       num += i;
//     }
//     console.log(e.currentTarget.textContent, num);
//   });
// });

// let outerVar = 0;

// // This loop has been reduced to a reasonable value
// for (let i = 0; i <= 10000000; i++) {
//   outerVar += i;
// }

// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!");
