// closures

// FUNCTION CAN RETURN FUNCTION
// function outerFunction() {
//   function innerFuction() {
//     console.log("ahmad");
//   }
//   return innerFuction;
// }
// let functionReturnedVAlue = outerFunction();
// functionReturnedVAlue();

function printFullName(firstName, lastName) {
  function innerFuction() {
    console.log(firstName, lastName);
  }
  return innerFuction;
}
let functionReturnedVAlue = printFullName(
  "ahmad".toUpperCase(),
  "Tahir".toLowerCase()
);
functionReturnedVAlue();
