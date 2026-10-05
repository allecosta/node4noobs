const fs = require('fs/promises');
const path = require('path');

const file = path.join(__dirname, '../file.txt');

const promise1 = Promise.resolve(`First result`);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(`Second result`), 1000));
const promise3 = fs.readFile(file, 'utf-8');

Promise.all([promise2, promise3, promise1]) // a leitura é de acordo com a posição no array
    .then(results => {
        console.log(`Results:\n ${results}`);
    })
    .catch(error => {
        console.error(`OPS! Error in one of the promisses ${error}`);
    })