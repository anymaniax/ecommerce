var express = require('express');
var router = express.Router();
var productController = require ('../controllers/product');

router.get('/', productController.ListProductController);

router.get('/add/:id?', productController.addProductController);

router.post('/store/:id?', productController.storeProductController);

router.get('/del/:id', productController.delProductController);

router.get('/detail/:id', productController.detailProductController);
