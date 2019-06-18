const fs = require("fs");

const dbConnection = require("./db_connection");

const sql = `
BEGIN;
DROP TABLE IF EXISTS quotes CASCADE;
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  quote text NOT NULL
);

INSERT INTO quotes (name, quote)
VALUES ('Amelie', 'Because Founders and Coders is founded on the idea of peer-led learning, it stimulates an environment of support and mutual growth, which results in what feels like a very special community: a safe, creative space, where no question is too silly to ask and no idea is too bold to suggest.'),
('Helen','Founders and Coders gave me the confidence to, given time and perseverance, grasp complex concepts which initially seemed daunting. I learned how to walk through code thoroughly and truly understand it in order to solve bugs and errors. And I discovered the joys of paired programming - that learning or tackling a problem together can be one of the most rewarding experiences.'),
('Owen','The constant focus on pairing and working together means that youre never stuck banging your head against a wall by yourself. You always have someone else to work through the problem with you. After leaving Founders and Coders, I had a lot of faith in my own ability to learn new technologies, which was crucial when I founded my startup, Fat Llama.'),
('Ruth','The best part of my experience with Founders and Coders are the people. It is a great community, with members of past cohorts teaching the current cohort. Everyone supports each other in their learning and wants to give back.');
COMMIT;
`;

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      console.log("database being built");
      resolve(true);
    });
  });

runDbBuild();

module.exports = runDbBuild;
