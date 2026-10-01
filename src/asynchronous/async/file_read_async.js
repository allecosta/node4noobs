const fs1 = require('fs');
const fs = require('fs/promises');
const path = require('path');

const file = path.join(__dirname, 'file.txt');

console.log(`1. Starting async read...`);
fs1.readFile(file, 'utf8', (error, data) => {
    if (error)
        throw error;
    console.log(`2. File contents:\n ${data}`);
});
console.log(`3. Done`);

// Or use Promises
console.log(`1. Starting read with Promises...`);
fs.readFile(file, 'utf-8')
    .then(data => {
        console.log(`3. File content with Promises:\n ${data}`);
    })
    .catch(error => console.error(error));
console.log(`2. Runs before file read!`);

// Or use Async/Await
async function readFile() {
    try {
        console.log(`1. Starting read with Async/Await...`);
        const data = await fs.readFile(file, 'utf-8');
        console.log(`2. File content with Async/Await:\n ${data}`);
    } catch (error) {
        console.error(error);
    }
}

readFile();

