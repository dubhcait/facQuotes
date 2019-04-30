const dbConnection = require("./db_connection");
const runDbBuild = require('./db_build');
const postData = require('./queries/postData')
module.exports = {

    dbConnection,
    runDbBuild,
    postData
}