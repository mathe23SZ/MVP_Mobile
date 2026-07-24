const express = require("express");
const path = require("path");
const cors = require("cors");

require("./config/database");

const app = express();

const PORT = 3000;

/* ==========================
   Middlewares
========================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ==========================
   Arquivos Públicos
========================== */

app.use(express.static(path.join(__dirname, "public")));

/* ==========================
   Página Inicial
========================== */

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.html"));

});

/* ==========================
   Inicialização
========================== */

app.listen(PORT, () => {

    console.log("===================================");

    console.log("Servidor iniciado com sucesso!");

    console.log(`http://localhost:${PORT}`);

    console.log("===================================");

});