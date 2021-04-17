const express = require('express');
const router = express.Router();
const ProductService = require('../../services/services');

const productService = new ProductService();

router.get("/", async function(req, res, next) {
    const { category, product_type, tag_list, brand } = req.query;    
    console.log("Query: : ", req.query);    
    try {
      const products = await productService.getProducts({ category, product_type, tag_list, brand});
  
      res.status(200).json({
        data: products,
        message: "products listed"
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;