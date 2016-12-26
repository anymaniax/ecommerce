let router = require('express').Router()
let ctrl = require('../controllers/products')
let auth = require('../controllers/auth')

const authMixin = [auth.checkToken, auth.requireAdmin]

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', authMixin, ctrl.addProduct)
router.delete('/:id', authMixin, ctrl.delProduct)
router.put('/:id', authMixin, ctrl.updateProduct)
router.get('/search/:query', ctrl.search)

module.exports = router
