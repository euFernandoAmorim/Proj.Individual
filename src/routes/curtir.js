var express = require("express");
var router = express.Router();

var curtirController = require("../controllers/curtirController");

//Recebendo os dados do html e direcionando para a função cadastrar de likeController.js
router.post("/cadastrar", function (req, res) {
    curtirController.cadastrar(req, res);
})

router.post("/cadastrar_descurtir", function (req, res) {
    curtirController.cadastrar_descurtir(req, res);
})

router.post("/verificar_curtidas", function (req, res) {
    curtirController.verificar_curtidas(req, res);
});

router.post("/remover", function (req, res) {
    curtirController.remover(req, res);
})

router.post("/remover_descurtir", function (req, res) {
    curtirController.remover_descurtir(req, res);
})

router.post("/atualizar", function (req, res) {
    curtirController.atualizar(req, res);
})

router.post("/atualizar_descurtir", function (req, res) {
    curtirController.atualizar_descurtir(req, res);
})


module.exports = router;