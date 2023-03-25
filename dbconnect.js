const pgp = require("pg-promise")();
const db = pgp({
  user: "admin",
  host: "localhost",
  database: "todos",
  password: "admin",
  port: 5432,
});

module.exports = db;
