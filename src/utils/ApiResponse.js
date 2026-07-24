class ApiResponse {

    static success(res, data = null, message = "Operação realizada com sucesso.", status = 200) {

        return res.status(status).json({

            success: true,

            message,

            data

        });

    }

    static created(res, data = null, message = "Registro criado com sucesso.") {

        return res.status(201).json({
    
            success: true,
    
            message,
    
            data
    
        });
    
    }

    static error(res, message = "Erro interno.", status = 500) {

        return res.status(status).json({

            success: false,

            message,

            data: null

        });

    }

}

module.exports = ApiResponse;