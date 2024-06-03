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
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where idgrupo = 6
    group by curtida.fkgrupo;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarBiceps() {

    var instrucaoSql = `
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where idgrupo = 5
    group by curtida.fkgrupo;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPosterior() {

    var instrucaoSql = `
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where idgrupo = 4
    group by curtida.fkgrupo;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuadriceps() {

    var instrucaoSql = `
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where idgrupo = 3
    group by curtida.fkgrupo;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPeitoral() {

    var instrucaoSql = `
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where idgrupo = 2
    group by curtida.fkgrupo;
     `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDorsal() {

    var instrucaoSql = `
    select grupo_muscular.nome as musculo, count(curtir) as curtidas, count(descurtir) as descurtidas from grupo_muscular
    join curtida on fkgrupo = idgrupo
    where idgrupo = 1
    group by curtida.fkgrupo;
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
