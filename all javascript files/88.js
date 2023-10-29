// !!! STATIC METHODS AND PROPERTIES !!! \\
// !!! STATIC METHODS are only called by class name or in simple class !!! \\

class person {
  constructor(name, age, country, lastName) {
    this.age = age;
    this.name = name;
    this.lastName = lastName;
    this.country = country;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [name, lastName] = fullName.split(" ");
    this.name = name;
    this.lastName = lastName;
  }

  eat() {
    return `${this.name} is eating`;
  }

  about() {
    return `Name is ${this.name} and age is ${this.age} and eat ${this.eat()}`;
  }

  isYoung() {
    return this.age <= 5;
  }

  static mySchool() {
    return "my school is dps";
  }
  static mySchool2 = "dps";
}

const school = person.mySchool();
console.log(school);
console.log(person.mySchool2);

//PART 0NE END\\
