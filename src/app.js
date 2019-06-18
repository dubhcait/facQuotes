const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const compresion = require("compression");
const helmet = require("helmet");

const controllers = require("./controllers/index.js");
const helpers = require("./views/helpers/index");

const app = express();

const middleware = [
  helmet(),
  compresion(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  express.static(path.join(__dirname, "..", "public"))
];
app.use(middleware);

app.disable("x-powered-by");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: helpers
  })
);

app.set("port", process.env.PORT || 3000);
app.use(controllers);

module.exports = app;
