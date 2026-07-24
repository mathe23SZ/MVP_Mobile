const db = require("../config/database");

class AdministradorModel {

    buscarPorUsuario(usuario) {

        return new Promise((resolve, reject) => {

            db.get(

                `SELECT * FROM administradores
                 WHERE usuario = ?`,

                [usuario],

                (erro, administrador) => {

                    if (erro) {

                        return reject(erro);

                    }

                    resolve(administrador);

                }

            );

        });

    }

    buscarPorId(id) {

        return new Promise((resolve, reject) => {

            db.get(

                `SELECT id, nome, usuario
                 FROM administradores
                 WHERE id = ?`,

                [id],

                (erro, administrador) => {

                    if (erro) {

                        return reject(erro);

                    }

                    resolve(administrador);

                }

            );

        });

    }

    alterarSenha(id, novaSenha) {

        return new Promise((resolve, reject) => {

            db.run(

                `UPDATE administradores
                 SET senha = ?
                 WHERE id = ?`,

                [

                    novaSenha,

                    id

                ],

                function (erro) {

                    if (erro) {

                        return reject(erro);

                    }

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new AdministradorModel();