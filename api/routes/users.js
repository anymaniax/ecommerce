let router = require('express').Router()
let ctrl = require('../controllers/users')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.addUser)
router.delete('/:id', ctrl.delUser)
router.put('/:id', ctrl.updateUser)
router.post('/pass/:id', ctrl.updatePass)

module.exports = router