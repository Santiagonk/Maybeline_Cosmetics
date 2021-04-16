// Initialize the dependencies - Inicializar las dependencias
const express = require('express');
const path = require("path");
const app = express();
//Api path file api is called api.js
const productsApiRouter = require('./routes/api/api');
//Mocks products file
const productMock = require('./utils/mocks/mocksproducts');

// routes 
app.use("/api/v1/products", productsApiRouter);

// Indicate the server that listen port - Indicar al servidor el puerto que va a escuchar
const server = app.listen(8000, function() {
    console.log(`Listening at http://localhost:${server.address().port}`)
});
  