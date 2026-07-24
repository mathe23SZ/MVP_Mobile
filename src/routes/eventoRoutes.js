const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {

  db.all("SELECT * FROM eventos", [], (err, rows) => {

    if(err){
      return res.status(500).json(err);
    }

    res.json(rows);
  });

});

router.post("/", (req,res)=>{

  const { titulo, descricao, data } = req.body;

  db.run(
    "INSERT INTO eventos(titulo, descricao, data) VALUES(?,?,?)",
    [titulo, descricao, data],
    function(err){

      if(err){
        return res.status(500).json(err);
      }

      res.json({
        id:this.lastID
      });

    }
  );

});

module.exports = router;