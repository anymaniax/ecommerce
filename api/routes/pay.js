let router = require('express').Router()
let ctrl = require('../controllers/pay')
let auth = require('../controllers/auth')

const authId = [auth.checkToken, auth.requireId]
const authMixin = [auth.checkToken, auth.requireAdmin]

router.post('/:id', authId, ctrl.pay)
router.get('/:id', authId, ctrl.getById)
router.get('/valid/:id', ctrl.valid)
router.get('/payements/:id', authId, ctrl.getById)
router.get('/payements/user/:id', authId,ctrl.getByUserPayement)
router.get('/payements/', authMixin, ctrl.getAllPayement)

module.exports = router
