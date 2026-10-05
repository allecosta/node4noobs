const http = require('http');
const path = require('path');

const { getCurrentDate, formatCurrency } = require('./utils');
const Logger = require('./logger');

const logger = new Logger("App");

const server = http.createServer((req, res) => {
    try {
        logger.log(`Request received for ${req.url}`);

        res.writeHead(200, {'Contente-Type': 'text/html'});
        res.write(`<h1>Welcome to our App</h1>`);
        res.write(`<p>Current Date: ${getCurrentDate()}</p>`);
        res.write(`<p>Formatted Amount: ${formatCurrency(10.99)}</p>`);
    } catch (e) {
        logger.error(e);
        res.writeHead(500, {'Contetnt-Type': 'text/plain'});
        res.end('Internal Server Error');
    }
});

const port = process.env.port || 8080;

server.listen(port, () => {
    logger.log(`Server running at http://localhost:${port}`);
});