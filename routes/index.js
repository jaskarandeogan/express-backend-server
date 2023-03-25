const router = require("express").Router();

const {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,
  getUsers,
  getUserById,
  } = require("../controllers/index");

router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
