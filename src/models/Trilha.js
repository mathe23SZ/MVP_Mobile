const db = require("../config/database");
const BaseModel = require("./BaseModel");

class Trilha extends BaseModel {

    constructor() {

        super("trilhas");

    }

    criar(trilha) {

        return new Promise((resolve, reject) => {

            db.run(

                `INSERT INTO trilhas
                (titulo, descricao, data, status)
                VALUES (?, ?, ?, ?)`,

                [

                    trilha.titulo,

                    trilha.descricao,

                    trilha.data,

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

                titulo=?,

                descricao=?,

                data=?,

                status=?

                WHERE id=?`,

                [

                    trilha.titulo,

                    trilha.descricao,

                    trilha.data,

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

}

module.exports = new Trilha();