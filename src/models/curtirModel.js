var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(curtir, idUsuario, grupo_muscular) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", curtir, idUsuario, grupo_muscular);

    // let teste = [];
    // teste = dtNasc.split("/");
    // console.log(teste);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO curtida (fkUsuario, fkGrupo, curtir) VALUES ('${idUsuario}', '${grupo_muscular}', '${curtir}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificar_curtidas(idUsuario, grupo_muscular) {
            console.log("Executando a instrução SQL: \n" + instrucaoSql2);
            var instrucaoSql2 = `
            select fkUsuario as usuario, fkGrupo as grupo from curtida
             where fkUsuario = ${idUsuario} and fkGrupo = ${grupo_muscular};
        `;
            return database.executar(instrucaoSql2);
        }


function remover(idUsuario, grupo_muscular) {
            console.log("Executando a instrução SQL: \n" + instrucaoSql3);
            var instrucaoSql3 = `
            update curtida set curtir = null where fkusuario = ${idUsuario} and fkgrupo = ${grupo_muscular};
    `;
            return database.executar(instrucaoSql3);
        }

        function atualizar(curtir, idUsuario, grupo_muscular) {
            console.log("Executando a instrução SQL: \n" + instrucaoSql4);
            var instrucaoSql4 = `
            update curtida set curtir = ${curtir} where fkusuario = ${idUsuario} and fkgrupo = ${grupo_muscular};
    `;
            return database.executar(instrucaoSql4);
        }

module.exports = {
    cadastrar,
    verificar_curtidas,
    remover,
    atualizar
};