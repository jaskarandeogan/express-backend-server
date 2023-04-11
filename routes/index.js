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

  /**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - task
 *         - completed
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the todo
 *         task:
 *           type: string
 *           description: The task of the todo
 *         completed:
 *           type: boolean
 *           description: The completed status of the todo
 *       example:
 *         id: 1
 *         task: "Buy milk"
 *         completed: false
 */



router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
