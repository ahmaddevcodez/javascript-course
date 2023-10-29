// Constructor function
function Name(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

// Prototype method
Name.prototype.printInfo = function () {
  console.log(
    "name of user is",
    this.firstName.toUpperCase(),
    "and age of user",
    this.age + ""
  );
};

// Create a new instance using the constructor
const newName = new Name("ahmad", 12);

console.log(newName); // Output: Name { firstName: 'ahmad', age: 12 }
newName.printInfo(); // Output: ahmad 12
