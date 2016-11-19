let router = require('express').Router()
let ctrl = require('../controllers/produits')

router.get('/', ctrl.getAll)
router.post('/', ctrl.addProduct)
router.get('/:id', ctrl.getById)
router.delete('/:id', ctrl.delProduct)
router.put('/:id', ctrl.updateProduct)

module.exports = router;
