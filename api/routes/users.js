let router = require('express').Router()
let ctrl = require('../controllers/users')
let auth = require('../controllers/auth')

const authMixin = [auth.checkToken, auth.requireAdmin]
const authId = [auth.checkToken, auth.requireId]

router.get('/', authMixin, ctrl.getAll)
router.get('/:id', auth.requireId, ctrl.getById)
router.post('/', ctrl.addUser)
router.delete('/:id', auth.requireId, ctrl.delUser)
router.put('/:id', auth.requireId, ctrl.updateUser)
router.post('/pass/:id', auth.requireId, ctrl.updatePass)

module.exports = router