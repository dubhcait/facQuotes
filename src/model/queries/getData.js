const dbConnection = require("../db_connection");

const getData = () => {
  return new Promise((resolve, reject) => {
    dbConnection.query("SELECT * FROM quotes", (err, res) => {
      if (err) reject(err);
      resolve(res.rows);
    });
  });
};

module.exports = { getData };
