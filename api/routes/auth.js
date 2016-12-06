let router = require('express').Router()
let ctrl = require('../controllers/auth')

router.post('/', ctrl.auth)

module.exports = router
