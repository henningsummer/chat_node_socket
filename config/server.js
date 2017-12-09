/* importando o express */
var express = require('express');
/* importando o consign */
var consign = require('consign');
/* importando o bodyparser */
var bodyParser = require('body-parser');
/* importando o validator */
var expressValidator = require('express-validator');
/* iniciar objeto do express */
var app = express();

/* setar as variaveis da ENGINE das VIWES */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurando middleware do express */
app.use(express.static('./app/public'));


/* confgurando middleware bodyparser */
app.use(bodyParser.urlencoded({ extended: true }));

/* confgurando middleware bodyparser */
app.use(expressValidator());

/* configura autoload de rotass, models e controllers pra o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportando o objeto para ser usado fora. */
module.exports = app;