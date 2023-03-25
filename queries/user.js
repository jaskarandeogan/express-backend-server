const db = require("../dbconnect");

const getUsersQuery = async () => {
  const results = await db.any("SELECT * FROM users");
  return results;
};

const getUserByIdQuery = async (id) => {
  const results = await db.one("SELECT * FROM users WHERE id = $1", [id]);
  return results;
};

module.exports = {
  getUsersQuery,
  getUserByIdQuery,
};
