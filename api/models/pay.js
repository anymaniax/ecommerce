let mongoose = require('mongoose')
var Schema = mongoose.Schema;

let paySchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    cart: {
        type: [String],
        required: true
    },
    token: {
        type: String
    },
    payerid: {
        type: String
    }
})

module.exports = mongoose.model('Pay', paySchema)