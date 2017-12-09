module.exports.iniciachat = function(application, req, res) {
    var dadosForm = req.body;
    //console.log(dadosForm);
    req.assert('apelido', 'Nome é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve ter no 3 ou 15 letras').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render("index", { validacao: erros });
        return;

    }
    res.render('chat');

}