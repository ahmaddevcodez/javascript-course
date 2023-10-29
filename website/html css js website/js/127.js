// synchronous programming vs asynchronous programming
// synchronous programming
// console.log("Script Starts");
// for (let i = 1; i < 11; i++) {
//   console.log("Script is working");
// }
// console.log("Script Ends");
console.log("script start");
setTimeout(() => {
  console.log("inside setTimeout");
}, 0);
for (let i = 1; i <= 100; i++) {
  console.log("....");
}
console.log("Script end");
