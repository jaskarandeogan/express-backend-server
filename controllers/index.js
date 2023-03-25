const { getUsers, getUserById } = require("./userController");
const {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("./todoController");

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,
  getUsers,
  getUserById,
};
