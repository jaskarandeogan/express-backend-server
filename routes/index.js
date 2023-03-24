const router = require("express").Router();

const {
  addController,
  deleteController,
  getTodo,
  getTodos,
  updateController,
} = require("../controllers/index");

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", addController);
router.put("/:id", updateController);
router.delete("/:id", deleteController);

module.exports = router;
