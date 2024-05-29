fetch("/curtir/verificar_curtidas", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      idUsuarioServer : idUsuario,
      grupo_muscularServer: grupo_muscular
    })
}).then(function (resposta){
  resposta.json().then(json => {



    console.log(json);
    console.log(JSON.stringify(json));
    console.log(json.resultado_verificar_curtidas[0])

    if (json.resultado_verificar_curtidas != undefined && json.resultado_verificar_curtidas.length > 0) {
      var usuario = (json.resultado_verificar_curtidas[0]).usuario;
      var grupo = (json.resultado_verificar_curtidas[0]).grupo;
    
      if(usuario == idUsuario && grupo == grupo_muscular){

          
    }
}


})
});

fetch('/remover')