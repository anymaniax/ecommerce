let router = require('express').Router()
let ctrl = require('../controllers/pay')
let auth = require('../controllers/auth')

const authId = [auth.checkToken, auth.requireId]
const authMixin = [auth.checkToken, auth.requireAdmin]

router.post('/:id', authId, ctrl.pay)
router.get('/valid/:id', ctrl.valid)
router.get('/payements', authId, ctrl.getById)
router.get('/payements/user/:id', authId, ctrl.getByUserPayement)
router.get('/payements/all/', authMixin, ctrl.getAllPayement)

module.exports = router
