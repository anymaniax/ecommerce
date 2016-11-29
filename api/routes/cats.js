let router = require('express').Router()
let ctrl = require('../controllers/cats.js')

router.get('/', ctrl.getAll)
router.get('/:cat', ctrl.getByCat)
router.post('/', ctrl.addCat)

module.exports = router