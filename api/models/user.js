let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')

let userSchema = new mongoose.Schema({
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number : {
            type: Number,
            required: true
        },
        town : {
            type: String,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    /**
    M, F, N
    **/
    sex: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    /**
    seller, admin, user
    **/
    role: {
        type: String,
        required: true,
        default: "user"
    },
    createdAt: {
		type: Date,
		default: Date.now
	}
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

module.exports = mongoose.model('User', userSchema)