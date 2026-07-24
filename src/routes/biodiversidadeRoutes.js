const express = require("express");

const router = express.Router();

const biodiversidadeController = require("../controllers/biodiversidadeController");

router.get("/",(req,res)=>{

    res.json({

        modulo:"Biodiversidade",

        status:"OK"

    });

});

module.exports = router;