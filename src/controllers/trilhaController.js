const Trilha = require("../models/Trilha");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

class TrilhaController {

    async listar(req, res, next) {

        try {

            const trilhas = await Trilha.listarTodos("nome");

            ApiResponse.success(
                res,
                trilhas,
                "Trilhas listadas com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async buscar(req, res, next) {

        try {

            const trilha = await Trilha.buscarPorId(req.params.id);

            if (!trilha) {
                throw new ApiError("Trilha não encontrada.", 404);
            }

            ApiResponse.success(
                res,
                trilha,
                "Trilha encontrada."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async criar(req, res, next) {

        try {

            const id = await Trilha.criar(req.body);

            ApiResponse.created(
                res,
                { id },
                "Trilha cadastrada com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async atualizar(req, res, next) {

        try {

            const alterados = await Trilha.atualizar(
                req.params.id,
                req.body
            );

            if (!alterados) {
                throw new ApiError("Trilha não encontrada.", 404);
            }

            ApiResponse.success(
                res,
                null,
                "Trilha atualizada com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async excluir(req, res, next) {

        try {

            const removidos = await Trilha.excluir(req.params.id);

            if (!removidos) {
                throw new ApiError("Trilha não encontrada.", 404);
            }

            ApiResponse.success(
                res,
                null,
                "Trilha removida com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

}

module.exports = new TrilhaController();