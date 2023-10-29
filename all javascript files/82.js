//  HAS OWN PROPERTY //
function CreateUser(name, age, address, email, country) {
  this.name = name;
  this.address = address;
  this.age = age;
  this.email = email;
  this.country = country;
}

CreateUser.prototype.about = function () {
  return `userName is ${this.name} and age is ${this.age}`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "lalalalaalalallalaaaaa";
};

const dataUser1 = new CreateUser(
  "Ahmad",
  12 + 3,
  "my address",
  "ahmadtahir1399@gmail.com",
  "pakistan"
);
const dataUser2 = new CreateUser(
  "ali",
  12 + 9,
  "my address",
  "ali1399@gmail.com",
  "azarbhaijan"
);
const dataUser3 = new CreateUser(
  "azhar",
  12 + 19,
  "my address",
  "azhar1399@gmail.com",
  "azarbhaijan"
);
// console.log(dataUser1.about());
// console.log(dataUser2.about());
// console.log(dataUser3.about());
for (let key in dataUser1) {
  // console.log(key);
  if (dataUser1.hasOwnProperty(key)) {
    console.log(key);
  }
}
