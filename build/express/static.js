const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, '../../../public/assets')));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="../../../public/assets/css/style.css">
            </head>
            <body>
                <h1>Hello Node.js</h1>
                <img src="../../../public/assets/images/spock.jpg">
                <p id="test"></p>
                <script src="../../../public/assets/js/script.js"></script>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening at htpp://localhost:${port}`);
});