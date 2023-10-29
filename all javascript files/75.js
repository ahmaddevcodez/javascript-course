// STORE METHODES IN DIFFERENT OBJECTS //

const userMethodes = {
  about: () => {
    return `userName is ${this.name} and age is ${this.age}`;
  },

  is18: () => {
    return this.age >= 18;
  },
};

function createUser(name, age, address, email, country) {
  const user = {
    about: () => {
      return `userName is ${this.name} and age is ${this.age}`;
    },

    is18: () => {
      return this.age >= 18;
    },
  };
  user.name = name;
  user.address = address;
  user.age = age;
  user.email = email;
  user.country = country;
  // user.about = userMethodes.about;
  // user.is18 = userMethodes.is18;

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
console.log(dataUser1.about());

var agt = 57;
console.log(window);
let dog = {
  name: "hipooo",
  location: "Sahiwal",
  weight: 102,
  legs: 46,
  dogLegsMinus2: () => {
    return function () {
      console.log(this);
      return this.legs - 2;
    };
  },
};

console.log(dog.dogLegsMinus2()());
