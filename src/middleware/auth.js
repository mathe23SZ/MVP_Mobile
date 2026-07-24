function auth(req, res, next) {

    if(!req.session.usuario){

        return res.redirect("/pages/login.html");

    }

    next();

}

    console.log("Middleware de autenticação.");

    next();

module.exports = auth;