const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "44.202.251.195",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
