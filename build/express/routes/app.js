const express = require('express');
const app = express();
const port = 8081;

const usersRouter = express.Router();
const date = new Date();

// Middleware
usersRouter.use((req, res, next) => {
    console.log(`Users route acessed at: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    next();
});

 usersRouter.get('/', (req, res) => {
    res.send(`
        <h2>Users</h2>
        <ul>
            <li><a href="/users/1">User 1</li>
            <li><a href="/users/2">User 2</li>
            <li><a href="/users/3">User 3</li>
        </ul>
    `);
 });

 usersRouter.get('/:id', (req, res) => {
    res.send(`
        <h2>User Profile</h2>
        <p>User ID: ${req.params.id}</p>
        <p><a href="/users">Back to users list</a></p>
    `);
 });

 const productsRouter = express.Router();

 productsRouter.get('/', (req, res) => {
    res.send(`
        <h2>Products List</h2>
        <ul>
            <li><a href="/products/1">Product 1</li>
            <li><a href="/products/2">Product 2</li>
            <li><a href="/products/3">Product 3</li>
        </ul>
    `);
 });

 productsRouter.get('/:id', (req, res) => {
    res.send(`
        <h2>Product Details</h2>
        <p>Product ID: ${req.params.id}</p>
        <p><a href="/products">Back to product list</a></p>`);
 });

 app.get('/', (req, res) => {
    res.send(`
        <h1>Express Routes</h1>
        <p>Sections:</p>
        <ul>
            <li><a href="/users">Users</a></li>
            <li><a href="/products">Product</a></li>
        </ul>
    `);
 });

 app.use('/users', usersRouter);
 app.use('/products', productsRouter);

 app.listen(port, () => {
    console.log(`App listening at: http://127.0.0.1:${port}`);
 });