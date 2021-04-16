const express = require('express');
const router = express.Router();
//Services
const ProductsService = require("../../services/services");
// instante product service
const productService = new ProductsService();
// GET
router.get("/", async function(req, res, next) {
    const { tags } = req.query;
    console.log("request: ", req.query);
    try {
      const products = await productService.getProducts({ tags });
  
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
    const { productId } = req.params;
    console.log("request: ", req.params);
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
router.post("/", async function(req, res, next) {
    const { body: product } = req;
    console.log("request: ", req.body);
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
router.put("/:productId", async function(req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    console.log("request: ", req.params, req.body);
    
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
router.patch('/:productId', async function (req, res, next) {
    const { productId } = req.params;
    const { body: changedAttributes } = req;
    console.log("request: ", req.params, req.body);
    try {
      const patchedProduct = await productService.patchProduct({ productId, changedAttributes })
  
      res.status(200).json({
        data: patchedProduct,
        message: 'product patched'
      })
    } catch (err) {
      next(err);
    }
  });
//DELETE
router.delete("/:productId", async function(req, res, next) {
    const { productId } = req.params;
    console.log("request: ", req.params);
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

module.exports = router;