const ApiResponse = require("../utils/ApiResponse");

function errorHandler(err, req, res, next) {

    console.error(err);

    const status = err.status || 500;

    ApiResponse.error(

        res,

        err.message || "Erro interno do servidor.",

        status

    );

}

module.exports = errorHandler;