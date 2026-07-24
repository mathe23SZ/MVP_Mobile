const Trilha = require("../models/Trilha");

class TrilhaController {

    async listar(req, res) {

        try {

            const trilhas = await Trilha.listarTodos();

            res.json({

                success: true,

                data: trilhas

            });

        }

        catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async buscar(req, res) {

        try {

            const trilha = await Trilha.buscarPorId(req.params.id);

            if (!trilha) {

                return res.status(404).json({

                    success: false,

                    message: "Trilha não encontrada."

                });

            }

            res.json({

                success: true,

                data: trilha

            });

        }

        catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async criar(req, res) {

        try {

            const id = await Trilha.criar(req.body);

            res.status(201).json({

                success: true,

                id

            });

        }

        catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async atualizar(req, res) {

        try {

            await Trilha.atualizar(req.params.id, req.body);

            res.json({

                success: true,

                message: "Trilha atualizada."

            });

        }

        catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async excluir(req, res) {

        try {

            await Trilha.excluir(req.params.id);

            res.json({

                success: true,

                message: "Trilha removida."

            });

        }

        catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

}

module.exports = new TrilhaController();