const dbConnection = require("../db_connection");

const postData = (name, quote, cb) => {
  dbConnection.query(
    "INSERT INTO quotes (name, quote) VALUES ($1, $2)",
    [name, quote],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
