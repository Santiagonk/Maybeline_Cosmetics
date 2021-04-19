const express = require('express');
const passport = require('passport');

//Services
const ProductsService = require("../../services/services");
const validation = require("../../utils/middlewares/ValidationHandler");
const {productIdSchema, 
      productTagSchema, 
      createProductSchema, 
      updateProductSchema
    } = require('../../utils/schemas/schema');

// JWT strategies
require("../../utils/auth/strategies/jwt");
//cache utilities
const cacheResponse = require("../../utils/cacheResponse");
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require("../../utils/time");
// instante product service
function productsApi(app) {
  const router = express.Router();
  app.use("/api/v1/products", router);

  const productService = new ProductsService();
  
  // GET
  router.get("/", async function(req, res, next) {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { category, product_type, tag_list, brand , results, max} = req.query;              
      try {
        const products = await productService.getProducts({ category, product_type, tag_list, brand, results, max});
        
        res.status(200).json({
          data: products,
          message: "products listed"
        });
      } catch (err) {
        next(err);
      }
    });
  // GET one
  router.get("/:productId", async function(req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { productId } = req.params;      
      try {
        const product = await productService.getProduct({ productId });    
        res.status(200).json({
          data: product,
          message: "product retrieved"
        });
      } catch (err) {
        next(err);
      }
    });
  //POST
  router.post("/", 
      validation(createProductSchema),
      async function(req, res, next) {
      const { body: product } = req;
      //console.log("request: ", product);
      try {
        const createdProduct = await productService.createProduct({ product });
    
        res.status(201).json({
          data: createdProduct,
          message: "products listed"
        });
      } catch (err) {
        next(err);
      }
    });
  //PUT
  router.put("/:productId",
      passport.authenticate("jwt", { session: false}),
      validation({ productId: productIdSchema }, "params"),
      validation(updateProductSchema),
      async function(req, res, next) {
      const { productId } = req.params;
      const { body: product } = req;
      //console.log("request: ", req.params, req.body);
      
      try {
        const updatedProduct = productService.updateProduct({ 
            productId, 
            product });
        res.status(200).json({
          data: updatedProduct,
          message: "products updated"
        });
      } catch (err) {
        next(err);
      }
    });
  // PATCH (funcionalidad por probar)
  router.patch('/:productId',
      passport.authenticate("jwt", { session: false}),    
      validation({ productId: productIdSchema }, "params"),
      validation(updateProductSchema),
      async function (req, res, next) {
      const { productId } = req.params;
      const { price } = req.query;    
      //console.log("Query: : ", req.query); 
      //console.log("request: ", req.params, req.body);
      try {
        const patchedProduct = await productService.patchProduct({ productId, price })
    
        res.status(200).json({
          data: patchedProduct,
          message: 'product patched'
        })
      } catch (err) {
        next(err);
      }
    });
  //DELETE
  router.delete("/:productId",
      passport.authenticate("jwt", { session: false}), 
      async function(req, res, next) {
      const { productId } = req.params;
      //console.log("request: ", req.params);
      try {
        const product = productService.deleteProduct({ productId });
    
        res.status(200).json({
          data: product,
          message: "products deleted"
        });
      } catch (err) {
        next(err);
      }
    });
    
 }

module.exports = productsApi;