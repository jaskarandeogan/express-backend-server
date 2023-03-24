const addController = require("./addController");
const deleteController = require("./deleteController");
const getController = require("./getController");
const updateController = require("./updateController");

const { getTodo, getTodos } = require("./getController");

module.exports = {
  addController,
  deleteController,
  getTodo,
  getTodos,
  updateController,
};
