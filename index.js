// Initialize the dependencies - Inicializar las dependencias
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const productsRouter = require('./routes/views/landing.js');
const authApiRouter = require("./routes/api/auth");
//Api path file api is called api.js
const productsApiRouter = require('./routes/api/api');
//Mocks products file
const productMock = require('./utils/mocks/mocksproducts');
// Middlewares Errors Handlers
const {
  logErrors,
  clientErrorHandler,
  errorHandler,
  wrapErrors
} = require('./utils/middlewares/errorsHandlers');
const isRequestAjaxOrApi = require('./utils/isRequestAjaxOrApi.js');

const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// static files
app.use("/main",express.static(path.join(__dirname, "views")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes 
app.use("/api/v1/products", productsApiRouter);
app.use("/products", productsRouter);
app.use("/api/auth", authApiRouter);
//redirect
app.get('/', function(req, res){
   res.redirect('/main/landing.html');   
});
// 404 Page
app.use(function(req, res, next) {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload }
    } = boom.notFound();
    res.status(statusCode).json(payload);
    
  } else {
    res.status(404).render("404");    
  }
});
// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
// Indicate the server that listen port - Indicar al servidor el puerto que va a escuchar
const server = app.listen(8000, function() {
    console.log(`Listening at http://localhost:${server.address().port}`)
});
