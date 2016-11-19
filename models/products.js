var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    nom: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: Number, required: true},
    tag: {type: String, required: true}
});


module.exports = mongoose.model("Products",productSchema);
