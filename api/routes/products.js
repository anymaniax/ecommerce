let router = require('express').Router()
let ctrl = require('../controllers/products')
let auth = require('../controllers/auth')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.addProduct)
router.delete('/:id', auth.checkToken, ctrl.delProduct)
router.put('/:id', auth.checkToken, ctrl.updateProduct)
router.get('/search/:query', ctrl.search)

module.exports = router
