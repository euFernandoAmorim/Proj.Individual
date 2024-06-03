var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/triceps", function (req, res) {
    medidaController.buscarTriceps(req, res);
});

router.get("/biceps", function (req, res) {
    medidaController.buscarBiceps(req, res);
});

router.get("/posterior", function (req, res) {
    medidaController.buscarPosterior(req, res);
});

router.get("/quadriceps", function (req, res) {
    medidaController.buscarQuadriceps(req, res);
});

router.get("/peitoral", function (req, res) {
    medidaController.buscarPeitoral(req, res);
});

router.get("/dorsal", function (req, res) {
    medidaController.buscarDorsal(req, res);
});

module.exports = router;