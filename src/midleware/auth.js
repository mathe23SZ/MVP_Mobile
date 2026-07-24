function auth(req, res, next) {

    console.log("Middleware de autenticação.");

    next();

}

module.exports = auth;