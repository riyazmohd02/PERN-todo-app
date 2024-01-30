const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "10.192.101.30",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
