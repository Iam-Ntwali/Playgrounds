const fs = require('fs');


// Read file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);