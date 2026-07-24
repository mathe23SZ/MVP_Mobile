const express = require("express");

const router = express.Router();

const TrilhaController = require("../controllers/trilhaController");

router.get("/", TrilhaController.listar);

router.get("/:id", TrilhaController.buscar);

router.post("/", TrilhaController.criar);

router.put("/:id", TrilhaController.atualizar);

router.delete("/:id", TrilhaController.excluir);

module.exports = router;