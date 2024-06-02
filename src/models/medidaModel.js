var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where fkGrupo = 1
    group by curtida.fkgrupo `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkGrupo) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
