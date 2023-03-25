const router = require("express").Router();

const {
  addController,
  deleteController,
  getTodo,
  getTodos,
  updateController,
  getUsers,
  getUserById,
} = require("../controllers/index");


router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", addController);
router.put("/:id", updateController);
router.delete("/:id", deleteController);

module.exports = router;
