const express = require('express');
const app = express();
const port = 8081;

app.get('/users/:userid', (req, res) => {
    res.send(`User ID: ${req.params.userid}`);
});

app.get('/users/:userid/posts/:postid', (req, res) => {
    res.send(`
        <h2>User and Post Information</h2>
        <p>User ID: ${req.params.userid}</p>
        <p>Post ID: ${req.params.postid}</p>
    `);
});

app.get('/products/:category/', (req, res) => {
    res.send(`All Products in category ${req.params.category}`);       
});

app.get('/products/:category/:product', (req, res) => {
    res.send(`Product ${req.params.product} in category ${req.params.category}`);
});

app.get('/items/:itemid', (req, res) => {
    const id = req.params.itemid;

    if (!/^\d+$/.test(id))
        return res.status(400).send("OPS! Item ID must be numeric");

    res.send(`Item ID: ${id}`);
});

app.listen(port, () => {
    console.log(`App listening at http:localhost:${port}`);
});