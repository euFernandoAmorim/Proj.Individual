var likeModel = require("../models/curtirModel");



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var curtir = req.body.curtirServer;
    var idUsuario = req.params.idUsuario;
    var grupo_muscular = req.body.grupo_muscularServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curtirModel.cadastrar(curtir, idUsuario, grupo_muscular)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            );
    }

module.exports = {
    cadastrar
}