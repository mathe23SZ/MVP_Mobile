const db = require("../config/database");
const BaseModel = require("./BaseModel");

class Evento extends BaseModel {

    constructor() {

        super("eventos");

    }

    criar(evento) {

        return new Promise((resolve, reject) => {

            db.run(

                `INSERT INTO eventos
                (titulo, descricao, data, status)
                VALUES (?, ?, ?, ?)`,

                [

                    evento.titulo,

                    evento.descricao,

                    evento.data,

                    evento.status

                ],

                function (erro) {

                    if (erro)
                        return reject(erro);

                    resolve(this.lastID);

                }

            );

        });

    }

    atualizar(id, evento) {

        return new Promise((resolve, reject) => {

            db.run(

                `UPDATE eventos

                SET

                titulo=?,

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
                        return reject(erro);

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new Evento();