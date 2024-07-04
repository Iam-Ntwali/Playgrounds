const fs = require('fs');
// Read file
const textIn = fs.readFileSync('./source/1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);

// Write file
const textOut = `${textIn} Iadded this line here 🙂`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File has been written');