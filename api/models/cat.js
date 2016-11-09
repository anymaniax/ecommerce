let mongoose = require('mongoose')

let catSchema = new mongoose.Schema({
	nom: {
		type: String,
		required: true,
		unique: true
	}
})

module.exports = mongoose.model('Cat', catSchema)
