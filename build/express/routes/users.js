const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
    console.log("Users route time: ", Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send("Users Home Page");
});

router.get('/:id', (req, res) => {
    res.send(`User profile ID: ${req.params.id}`);
});

module.exports = router;