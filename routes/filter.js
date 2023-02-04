var express = require("express");
var router = express.Router();

const produtos = require('../dados/produtos.json')
  

router.get("/", (req, res, next) => {
  const termo = req.query.q;
  res.send(
    produtos.filter((produto) =>
      produto.titulo.toLowerCase().includes(termo.toLowerCase())
    )
  );
});

module.exports = router;
