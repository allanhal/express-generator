var createError = require("http-errors"); // lib de tratar errors
var express = require("express"); // lib do express
var logger = require("morgan"); // lib lib log (coloca no console o que esta acontecendo no servidor)



var produtosRouter = require("./routes/produtos");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas - Modificar para adicionar rotas
app.use("/", indexRouter);
// /produtos/ - lista todos os produtos
// /produtos/busca?q=chuchu - busca produto pelo titulo
// /produtos/novo?titulo=chuchu - cria novo produto com titulo
app.use("/produtos", produtosRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render("error");
  // res.send(err)
  res.send(err)
});

module.exports = app;
