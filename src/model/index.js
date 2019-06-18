const dbConnection = require("./db_connection");
const runDbBuild = require("./db_build");
const postData = require("./queries/postData");
const getData = require("./queries/getData");
module.exports = {
  dbConnection,
  runDbBuild,
  postData,
  getData
};
