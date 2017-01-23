let router = require('express').Router()
let ctrl = require('../controllers/pay')
let auth = require('../controllers/auth')

router.post('/:id?', auth.checkToken, ctrl.pay)
router.get('/:id', ctrl.detail)

module.exports = router
