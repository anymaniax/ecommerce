let router = require('express').Router()
let ctrl = require('../controllers/produits')

router.get('/products', ctrl.getAll)
router.post('/products', ctrl.addProduct)
router.get('/products/:id', ctrl.getById)
router.delete('/products/:id', ctrl.delProduct)

module.exports = router;
