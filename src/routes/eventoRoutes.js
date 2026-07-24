const express = require("express");

const router = express.Router();

const EventoController = require("../controllers/EventoController");

// Listar todos
router.get("/", EventoController.listar);

// Buscar por ID
router.get("/:id", EventoController.buscar);

// Criar
router.post("/", EventoController.criar);

// Atualizar
router.put("/:id", EventoController.atualizar);

// Excluir
router.delete("/:id", EventoController.excluir);

module.exports = router;