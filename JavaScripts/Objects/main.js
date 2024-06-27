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
// REST operator, Variadic functions
// function userInfo(...personInfo) {
//   console.log(typeof personInfo, personInfo);
// };

// userInfo('Ntwali', 25, 'Male', 'footall', 'coding');


// DESTRUCTURING --> unpack objects anrray into separate distinct variables
const array = ['John', 'Simon', 'Sandra'];

const [user1, user2, ...restOfUsers] = array
console.log(user1, 'and', user2);
if (restOfUsers.length === 0) {
  console.log('no users found');
} else {
  console.log(restOfUsers);
}

const article = {
  title: 'JavaScript ES6',
  author: 'John Doe',
  content: 'This is a tutorial on ES6',
  comments: [
    { username: 'Alice', comment: 'Great article!' },
    { username: 'Bob', comment: 'Love the syntax!' },
  ],
};

// destructuring objects
const { title, author, ...restOfArtKeys } = article;
console.log(title, 'by', author);
console.log(restOfArtKeys) // Create a clone line of the remaining part of the object
// renaming key label destructuring objects
const { comments: commentsList } = article;
console.log(commentsList[0].comment, 'by', commentsList[0].username);

// Destructuring objects in a function
function displayArticle({ title, author }) {
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
}

displayArticle(article);


function printCommentsList(...comments) {
  console.log('Comments:');
  commentsList.forEach(({ username, comment }) => {
    console.log(`- ${username}: ${comment}`);
  });
}

printCommentsList(article.comments);
