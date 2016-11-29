let router = require('express').Router()
let ctrl = require('../controllers/auth')

router.get('/', ctrl.auth)
router.get('/verify', ctrl.checkToken)

module.exports = router