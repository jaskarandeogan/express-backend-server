const router = require('express').Router();

const {
getTodos,
getTodoById,
addTodo,
} = require('../controllers/index');

router.get('/', getTodos);

module.exports = router;
