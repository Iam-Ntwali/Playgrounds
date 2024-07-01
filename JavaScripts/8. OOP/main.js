// console.log('Object Orientation Programming');


// // this -> keyword refer always to the window object unless it is in an object instance

// console.log(this) // window object

// function printThis(name, age) {
//   return this;
// }

// console.log(printThis()); // still refering to the window object

// const user = {
//   name: 'Ntwali',
//   age: 25,
//   printThis() {
//     return this;
//   }
// }

// console.log(user.printThis()); // now it refers to the user object

// // The catch =>
// const user2 = {
//   name: 'John',
//   age: 30,
//   printThis: () => {
//     return this;
//   }
// }

// console.log(user2.printThis()); // still refers to the window object because arrow function does not have its own 'this'

// // Factory function => return objects
// function createUser(name, age) {
//   return {
//     name,
//     age,
//     printThis() {
//       return `My name is ${name} and I am ${age} years old.`;
//     }
//   }
// }

// const user3 = createUser('Jane', 28);
// const user4 = createUser('Smith', 45);
// console.log(user3.printThis()); // now it refers to the user3 object
// console.log(user4.printThis()); // still refers to the user4 object

// constructor function => act as blueprints for creating multiple instance of objects with the same structure and behaviours.

function Course(name, description, sections) {
  this.name = name;
  this.description = description;
  this.sections = sections;
}

const JavaScriotsBasics = new Course('JavaScript', 'This course will teach the best Job', 'Intro to JS Programming');

console.log(JavaScriotsBasics.name);