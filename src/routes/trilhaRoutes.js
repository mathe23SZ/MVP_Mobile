const express = require("express");

const router = express.Router();

const trilhaController = require("../controllers/trilhaController");

router.get("/",(req,res)=>{

    res.json({

        modulo:"Trilhas",

        status:"OK"

    });

});

module.exports = router;