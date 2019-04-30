const fs = require('fs');

const dbConnection = require("./db_connection");

const sql = `
BEGIN;
DROP TABLE IF EXISTS quotes CASCADE;
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  quote VARCHAR(50) NOT NULL
);

INSERT INTO quotes (name, quote)
VALUES ('Kate', 'Purple Rain'),('Burhan','Mad Mango'),('Ryan','FAC Fruitie'),('Sam','Tutti Frutti');
COMMIT;
`;

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) {console.log(err) 
        return reject(err);}
      console.log("database being built");
      resolve(true);
    });
  });

  runDbBuild();

module.exports = runDbBuild;