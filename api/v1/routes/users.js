const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser } = require('../controllers/userController');
/*const AppError = require('../utils/errorHandler');*/

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

/*router.get('/error-demo', (req, res, next) => {
    next(new AppError(404, 'OPS! Resource not found'));
});*/

module.exports = router;
