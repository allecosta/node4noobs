const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

// Middleware to parse JSON request
app.use(express.json());

// Middleware to parse URL-encoded request
app.use(express.urlencoded());

// Middleware to serve static files from a directory
app.use(express.static(path.join(__dirname, '../../../public')));

// POST route that uses JSON middleware
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.status(201).json(
        {
            message: "User created",
            user: req.body
        }
    );
});

app.listen(port, () => {
    console.log(`App listenig at http://localhost:${port}`);
});