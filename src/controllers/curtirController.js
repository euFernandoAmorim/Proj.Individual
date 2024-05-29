var curtirModel = require("../models/curtirModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var curtir = req.body.curtirServer;
    var idUsuario = req.body.idUsuarioServer;
    var grupo_muscular = req.body.grupo_muscularServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curtirModel.cadastrar(curtir, idUsuario, grupo_muscular)
            .then(
                function (resultado_cadastrar) {
                    res.json(resultado_cadastrar);
                }
            );
    }

    function verificar_curtidas(req,res){

        var idUsuario = req.body.idUsuarioServer;
        var grupo_muscular = req.body.grupo_muscularServer;

        curtirModel.verificar(idUsuario, grupo_muscular)
        .then(
            function (resultado_verificar_curtidas) {
    
                res.json({
                    resultado_verificar_curtidas
                });
    }
        )
    }

    function remover(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var idUsuario = req.body.idUsuarioServer;
        var grupo_muscular = req.body.grupo_muscularServer;
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            curtirModel.remover(idUsuario, grupo_muscular)
                .then(
                    function (resultado_remover) {
                        res.json(resultado_remover);
                    }
                );
        }

module.exports = {
    cadastrar,
    verificar_curtidas,
    remover
}