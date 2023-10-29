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
  setName(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const personOne = new person("Ahmad", 15, "Pakistan", "Tahir");
// console.log(personOne.fullName());
// console.log(personOne.fullName);
personOne.fullName = "Nadir Ali";
console.log(personOne.fullName);
