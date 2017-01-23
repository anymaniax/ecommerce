let router = require('express').Router()
let ctrl = require('../controllers/pay')
let auth = require('../controllers/auth')

const authId = [auth.checkToken, auth.requireId]
const authMixin = [auth.checkToken, auth.requireAdmin]

router.post('/:id', authId, ctrl.pay)
router.get('/valid/:id', ctrl.valid)
router.get('/payement/:id', authId,ctrl.getByIdPayement)
router.get('/allPayement/', authMixin, ctrl.getAllPayement)

module.exports = router
