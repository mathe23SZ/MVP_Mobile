const Evento = require("../models/Evento");

class EventoController {

    async listar(req, res) {

        try {

            const eventos = await Evento.listarTodos();

            res.json({

                success: true,

                data: eventos

            });

        } catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async buscar(req, res) {

        try {

            const evento = await Evento.buscarPorId(req.params.id);

            if (!evento) {

                return res.status(404).json({

                    success: false,

                    message: "Evento não encontrado."

                });

            }

            res.json({

                success: true,

                data: evento

            });

        } catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async criar(req, res) {

        try {

            const id = await Evento.criar(req.body);

            res.status(201).json({

                success: true,

                id

            });

        } catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async atualizar(req, res) {

        try {

            await Evento.atualizar(req.params.id, req.body);

            res.json({

                success: true,

                message: "Evento atualizado."

            });

        } catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

    async excluir(req, res) {

        try {

            await Evento.excluir(req.params.id);

            res.json({

                success: true,

                message: "Evento removido."

            });

        } catch (erro) {

            res.status(500).json({

                success: false,

                message: erro.message

            });

        }

    }

}

module.exports = new EventoController();