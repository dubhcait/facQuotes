const { Pool } = require("pg");
const url = require("url");
require("env2")("./.env");

let connectionString = process.env.HEROKU_POSTGRESQL_BROWN_URL;

if (!connectionString) throw new Error("Database url must be set");

module.exports = new Pool({
  connectionString,
  max: 2,
  ssl: !connectionString.includes("localhost")
});
