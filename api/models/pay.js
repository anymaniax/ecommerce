let mongoose = require('mongoose')
var Schema = mongoose.Schema;

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
        type: String
    },
    payerId: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required:true,
        default: false
    }
})

module.exports = mongoose.model('Pay', paySchema)