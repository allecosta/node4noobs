const express = require('express');
const  app = express();
const port = 8081;

// Route that may throw an error
app.get('/error', (req, res) => {
    throw new Error("OPS! Something went wrong");
});

// Simulating an asynchronous operation that fails - asynchronous code
app.get('/async-error', (req, res, next) => {
    setTimeout(() => {
        try {
            const result = nonExistFunction(); // OPS...
            res.send(result); 
        } catch (error) {
            next(error); // Pass errors to Express
        }
    }, 100);
});

// Custom error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("OPS! Something broke");
});

app.listen(port, () => {
    console.log(`App listening at htpp://localhost:${port}`);
});
