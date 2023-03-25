const addController = require("./addController");
const deleteController = require("./deleteController");
const updateController = require("./updateController");
const { getUsers, getUserById } = require("./getUser");
const { getTodo, getTodos } = require("./getController");

module.exports = {
  addController,
  deleteController,
  getTodo,
  getTodos,
  updateController,
  getUsers,
  getUserById,
};
