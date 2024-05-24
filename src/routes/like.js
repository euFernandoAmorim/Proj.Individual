var express = require("express");
var router = express.Router();

var likeController = require("../controllers/likeController");

//Recebendo os dados do html e direcionando para a função cadastrar de likeController.js
router.post("/cadastrar", function (req, res) {
    likeController.cadastrar(req, res);
})


module.exports = router;