const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use('/api/v1/users', userRoutes);

// Rota 404 para caminhos não encontrados
app.use((req, res) => {
    res.status(404).json({ message: 'OPS! Rota não encontrada' });
});

// Tratamento global de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'OPS! Erro interno do servidor',
        error: err.message
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`WINS! REST API server running on port ${port}`);
});
