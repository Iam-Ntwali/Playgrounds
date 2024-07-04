const fs = require('fs');


// Read file
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('Hello');