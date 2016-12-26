let mongoose = require('mongoose')
let mongoosastic = require('mongoosastic')
let config
if (process.env.DEBUG==1) {
	config = require('../config/dev')
} else {
	config = require('../config/prod')
}

let productSchema = new mongoose.Schema({
	nom: {
		type: String,
		required: true,
		unique: true
	}, desc: {
		type: String,
		required: true
	}, price: {
		currency: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			required: true,
			minimum: 1
		} 
	}, stock :{
		type: Number,
		required: true
	}, ratings: [],
	updated: {
		type: Date,
		default: Date.now
	}, tags: [String],
	cat: [String],
	thumbnail: {
		type: String,
		required: true
	}
})
productSchema.plugin(mongoosastic, {
  hosts: [
    config.es
  ]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
