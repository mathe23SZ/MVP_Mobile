const express = require("express");

const router = express.Router();

const eventoController = require("../controllers/eventoController");

router.get("/", (req,res)=>{

    res.json({

        modulo:"Eventos",

        status:"OK"

    });

});

module.exports = router;