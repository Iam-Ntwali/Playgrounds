// // // Enhanced Object Literal
// // const person1 = {
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

// //SPREAD OPERATOR used to make shallow copies of objects/
// function placeholder(a, b, c) {
//   console.log(a, b, c);
// };

// const numbers = [1, 2, 3];
// placeholder(...numbers);

// const person = {
//   name: 'Gentil',
//   age: 25,
//   gender: 'male',
// }
// console.log(person);

// const clonePerson = { ...person, work: 'Youtuber' }; // shallow copy of person object
// console.log(clonePerson)
// // REST operator, Variadic functions
// function userInfo(...personInfo) {
//   console.log(typeof personInfo, personInfo);
// };

// userInfo('Ntwali', 25, 'Male', 'footall', 'coding');


// // DESTRUCTURING --> unpack objects anrray into separate distinct variables
// const array = ['John', 'Simon', 'Sandra'];

// const [user1, user2, ...restOfUsers] = array
// console.log(user1, 'and', user2);
// if (restOfUsers.length === 0) {
//   console.log('no users found');
// } else {
//   console.log(restOfUsers);
// }

// const article = {
//   title: 'JavaScript ES6',
//   author: 'John Doe',
//   content: 'This is a tutorial on ES6',
//   comments: [
//     { username: 'Alice', comment: 'Great article!' },
//     { username: 'Bob', comment: 'Love the syntax!' },
//   ],
// };

// // destructuring objects
// const { title, author, ...restOfArtKeys } = article;
// console.log(title, 'by', author);
// console.log(restOfArtKeys) // Create a clone line of the remaining part of the object
// // renaming key label destructuring objects
// const { comments: commentsList } = article;
// console.log(commentsList[0].comment, 'by', commentsList[0].username);

// // Destructuring objects in a function
// function displayArticle({ title, author }) {
//   console.log(`Title: ${title}`);
//   console.log(`Author: ${author}`);
// }

// displayArticle(article);


// function printCommentsList(...comments) {
//   console.log('Comments:');
//   commentsList.forEach(({ username, comment }) => {
//     console.log(`- ${username}: ${comment}`);
//   });
// }

// printCommentsList(article.comments);

// //  FOR-IN LOOP: iterate throgh enumarable properties of an object
// let pet = {
//   type: 'dog',
//   breed: 'Labrador',
//   age: 5,
// }

// for (let property in pet) {
//   console.log(`${property}: ${pet[property]}`);
// }

// console.log(typeof pet)

// const colors = ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta'];

// for (let color in colors) {
//   console.log(`at ${color} index, there is color ${colors[color]}`);
// };

// FOR-OF LOOP: (variabe of object)
// remove duplicates in a string using for-of loop
function removeDuplicates(str) {
  let result = '';
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(removeDuplicates('Hello, World!')); // "Helo, Wrld!"

// remove duplicates in an array using for-of loop
function removeDuplicatesArray(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
let array = [1, 2, 3, 2, 4, 5, 6, 4, 3];
console.log(removeDuplicatesArray([1, 2, 3, 2, 4, 5, 6, 4, 3])); // [1, 2, 3, 4, 5, 6]

// remove duplicates in an array using Set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicatesSet([1, 2, 3, 2, 4, 5, 6, 4, 3])); // [1, 2, 3, 4, 5, 6]

// FOR EACH => perform a specifc action on each element of an array
const numbers = [1, 2, 3, 4, 5];
// sum the numbers
let sumOfNmbrs = 0;
numbers.forEach(function (number) {
  sumOfNmbrs += number;
});
console.log(sumOfNmbrs);

// MAP => create a new array with the results of calling a provided function on every element in the calling array
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers);

// FILTER => create a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

// REDUCE => apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// FIND => return the value of the first element in the provided array that satisfies the provided testing function
const foundNumber = numbers.find(function (number) {
  return number === 3;
});
console.log(foundNumber);

// FIND INDEX => return the index of the first element in the provided array that satisfies the provided testing function
const foundIndex = numbers.findIndex(function (number) {
  return number === 3;
});
console.log(foundIndex);

// SORT => sort the elements of an array in place and return the array. The sort is not necessarily stable; that is, elements that compare equal do not necessarily appear in the same order.