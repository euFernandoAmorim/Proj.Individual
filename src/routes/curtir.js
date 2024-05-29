var express = require("express");
var router = express.Router();

var curtirController = require("../controllers/curtirController");

//Recebendo os dados do html e direcionando para a função cadastrar de likeController.js
router.post("/cadastrar", function (req, res) {
    curtirController.cadastrar(req, res);
})

router.post("/verificar_curtidas", function (req, res) {
    curtirController.verificar_curtidas(req, res);
});

router.post("/remover", function (req, res) {
    curtirController.remover(req, res);
})

module.exports = router;