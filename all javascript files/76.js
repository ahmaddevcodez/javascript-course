// SOLUTION USING OBJECT.CREATE //

const userMethodes = {
  about: function () {
    return `userName is ${this.name} and age is ${this.age}`;
  },

  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "la lp lol m saaaaaaaam tu nanananan";
  },
};

function createUser(name, age, address, email, country) {
  const user = Object.create(userMethodes);
  user.name = name;
  user.address = address;
  user.age = age;
  user.email = email;
  user.country = country;
  user.about = userMethodes.about;
  user.is18 = userMethodes.is18;
  return user;
}

const dataUser1 = createUser(
  "Ahmad",
  12 + 3,
  "my address",
  "ahmadtahir1399@gmail.com",
  "pakistan"
);
const dataUser2 = createUser(
  "ali",
  12 + 9,
  "my address",
  "ali1399@gmail.com",
  "azarbhaijan"
);
console.log(dataUser1.about());
console.log(dataUser2.about());
