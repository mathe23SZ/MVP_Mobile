const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

// Inicializa a conexão com o banco
require("./config/database");

const errorHandler = require("./middleware/errorHandler");

const eventoRoutes = require("./routes/eventoRoutes");
const trilhaRoutes = require("./routes/trilhaRoutes");
const biodiversidadeRoutes = require("./routes/biodiversidadeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

const API = "/api";

/* ==========================
   Sessão
========================== */

app.use(session({

    secret: "tereverde_mvp",

    resave: false,

    saveUninitialized: false,

    cookie: {

        maxAge: 1000 * 60 * 60

    }

}));

/* ==========================
   Middlewares
========================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({

    extended: true

}));

/* ==========================
   Arquivos Públicos
========================== */

app.use(express.static(path.join(__dirname, "public")));

/* ==========================
   Rotas
========================== */

app.use(`${API}/eventos`, eventoRoutes);

app.use(`${API}/trilhas`, trilhaRoutes);

app.use(`${API}/biodiversidade`, biodiversidadeRoutes);

app.use(`${API}/auth`, authRoutes);

/* ==========================
   Página Inicial
========================== */

app.get("/", (req, res) => {

    res.redirect("/pages/index.html");

});

/* ==========================
   Rota inexistente
========================== */

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Rota não encontrada."

    });

});

/* ==========================
   Tratamento de erros
========================== */

app.use(errorHandler);

/* ==========================
   Inicialização
========================== */

app.listen(PORT, () => {

    console.log("===================================");

    console.log("Servidor iniciado com sucesso!");

    console.log(`http://localhost:${PORT}`);

    console.log("===================================");

});