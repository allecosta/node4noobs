const express = require('express');
const app = express();
const port = 8081;

app.get('/search', (req, res) => {
    const { q, category, limit } = req.query;

    res.send(`
        <h2>Search Results</h2>
        <p>Query: ${q || "Not specified"}</p>
        <p>Category: ${category || "All categories"}</p>
        <p>Limit: ${limit || "Default"} </p>
    `);
});

app.get('/products', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    
    const products = [];

    for (let i = 1; i <= pageSize; i++) {
        const productId = (page - 1) * pageSize + i;
        products.push(`Product ${productId}`);
    }

    res.send(`
        <h2>Products</h2>
        <p>Page: ${page}</p>
        <p>Page Size: ${pageSize}</p>
        <ul>
            ${products.map(product => `<li>${product}</li>`).join('')}
        </ul>
        <p>
            <a href="/products?page=${page > 1 ? page - 1 : 1}&pageSize=${pageSize}"Previous>
        </p>
        <p>
            <a href="/products?page=${page + 1}&pageSize=${pageSize}"Next>
        </p>
    `);
});

app.get('/filter', (req, res) => {
    try {
        const filters = Object.entries(req.query).map(([k, v]) => {
            return `${k}: ${v}`;
    });

    if (filters.length === 0)
        res.send("No filters applied. Try ?color=red&size=large");
    else
        res.send(`
            <h2>Applied Filters</h2>
            <ul>
                ${filters.map(filter => `<li>${filter}</li>`).join("")}
            </ul>
        `);   
    } catch (error) {
        console.error("OPS...", error.message);
    }
});

app.listen(port, () => {
    console.log(`App Listenig at htpp://localhost:${port}`)
});