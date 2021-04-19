// Initialize the dependencies - Inicializar las dependencias
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const debug = require("debug")("app:server");
const helmet = require("helmet");
const productsRouter = require('./routes/views/landing.js');
const authApiRouter = require("./routes/api/auth");
const PORT = process.env.PORT || 3000;
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
// This sets custom options for the `referrerPolicy` middleware.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
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
app.use("/products", productsRouter);
productsApiRouter(app);
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
// const server = app.listen(config.PORT || 5000, function() {
//     debug(`Listening at http://localhost:${server.address().port}`)
// });
//HEROKU indication

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});