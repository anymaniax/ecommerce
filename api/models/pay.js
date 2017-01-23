let mongoose = require('mongoose')

let paySchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    cart: {
        type: [JSON],
        required: true
    },
    token: {
        type: String,
        required:true
    },
    payerId: {
        type: String,
        required:true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Pay', paySchema)