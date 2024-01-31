const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: " 192.168.234.81",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
