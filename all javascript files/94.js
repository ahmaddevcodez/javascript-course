function functionCheaker() {
  return function () {
    if (!functionCheaker.called) {
      console.log("I am here");
      functionCheaker.called = true;
    } else {
      console.log("I am already here");
    }
  };
}

functionCheaker.called = false;
let ans = functionCheaker();
ans();
ans();
// Calling the function for the first time
// functionCheaker(); // Output: "I am here"

// Calling the function again
// functionCheaker(); // Output: "I am already here"

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi You Called me");
      counter++;
    } else {
      console.log("Mai already ek bar call ho cuka hou");
    }
  };
}
const myFunc = func();
myFunc();
myFunc();
