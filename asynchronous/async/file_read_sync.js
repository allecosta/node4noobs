const fs = require('fs');
const path = require('path');

console.log(`1. Starting sync read...`);

const file = path.join(__dirname, 'file.txt');
const data = fs.readFileSync(file, 'utf8');

console.log(`2. File contents:\n ${data}`);
console.log(`3. Done`);