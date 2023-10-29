class AnimalName {
  constructor(name, age, eat) {
    this.name = name;
    this.age = age;
    this.eat = eat;
  }
  about() {
    return `Name is ${this.name} and age is ${this.age} and eat ${this.eat} `;
  }
  isYoung() {
    return this.age <= 5;
  }
}
// const cat = new AnimalName("Cat", 2, "meat");
// const dog = new AnimalName("dog", 5, "meat");
// console.log(cat.about());
// console.log(dog.about());

// if (this.name <= 5) {
//   console.log(dog.name, "is younger");
// }

class Dragon extends AnimalName {}

const Nightshade = new Dragon("Nightshade", 5, "meat"); // Corrected the class name and added the missing argument "eat"

console.log(Nightshade.about());
console.log(
  Nightshade.isYoung()
    ? `${Nightshade.name} is younger`
    : `${Nightshade.name} is older`
);
