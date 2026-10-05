const fs = require('fs');

fs.readFile('./src/basic/readfile.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error("OPS! Error reading file", error);
        return;
    }
    console.log("File: ", data);
});

console.log("Reading file...");