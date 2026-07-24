const db = require("../config/database");
const BaseModel = require("./BaseModel");

class Biodiversidade extends BaseModel {

    constructor() {

        super("biodiversidade");

    }

    criar(item) {

        return new Promise((resolve, reject) => {

            db.run(

                `INSERT INTO biodiversidade
                (categoria,nome,descricao,imagem,status)
                VALUES(?,?,?,?,?)`,

                [

                    item.categoria,

                    item.nome,

                    item.descricao,

                    item.imagem,

                    item.status

                ],

                function (erro) {

                    if (erro)
                        return reject(erro);

                    resolve(this.lastID);

                }

            );

        });

    }

    atualizar(id,item){

        return new Promise((resolve,reject)=>{

            db.run(

                `UPDATE biodiversidade

                SET

                categoria=?,

                nome=?,

                descricao=?,

                imagem=?,

                status=?

                WHERE id=?`,

                [

                    item.categoria,

                    item.nome,

                    item.descricao,

                    item.imagem,

                    item.status,

                    id

                ],

                function(erro){

                    if(erro)
                        return reject(erro);

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new Biodiversidade();