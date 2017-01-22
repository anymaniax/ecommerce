let router = require('express').Router()
let ctrl = require('../controllers/cats.js')
let auth = require('../controllers/auth')

const authMixin = [auth.checkToken, auth.requireAdmin]

router.get('/', ctrl.getAll)
router.get('/details', ctrl.getAllWithDetails)
router.get('/:cat', ctrl.getByCat)
router.post('/', authMixin, ctrl.addCat)
router.delete('/:id', authMixin, ctrl.deleteCatCascade)

module.exports = router