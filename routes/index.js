const router = require("express").Router();

const {
  getTodo,
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("./index");

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;