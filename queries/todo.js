const db = require("../dbconnect");

const getTodosQuery = async () => {
  const results = await db.any("SELECT * FROM todo");
  return results;
};

const getTodoByIdQuery = async (id) => {
  const results = await db.any("SELECT * FROM todo WHERE id = $1", [id]);
  return results;
};

const addTodoQuery = async (text, complete) => {
  const results = await db.any(
    "INSERT INTO todo(task, completed) VALUES($1, $2) RETURNING *",
    [text, complete]
  );
  return results;
};

const deleteTodoQuery = async (id) => {
  const results = await db.any("DELETE FROM todo WHERE id = $1", [id]);
  return results;
};

const updateTodoQuery = async (id, text, complete) => {
  const results = await db.any(
    "UPDATE todo SET task = $1, completed = $2 WHERE id = $3 RETURNING *",
    [text, complete, id]
  );
  return results;
};

module.exports = {
  getTodosQuery,
  getTodoByIdQuery,
  addTodoQuery,
  deleteTodoQuery,
  updateTodoQuery
};
