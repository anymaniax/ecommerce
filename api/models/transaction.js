let mongoose = require('mongoose')

let transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    cart: {
        type: [JSON],
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
		type: Date,
		default: Date.now,
        expires: '15m'
	}
})

module.exports = mongoose.model('Transaction', transactionSchema)