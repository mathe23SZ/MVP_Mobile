const express = require("express");

const router = express.Router();

const BiodiversidadeController = require("../controllers/BiodiversidadeController");

router.get("/", BiodiversidadeController.listar);

router.get("/:id", BiodiversidadeController.buscar);

router.post("/", BiodiversidadeController.criar);

router.put("/:id", BiodiversidadeController.atualizar);

router.delete("/:id", BiodiversidadeController.excluir);

module.exports = router;