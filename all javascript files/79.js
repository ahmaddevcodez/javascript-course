// USE OF PROTOTYPE

// PROTOTYPE IS SIMPLY A OBJECT AND PROTO IS REFRENCE OF THE OBJECT

// const userMethodes = {
//   about: function () {
//     return `userName is ${this.name} and age is ${this.age}`;
//   },

//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "la lp lol m saaaaaaaam tu nanananan";
//   },
// };

// function createUser(name, age, address, email, country) {
//   const user = Object.create(createUser.prototype);
//   user.name = name;
//   user.address = address;
//   user.age = age;
//   user.email = email;
//   user.country = country;
//   user.about = createUser.prototype.about;
//   user.is18 = createUser.prototype.is18;
//   return user;
// }
// createUser.prototype.about = function () {
//   return `userName is ${this.name} and age is ${this.age}`;
// };
// createUser.prototype.is18 = function () {
//   return this.age >= 18;
// };
// createUser.prototype.sing = function () {
//   return "lalalalaalalallalaaaaa";
// };
// const ahmad = createUser(
//   "Ahmad",
//   12 + 3,
//   "my address",
//   "ahmadtahir1399@gmail.com",
//   "pakistan"
// );
// const ali = createUser(
//   "ali",
//   12 + 9,
//   "my address",
//   "ali1399@gmail.com",
//   "azarbhaijan"
// );
// console.log(ahmad.sing());
// console.log(ali.about());
