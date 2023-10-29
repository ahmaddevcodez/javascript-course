function createUser(name, age, address, email, country) {
  const user = {};
  user.name = name;
  user.address = address;
  user.age = age;
  user.email = email;
  user.country = country;

  user.about = function () {
    return `userName is ${this.name} and age is ${this.age}`;
  };

  user.is18 = function () {
    return this.age >= 18;
  };

  return user;
}

const dataUser1 = createUser(
  "Ahmad",
  2,
  "my address",
  "ahmadtahir1399@gmail.com",
  "pakistan"
);
console.log(dataUser1);

// const ans = dataUser1.is18();
// console.log(ans);
// const ans1 = dataUser1.about();
// console.log(ans1);
