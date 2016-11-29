let router = require('express').Router()
let ctrl = require('../controllers/products')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.addProduct)
router.delete('/:id', ctrl.delProduct)
router.put('/:id', ctrl.updateProduct)

module.exports = router
