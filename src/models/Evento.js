const db = require("../config/database");

class Evento {

    listarTodos() {

        return new Promise((resolve, reject) => {

            db.all(
                "SELECT * FROM eventos ORDER BY data",
                [],
                (erro, rows) => {

                    if (erro)
                        reject(erro);

                    resolve(rows);

                }

            );

        });

    }

    buscarPorId(id) {

        return new Promise((resolve, reject) => {

            db.get(

                "SELECT * FROM eventos WHERE id = ?",

                [id],

                (erro, row) => {

                    if (erro)
                        reject(erro);

                    resolve(row);

                }

            );

        });

    }

    criar(evento) {

        return new Promise((resolve, reject) => {

            db.run(

                `INSERT INTO eventos
                (titulo, descricao, data, status)
                VALUES (?,?,?,?)`,

                [
                    evento.titulo,
                    evento.descricao,
                    evento.data,
                    evento.status
                ],

                function (erro) {

                    if (erro)
                        reject(erro);

                    resolve(this.lastID);

                }

            );

        });

    }

    atualizar(id, evento) {

        return new Promise((resolve, reject) => {

            db.run(

                `UPDATE eventos
                 SET titulo=?,
                     descricao=?,
                     data=?,
                     status=?
                 WHERE id=?`,

                [

                    evento.titulo,

                    evento.descricao,

                    evento.data,

                    evento.status,

                    id

                ],

                function (erro) {

                    if (erro)
                        reject(erro);

                    resolve(this.changes);

                }

            );

        });

    }

    excluir(id) {

        return new Promise((resolve, reject) => {

            db.run(

                "DELETE FROM eventos WHERE id=?",

                [id],

                function (erro) {

                    if (erro)
                        reject(erro);

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new Evento();