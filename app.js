/*importar as configurações do servidor*/
var app = require('./config/server');

/* parametros da porta */

app.listen(80, function() {
    console.log('App na porta 80!');
});