let router = require('express').Router()
let ctrl = require('../controllers/pay')
let auth = require('../controllers/auth')

router.post('/:id', auth.checkToken, ctrl.pay)
router.post('/detail/:id', auth.checkToken, ctrl.detail)

module.exports = router
