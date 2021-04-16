const express = require('express');
const router = express.Router();
//Mocks products file
const productMock = require('../../utils/mocks/mocksproducts');

router.get('/', function(req, res){
    console.log('get') 
    const { query } = req.query;
     
    res.status(200).json({
        data: productMock,
        message: 'products listed'
    });
    
    
});

router.get('/:productId', function(req, res){
    const { productId } = req.params;

    res.status(200).json({
        data: productMock[0],
        message: 'product listed'
    });
});

router.post('/', function(req, res){

    res.status(201).json({
        data: productMock[0],
        message: 'product created'
    });
});

router.put('/:productId', function(req, res){

    res.status(200).json({
        data: productMock[0],
        message: 'products updated'
    });
});

router.delete('/:productId', function(req, res){

    res.status(200).json({
        data: productMock[0],
        message: 'products deleted'
    });
});

module.exports = router;