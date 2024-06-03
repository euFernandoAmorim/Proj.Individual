var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo

    group by curtida.fkgrupo `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `select grupo_muscular.nome as musculo, fkgrupo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo

    group by curtida.fkgrupo`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
