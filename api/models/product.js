let mongoose = require('mongoose')

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

module.exports = mongoose.model('Product', productSchema)
