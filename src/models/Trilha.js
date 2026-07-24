const db = require("../config/database");

class Trilha {

    listarTodos() {

        return new Promise((resolve, reject) => {

            db.all(

                "SELECT * FROM trilhas ORDER BY nome",

                [],

                (erro, rows) => {

                    if (erro)
                        return reject(erro);

                    resolve(rows);

                }

            );

        });

    }

    buscarPorId(id) {

        return new Promise((resolve, reject) => {

            db.get(

                "SELECT * FROM trilhas WHERE id = ?",

                [id],

                (erro, row) => {

                    if (erro)
                        return reject(erro);

                    resolve(row);

                }

            );

        });

    }

    criar(trilha) {

        return new Promise((resolve, reject) => {

            db.run(

                `INSERT INTO trilhas
                (nome,dificuldade,distancia,status)
                VALUES (?,?,?,?)`,

                [

                    trilha.nome,

                    trilha.dificuldade,

                    trilha.distancia,

                    trilha.status

                ],

                function (erro) {

                    if (erro)
                        return reject(erro);

                    resolve(this.lastID);

                }

            );

        });

    }

    atualizar(id, trilha) {

        return new Promise((resolve, reject) => {

            db.run(

                `UPDATE trilhas

                SET

                nome=?,

                dificuldade=?,

                distancia=?,

                status=?

                WHERE id=?`,

                [

                    trilha.nome,

                    trilha.dificuldade,

                    trilha.distancia,

                    trilha.status,

                    id

                ],

                function (erro) {

                    if (erro)
                        return reject(erro);

                    resolve(this.changes);

                }

            );

        });

    }

    excluir(id) {

        return new Promise((resolve, reject) => {

            db.run(

                "DELETE FROM trilhas WHERE id=?",

                [id],

                function (erro) {

                    if (erro)
                        return reject(erro);

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new Trilha();