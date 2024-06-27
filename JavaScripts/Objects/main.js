// // Enhanced Object Literal
// // const person = {
// //   name: 'Ntwali',
// //   age: 25,
// //   hobbies: ['Sports', 'Cooking'],
// //   address: {
// //     city: 'Johannesburg',
// //     country: 'South Africa',
// //   },
// //   getBirthYear: function () {
// //     return 2021 - this.age;
// //   }
// // }

// const user = (name, age, password, work) => {
//   return {
//     name,
//     age,
//     password,
//     work,
//     getBirthYear() {
//       return 2024 - this.age;
//     }
//   }
// };

// const ntwali = user('Ntwali', 27, '@pass123', 'Enginner');
// console.log(ntwali.getBirthYear());
// console.log(ntwali);


// const lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b
// };

// console.log(lib.sum(2, 3));
// console.log(lib.mult(2, 3));

//SPREAD OPERATOR used to make shallow copies of objects/
function placeholder(a, b, c) {
  console.log(a, b, c);
};

const numbers = [1, 2, 3];
placeholder(...numbers);

const person = {
  name: 'Gentil',
  age: 25,
  gender: 'male',
}
console.log(person);

const clonePerson = { ...person, work: 'Youtuber' }; // shallow copy of person object
console.log(clonePerson)
