var likeModel = require("../models/likeModel");



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var like = req.body.likeServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        likeModel.cadastrar(like)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            );
    }

module.exports = {
    cadastrar
}