// closures example no 3

// METHOD NO.1 TO CREATE

// function calculateSquare(number) {
//   return number ** 2;
// }

// const inputNumber = 2;
// const squareResult = calculateSquare(inputNumber);
// console.log(squareResult);

// METHOD NO.2 TO CREATE
function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}
const cube = myFunction(999);
const ans = cube(9);
console.log(ans);
