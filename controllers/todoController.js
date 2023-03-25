const {
  getTodosQuery,
  getTodoByIdQuery,
  addTodoQuery,
  updateTodoQuery,
  deleteTodoQuery,
} = require("../queries/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await getTodosQuery();
    res.status(200).json({
      status: "success",
      message: "Retrieved all todos",
      payload: todos,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving todos",
      payload: null,
    });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await getTodoByIdQuery(id);
    res.status(200).json({
      status: "success",
      message: "Retrieved todo",
      payload: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving todo",
      payload: null,
    });
  }
};

const addTodo = async (req, res) => {
  const { text, complete } = req.body;
  console.log(text, complete);
  try {
    const todo = await addTodoQuery(text, complete);
    res.status(200).json({
      status: "success",
      message: "Added todo",
      payload: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error adding todo",
      payload: null,
    });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, complete } = req.body;
  try {
    const todo = await updateTodoQuery(id, text, complete);
    res.status(200).json({
      status: "success",
      message: "Updated todo",
      payload: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error updating todo",
      payload: null,
    });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await deleteTodoQuery(id);
    res.status(200).json({
      status: "success",
      message: "Deleted todo",
      payload: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error deleting todo",
      payload: null,
    });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
};
