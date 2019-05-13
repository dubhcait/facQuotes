const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const compresion = require('compression');

const controllers = require('./controllers/index.js');
const helpers = require('./views/helpers/index');

const app = express();


app.disable('x-powered-by');
app.use(compresion());
app.set('views',path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    handlebars({
        extname:'hbs',
        layoutsDir: path.join(__dirname, 'views','layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main',
        helpers:helpers,
    })
);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports= app;