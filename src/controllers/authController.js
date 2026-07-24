const AdministradorModel = require("../models/AdministradorModel");
const ApiResponse = require("../utils/ApiResponse");

class AuthController {

    async login(req, res, next) {

        try {

            const { usuario, senha } = req.body;

            const administrador =
                await AdministradorModel.buscarPorUsuario(usuario);

            if (!administrador || administrador.senha !== senha) {

                return ApiResponse.error(

                    res,

                    "Usuário ou senha inválidos.",

                    401

                );

            }

            req.session.usuario = {

                id: administrador.id,

                nome: administrador.nome,

                usuario: administrador.usuario

            };

            return ApiResponse.success(

                res,

                null,

                "Login realizado com sucesso."

            );

        }

        catch (erro) {

            next(erro);

        }

    }

    logout(req, res) {

        req.session.destroy(() => {

            ApiResponse.success(

                res,

                null,

                "Logout realizado."

            );

        });

    }

}

module.exports = new AuthController();