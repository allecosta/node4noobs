const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
    const data = {
        title: 'Express Template',
        message: 'Hello EJS !!!',
        items: ['Léia', 'Anakin', 'Luke', 'Yoda', 'Sidius', 'Solo']
    };

    res.render('index', data);
});

app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`);
});
