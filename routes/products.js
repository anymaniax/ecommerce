var express = require('express');
var router = express.Router();
var productController = require ('../controllers/products');

router.get('/:id?', productController.listProductController);

router.get('/update/:id?', productController.updateProductController);

router.post('/store/:id?', productController.storeProductController);

router.get('/del/:id', productController.delProductController);

module.exports = router;
