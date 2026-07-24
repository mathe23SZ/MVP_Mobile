const Biodiversidade = require("../models/Biodiversidade");

class BiodiversidadeController {

    async listar(req,res){

        try{

            const lista = await Biodiversidade.listarTodos("nome");

            res.json({

                success:true,

                data:lista

            });

        }

        catch(erro){

            res.status(500).json({

                success:false,

                message:erro.message

            });

        }

    }

    async buscar(req,res){

        try{

            const item = await Biodiversidade.buscarPorId(req.params.id);

            if(!item){

                return res.status(404).json({

                    success:false,

                    message:"Registro não encontrado."

                });

            }

            res.json({

                success:true,

                data:item

            });

        }

        catch(erro){

            res.status(500).json({

                success:false,

                message:erro.message

            });

        }

    }

    async criar(req,res){

        try{

            const id = await Biodiversidade.criar(req.body);

            res.status(201).json({

                success:true,

                id

            });

        }

        catch(erro){

            res.status(500).json({

                success:false,

                message:erro.message

            });

        }

    }

    async atualizar(req,res){

        try{

            await Biodiversidade.atualizar(req.params.id,req.body);

            res.json({

                success:true,

                message:"Registro atualizado."

            });

        }

        catch(erro){

            res.status(500).json({

                success:false,

                message:erro.message

            });

        }

    }

    async excluir(req,res){

        try{

            await Biodiversidade.excluir(req.params.id);

            res.json({

                success:true,

                message:"Registro removido."

            });

        }

        catch(erro){

            res.status(500).json({

                success:false,

                message:erro.message

            });

        }

    }

}

module.exports = new BiodiversidadeController();