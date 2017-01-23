require('../models/db')

let Product = require('../models/product')

const PORT = process.env.PORT || 5000
	// TODO:
	// -> Apply point 7 from 
	// http://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/
	// -> Handler errors
module.exports.getAll = (req, res) => {
	Product.find((err, products) => {
		if (!products) {
			res.status(404)
			res.json({
				err: "No products found :("
			})
		}

		if (err) {
			res.status(500)
			return res.json({
				err: "An unexpect error happened"
			})
		}
		return res.json(products)
	})
}

module.exports.getById = (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (product) {
			return res.json(product)
		}

		if (err) {
			res.status(404)
			return res.json({
				error: "No product found for that id."
			})
		}
	})
}

module.exports.addProduct = (req, res) => {
	Product.findOne({
		'nom': req.body.nom
	}, (err, product) => {
		if (product) {
			return res.json({
				error: "Product already use."
			})
		} else {
			let product = Product(req.body)

			product.save((err, product) => {
				if (err) {
					res.status(406)
					console.log(err)
					return res.json({
						error: "Could not create this product"
					})
				}

				res.status(201)
				return res.send({
					id: product._id,
					link: `http://localhost:${PORT}/api/v1/products/${product.id}`
				})
			})
		}
	})
}

module.exports.delProduct = (req, res) => {
	Product.findOneAndRemove({
		'_id': req.params.id
	}, (err, product) => {
		if (err) {
			res.status(500)
			return res.json({
				error: 'Could not remove this product :('
            })
		}

		res.status(204)
		res.json({
			message: 'Product deleted with success'
		})
	})
}

module.exports.updateProduct = (req, res) => {
	Product.update({
		_id: req.params.id
	}, {
		$set: req.body.product
	}, (err, product) => {
		if (err) {
			res.status(500)
			return res.json('Could not update this product :(')
		}

		res.status(204)
		console.log(product)
		res.json({
			message: "Product updated with success",
			product
		})
	})
}

module.exports.search = (req, res) => {
	let {query} = req.params
	Product.search({
		"query": {
			"multi_match": {
				"query": query,
				"fields": ["nom", "desc", "cat", "tag"],
				"fuzziness": 2
			}
		},
	}, {
		from: 0,
		size: 1000,
		hydrate: true
	}, (err, results) => {
		if (err) {
			return res.status(500).json({
				message: 'No product found'
			})
		}
		if (results.hits) {
			if (results.hits.total != 0) {
				res.status(200)
				return res.json({
					products: results.hits.hits
				})
			}
		}

		return res.status(404).json({
			message: 'No product found'
		})
	})
}