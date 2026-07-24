const sqlite3 = require("sqlite3").verbose();

const path = require("path");

const dbPath = path.join(__dirname, "..", "data", "tereverde.db");

const db = new sqlite3.Database(dbPath, (erro) => {

    if (erro) {

        console.log("Erro ao conectar ao banco.");

    } else {

        console.log("Banco conectado.");

    }

});

/* ==========================
   Criação das Tabelas
========================== */

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS administrador(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            usuario TEXT UNIQUE,

            senha TEXT

        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS eventos(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            titulo TEXT,

            descricao TEXT,

            data TEXT,

            status TEXT

        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS trilhas(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            nome TEXT,

            dificuldade TEXT,

            distancia TEXT,

            status TEXT

        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS biodiversidade(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            categoria TEXT,

            nome TEXT,

            descricao TEXT,

            imagem TEXT

        )
    `);

});

module.exports = db;