// Enhanced Object Literal
// const person = {
//   name: 'Ntwali',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   address: {
//     city: 'Johannesburg',
//     country: 'South Africa',
//   },
//   getBirthYear: function () {
//     return 2021 - this.age;
//   }
// }

const user = (name, age, password, work) => {
  return {
    name,
    age,
    password,
    work,
    getBirthYear: function () {
      return 2024 - this.age;
    }
  }
};

const ntwali = user('Ntwali', 27, '@pass123', 'Enginner');
console.log(ntwali.getBirthYear());
console.log(ntwali);