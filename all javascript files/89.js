// FUNCTION EXECUTION CONTEXT

let woo = "woo"; //  1
console.log(woo); //  2
function getFullName(firstName, lastName) {
  //  3 all  function in line 3
  console.log(arguments);
  let myVar = "var inside func";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}
const personName = getFullName("Ahmad", "tahir"); //  4
console.log(personName); //  5
