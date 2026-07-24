const db = require("../config/database");

class BaseModel {

    constructor(tabela) {
        this.tabela = tabela;
    }

    listarTodos(ordem = "id") {

        return new Promise((resolve, reject) => {

            const sql = `SELECT * FROM ${this.tabela} ORDER BY ${ordem}`;

            db.all(sql, [], (erro, rows) => {

                if (erro) {
                    return reject(erro);
                }

                resolve(rows);

            });

        });

    }

    buscarPorId(id) {

        return new Promise((resolve, reject) => {

            const sql = `SELECT * FROM ${this.tabela} WHERE id = ?`;

            db.get(sql, [id], (erro, row) => {

                if (erro) {
                    return reject(erro);
                }

                resolve(row);

            });

        });

    }

    excluir(id) {

        return new Promise((resolve, reject) => {

            const sql = `DELETE FROM ${this.tabela} WHERE id = ?`;

            db.run(sql, [id], function (erro) {

                if (erro) {
                    return reject(erro);
                }

                resolve(this.changes);

            });

        });

    }

}

module.exports = BaseModel;