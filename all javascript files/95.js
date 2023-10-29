// LEXICAL ENVIRONMENT , SCOPE CHAIN
const lastName = "Tahir ";
const printName = function () {
  const firstName = "Ahmad";
  console.log(firstName);
  console.log(lastName);
};
printName();
