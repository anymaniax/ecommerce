require('../models/db')

let Cat = require('../models/cat')
let Product = require('../models/product')

const PORT = process.env.PORT || 5000

module.exports.getAll = (req, res) => {
	Cat.find((err, cats) => {
		if (cats.length === 0) {
			res.status(404)
			return res.json({
				err: "No categories found :("
			})
		}

		if (err) {
			res.status(500)
			return res.json({
				err: "An unexpected error happened"
			})
		}

		let categories = []
		for (let cat of cats) {
			categories.push(cat.nom)
		}
		return res.json(categories)
	})
}

module.exports.addCat = (req, res) => {
	Cat.findOne({'nom':req.body.nom},(err,cats) =>{
		if (err) {
			res.status(500)
			return res.json({
				err: "An unexpected error happened"
			})
		}
		if(cats){
			return res.json({
				error: "Category already use"
			})
		} else {
			let cat = Cat(req.body)
			cat.save((err,cat)=>{
				res.status(201)
				res.send({
					link: `http://localhost:${PORT}/api/v1/cats/${cat.nom}`
				})
			})
		}
	})
}

module.exports.getByCat = (req, res) => {
	Product.find({
		cat: new RegExp(req.params.cat, 'i')
	}, (err, products) => {
		if (products.length === 0) {
			res.status(404)
			return res.json({
				err: "No products found in this category :("
			})
		}

		if (err) {
			res.status(500)
			return res.json({
				err: "An unexpected error happened"
			})
		}

		return res.json(products)
	})
}