const EventoModel = require("../models/EventoModel");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

class EventoController {

    async listar(req, res, next) {

        try {

            const eventos = await EventoModel.listarTodos("data");

            ApiResponse.success(
                res,
                eventos,
                "Eventos listados com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async buscar(req, res, next) {

        try {

            const evento = await EventoModel.buscarPorId(req.params.id);

            if (!evento) {
                throw new ApiError("Evento não encontrado.", 404);
            }

            ApiResponse.success(
                res,
                evento,
                "Evento encontrado."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async criar(req, res, next) {

        try {

            const id = await EventoModel.criar(req.body);

            ApiResponse.created(
                res,
                { id },
                "Evento cadastrado com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async atualizar(req, res, next) {

        try {

            const alterados = await EventoModel.atualizar(
                req.params.id,
                req.body
            );

            if (!alterados) {
                throw new ApiError("Evento não encontrado.", 404);
            }

            ApiResponse.success(
                res,
                null,
                "Evento atualizado com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async excluir(req, res, next) {

        try {

            const removidos = await EventoModel.excluir(req.params.id);

            if (!removidos) {
                throw new ApiError("Evento não encontrado.", 404);
            }

            ApiResponse.success(
                res,
                null,
                "Evento removido com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

}

module.exports = new EventoController();