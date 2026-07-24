const BiodiversidadeModel = require("../models/BiodiversidadeModel");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

class BiodiversidadeController {

    async listar(req, res, next) {

        try {

            const itens = await BiodiversidadeModel.listarTodos("nome");

            ApiResponse.success(
                res,
                itens,
                "Espécies listadas com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async buscar(req, res, next) {

        try {

            const item = await BiodiversidadeModel.buscarPorId(req.params.id);

            if (!item) {
                throw new ApiError("Registro não encontrado.", 404);
            }

            ApiResponse.success(
                res,
                item,
                "Registro encontrado."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async criar(req, res, next) {

        try {

            const id = await BiodiversidadeModel.criar(req.body);

            ApiResponse.created(
                res,
                { id },
                "Registro cadastrado com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async atualizar(req, res, next) {

        try {

            const alterados = await BiodiversidadeModel.atualizar(
                req.params.id,
                req.body
            );

            if (!alterados) {
                throw new ApiError("Registro não encontrado.", 404);
            }

            ApiResponse.success(
                res,
                null,
                "Registro atualizado com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

    async excluir(req, res, next) {

        try {

            const removidos = await BiodiversidadeModel.excluir(req.params.id);

            if (!removidos) {
                throw new ApiError("Registro não encontrado.", 404);
            }

            ApiResponse.success(
                res,
                null,
                "Registro removido com sucesso."
            );

        } catch (erro) {

            next(erro);

        }

    }

}

module.exports = new BiodiversidadeController();