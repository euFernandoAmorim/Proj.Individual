var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    group by curtida.fkgrupo;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTriceps() {

    var instrucaoSql = `
    select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 6
    group by curtida.fkgrupo, fktreino;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarBiceps() {

    var instrucaoSql = `
    select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 5
    group by curtida.fkgrupo, fktreino;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPosterior() {

    var instrucaoSql = `
    select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 4
    group by curtida.fkgrupo, fktreino;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuadriceps() {

    var instrucaoSql = `
    select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 3
    group by curtida.fkgrupo, fktreino;
        `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPeitoral() {

    var instrucaoSql = `
    select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 2
    group by curtida.fkgrupo, fktreino;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDorsal() {

    var instrucaoSql = `
    select treino.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from curtida
    join treino on fktreino = idtreino
    where fkGrupo = 1
    group by curtida.fkgrupo, fktreino;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarTriceps,
    buscarBiceps,
    buscarQuadriceps,
    buscarPosterior,
    buscarPeitoral,
    buscarDorsal
}
