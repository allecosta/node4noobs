const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// Middleware for parsing JSON
app.use(express.json());

let users = [
    {
        id: 1,
        name: 'Han Solo',
        email: 'solo@gmail.com'
    },
    {
        id: 2,
        name: 'Luke',
        email: 'luke@gmal.com'
    }
];

// GET - Retrieve all users
app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

// GET - Retrieve a specific user
app.get('/api/v1/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user)
        return res.status(404).json({ message: 'OPS! User not found'});

    res.json(user);
});

// POST - Create a new user
app.post('/api/v1/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json({ message: 'WINS! User created' });
});

// PUT - Update a user completely
app.put('/api/v1/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user)
        return res.status(404).json({ message: 'OPS! User not found'});

    user.name = req.body.name;
    user.email = req.body.email;

    res.json({ message: 'WINS! User updated' });
});

// DELETE - Remove a user
app.delete('/api/v1/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (user === -1)
        return res.status(404).json({ message: 'OPS! User not found'});

    const deleteUser = users.splice(user, 1);

    res.json({ message: 'WINS! User deleted' });
});

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`WINS! REST API server running on port ${port}`);
});