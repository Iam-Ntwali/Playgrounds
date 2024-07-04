const fs = require('fs');
const path = require('path');


// Read file
fs.readFile(path.join(__dirname, 'txt', 'readFile.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('Executed first');

// // write file
fs.writeFile(path.join(__dirname, 'txt', 'output.txt'), 'I am just being created now 🙂', (err) => {
  if (err) throw err;
  console.log('File has been created');
});

// // Append to file
// fs.appendFile('./txt/output.txt', '\nThis is appended data', (err) => {
//   if (err) throw err;
//   console.log('Data appended successfully');
// });

// console.log('World');
