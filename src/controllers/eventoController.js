const Evento = require("../models/Evento");

const ApiResponse = require("../utils/ApiResponse");

const ApiError = require("../utils/ApiError");

class EventoController {

    async listar(req, res, next) {

        try {

            const eventos = await Evento.listarTodos("data");

            ApiResponse.success(

                res,

                eventos,

                "Eventos listados com sucesso."

            );

        }

        catch (erro) {

            next(erro);

        }

    }

    async buscar(req, res, next) {

        try {

            const evento = await Evento.buscarPorId(req.params.id);

            if (!evento) {

                throw new ApiError(

                    "Evento não encontrado.",

                    404

                );

            }

            ApiResponse.success(

                res,

                evento,

                "Evento encontrado."

            );

        }

        catch (erro) {

            next(erro);

        }

    }

    async criar(req, res, next) {

        try {

            const id = await Evento.criar(req.body);

            ApiResponse.created(

                res,

                { id },

                "Evento cadastrado com sucesso."

            );

        }

        catch (erro) {

            next(erro);

        }

    }

    async atualizar(req, res, next) {

        try {

            const alterados = await Evento.atualizar(

                req.params.id,

                req.body

            );

            if (!alterados) {

                throw new ApiError(

                    "Evento não encontrado.",

                    404

                );

            }

            ApiResponse.success(

                res,

                null,

                "Evento atualizado com sucesso."

            );

        }

        catch (erro) {

            next(erro);

        }

    }

    async excluir(req, res, next) {

        try {

            const removidos = await Evento.excluir(

                req.params.id

            );

            if (!removidos) {

                throw new ApiError(

                    "Evento não encontrado.",

                    404

                );

            }

            ApiResponse.success(

                res,

                null,

                "Evento removido com sucesso."

            );

        }

        catch (erro) {

            next(erro);

        }

    }

}

module.exports = new EventoController();