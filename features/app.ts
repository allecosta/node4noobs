import express, { Request, Response } from 'express';

interface User {
    id: number;
    name: string;
}

const app = express();
app.use(express.json());

// In-memory database
let users: User[] = [];

app.get('/', (req: Request, res: Response) => {
    console.log("GET /")
    //res.json(users);
});

app.post('/users', (req: Request, res: Response) => {
    console.log("POST /users");
    /*const user: User = req.body;
    users.push(user);
    res.status(201).json(user);*/
});

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server running: ${port}`);
});

