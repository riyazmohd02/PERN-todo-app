const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: " 13.233.146.41",
  port: 5432,
  database: "testdb1"
});

module.exports = pool;
