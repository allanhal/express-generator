var express = require("express");
var router = express.Router();
const fs = require("fs");

// const produtos = require('../dados/produtos.json')

router.get("/", (req, res, next) => {
  fs.readFile("./dados/produtos.json",(err, data) => {
    if (err) throw err;

    const produtos = JSON.parse(data);
    const termo = req.query.q;
    res.send(
      produtos.filter((produto) =>
        produto.titulo.toLowerCase().includes(termo.toLowerCase())
      )
    );
  });
});

module.exports = router;
