const fs = require('fs/promises');
const path = require('path');

const file = path.join(__dirname, '../file.txt');

async function readFile() {
    try {
        const data = await fs.readFile(file, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(`OPS! Reading file: ${error}` );
    }
}

readFile();