console.log('Object Orientation Programming');


// this -> keyword refer always to the window object unless it is in an object instance

console.log(this) // window object

function printThis(name, age) {
  return this;
}

console.log(printThis()); // still refering to the window object

const user = {
  name: 'Ntwali',
  age: 25,
  printThis() {
    return this;
  }
}

console.log(user.printThis()); // now it refers to the user object

// The catch =>
const user2 = {
  name: 'John',
  age: 30,
  printThis: () => {
    return this;
  }
}

console.log(user2.printThis()); // still refers to the window object because arrow function does not have its own 'this'