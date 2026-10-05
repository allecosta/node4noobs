const { error } = require('console');
const fs = require('fs');

/**
 * Node.js uses a single-threaded, event-driven architecture that is designed to handle many 
 * connections at once, efficiently and without blocking the main thread.
 * 
 * Key Characteristics: 
 * Non-blocking I/O, event-driven, single-threaded with event loop, asynchronous execution.
 */

// Blocking vs Non-blocking Code

// Blocking
console.log("Starting...");
const data = fs.readFileSync('./src/basic/readfile.txt', 'utf-8');
console.log("Message:", data);
console.log("Operation completed.\n");

console.log("**********************************************\n");

// Non-blocking
console.log("Starting...");
fs.readFile('./src/basic/readfile.txt', 'utf-8', (error, data) => {
    if (error) 
        throw error;
    console.log("Message:", data);
});
console.log("Waiting...");
