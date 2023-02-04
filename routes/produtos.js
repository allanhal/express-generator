var express = require("express");
var router = express.Router();
const fs = require("fs");

// const produtos = require('../dados/produtos.json')

const produtos = [{}, {}]

router.get("/", (req, res, next) => {
  fs.readFile("./dados/produtos.json", function (err, data) {
    const produtos = JSON.parse(data);
    res.send(produtos);
  });
});
router.get("/novo", (req, res, next) => {
  const titulo = req.query.titulo;
  const produtos = require("../dados/produtos.json");
  produtos.push({
    titulo: titulo,
  });
  fs.writeFile("./dados/produtos.json", JSON.stringify(produtos), (err) => {
    if (err) {
      res.send("deu ruim, nao adicionei o produto");
    }
    res.send("deu bom, adicionei o produto");
  });
});
router.get("/busca", (req, res, next) => {
  fs.readFile("./dados/produtos.json", function (err, data) {
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
