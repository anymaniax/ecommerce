let router = require('express').Router()

let err = (req, res) => {
	res.status(404)
	res.json({
		error: "Ressource not found"
	})
}

router.use('*', err)

module.exports = router
