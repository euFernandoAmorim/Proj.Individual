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

    function cadastrar_descurtir(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var curtir = req.body.curtirServer;
        var idUsuario = req.body.idUsuarioServer;
        var grupo_muscular = req.body.grupo_muscularServer;
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            curtirModel.cadastrar_descurtir(curtir, idUsuario, grupo_muscular)
                .then(
                    function (resultado_cadastrar_descurtir) {
                        res.json(resultado_cadastrar_descurtir);
                    }
                );
        }

    function verificar_curtidas(req,res){

        var idUsuario = req.body.idUsuarioServer;
        var grupo_muscular = req.body.grupo_muscularServer;

        curtirModel.verificar_curtidas(idUsuario, grupo_muscular)
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

        function remover_descurtir(req, res) {
            // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
            var idUsuario = req.body.idUsuarioServer;
            var grupo_muscular = req.body.grupo_muscularServer;
        
                // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
                curtirModel.remover_descurtir(idUsuario, grupo_muscular)
                    .then(
                        function (resultado_remover_descurtir) {
                            res.json(resultado_remover_descurtir);
                        }
                    );
            }

        
function atualizar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var curtir = req.body.curtirServer;
    var idUsuario = req.body.idUsuarioServer;
    var grupo_muscular = req.body.grupo_muscularServer;
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        curtirModel.atualizar(curtir, idUsuario, grupo_muscular)
            .then(
                function (resultado_atualizar) {
                    res.json(resultado_atualizar);
                }
            );
    }


    function atualizar_descurtir(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var curtir = req.body.curtirServer;
        var idUsuario = req.body.idUsuarioServer;
        var grupo_muscular = req.body.grupo_muscularServer;
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            curtirModel.atualizar_descurtir(curtir, idUsuario, grupo_muscular)
                .then(
                    function (resultado_atualizar_descurtir) {
                        res.json(resultado_atualizar_descurtir);
                    }
                );
        }
module.exports = {
    cadastrar,
    verificar_curtidas,
    remover,
    atualizar,
    atualizar_descurtir,
    remover_descurtir,
    cadastrar_descurtir
}