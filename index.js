// Initialize the dependencies - Inicializar las dependencias
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const productsRouter = require('./routes/views/landing.js');

//Api path file api is called api.js
const productsApiRouter = require('./routes/api/api');
//Mocks products file
const productMock = require('./utils/mocks/mocksproducts');
// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// static files
app.use("/views",express.static(path.join(__dirname, "views")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes 
app.use("/api/v1/products", productsApiRouter);
app.use("/products", productsRouter);
redirect
app.get('/', function(req, res){
   res.redirect('/products');   
});

// Indicate the server that listen port - Indicar al servidor el puerto que va a escuchar
const server = app.listen(8000, function() {
    console.log(`Listening at http://localhost:${server.address().port}`)
});
