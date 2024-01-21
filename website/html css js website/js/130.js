// function myFun(callback) {
//   console.log("Functiondscasklkl-1");
//   callback();
// }

// myFun(() => {
//   console.log("Functionqqqqqqqqq-2");
// }); // Pass myFun2 as a callback to myFun
// function getTwoNUmbers(num1, num2) {
//   console.log(num1, num2);
// }
// getTwoNUmbers(2,2)
function getTwoNumbersAndAdd(number1, number2, onsuccess, onerror) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onsuccess(number1, number2);
  } else {
    onerror();
  }
}

// function addTwoNumbers(num1, num2) {
//   console.log(num1 * num2 * 0);
// }
getTwoNumbersAndAdd(
  50,
  50,
  (num1, num2) => {
    console.log(num1 * num2);
  },
  () => {
    console.log("Wrong data type");
  }
);
