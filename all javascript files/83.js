//  CLASS KEYWORDS /.<>.\

// CLASS IN JAVASCRIPT ARE FAKE🙈

class CreateUser {
  constructor(name, age, address, email, country) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.email = email;
    this.country = country;
  }
  about() {
    return `userName is ${this.name} and age is ${this.age}`;
  }
  age() {
    return this.age >= 18;
  }
  sing() {
    return "lalalalaalalallalaaaaa";
  }
}

const dataUser1 = new CreateUser(
  "Ahmad",
  12 + 3,
  "my address",
  "ahmadtahir1399@gmail.com",
  "pakistan"
);
const dataUser2 = new CreateUser(
  "ali",
  32 + 9,
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
console.log(dataUser1.about());
console.log(dataUser2.about());
console.log(dataUser3.about());
Object.getPrototypeOf(dataUser2);
console.log(Object.getPrototypeOf(dataUser2));
