const Administrador = require("../models/Administrador");

const ApiResponse = require("../utils/ApiResponse");

class AuthController {

    async index(req, res, next) {

        try {

            ApiResponse.success(

                res,

                null,

                "Módulo de autenticação disponível."

            );

        } catch (erro) {

            next(erro);

        }

    }

}

module.exports = new AuthController();