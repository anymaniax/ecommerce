require('../models/db')

let jwt = require('jsonwebtoken');
let User = require('../models/user')

const genJWT = (user, callback) => {
    const _userFields = {
        _id: user._id,
        lastname: user.lastname,
        firstname: user.firstname,
        username: user.username,
        email: user.email,
        sex: user.sex,
        phone: user.phone,
        address: {
            street: user.address.street,
            number: user.address.number,
            town: user.address.town,
            postalCode: user.address.postalCode,
            country: user.address.country
        },
        role: user.role
    }

    const token = jwt.sign(_userFields, SuperSecret, {
        expiresIn: "72h"
    })

    callback(token)
}

module.exports.genJWT = genJWT

module.exports.auth = (req, res) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']
    if (token) {
        jwt.verify(token, SuperSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    sucess: false,
                    message: 'Failed to Authentication token.'
                });

            } else {
               return res.json({
                    sucess: true,
                    message: 'Sucess to Authentication token.'
                });
            }
        });
    } else {
        const username = new RegExp(req.body.username, 'i')
        User.findOne({
            $or: [{
                'username': { $regex : username }
            }, {
                'email': { $regex : username }
            }]
        }, (err, user) => {
            if (err) throw err;

            if (!user) {
                res.json({
                    success: false,
                    message: 'Authentication failed.'
                })
            } else if (user) {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (err) throw err
                    if (isMatch) {
                        genJWT(user, token => {
                            res.json({
                                success: true,
                                message: 'Enjoy your token!',
                                token: token
                            });
                        })
                    } else {
                        res.json({
                            success: false,
                            message: 'Authentication failed.'
                        });
                    }
                });
            }
        });
    }
}

module.exports.actu = (req, res) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']
    if (token) {
        jwt.verify(token, SuperSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    sucess: false,
                    message: 'Failed to Authentication token.'
                });

            } else {
                User.findOne({
                    _id: decoded._id
                }, (err, user) => {
                    if (err) throw err;

                    if (!user) {
                        res.json({
                            success: false,
                            message: 'Authentication failed.'
                        })
                    } else if (user) {
                        genJWT(user, token => {
                            res.json({
                                success: true,
                                message: 'Enjoy your token!',
                                token: token
                            });
                        })
                    } else {
                        res.json({
                            success: false,
                            message: 'Authentication failed.'
                        })
                    }

                })
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        })
    }
}

module.exports.checkToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']
    if (token) {
        jwt.verify(token, SuperSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to Authentication token.'
                });

            } else {
                req.decode = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}



module.exports.requireAdmin = (req, res, next) => {
    if(!req.decode || req.decode.role !== 'admin'){
        return res.json({
            success: false,
            message: 'This route can only be accessed by an administrator'
        });
    }
    next();
}

module.exports.requireId = (req, res, next) => {
    if (req.decode && req.decode._id === req.params.id || req.decode.role === 'admin') {
        return next();
    }
    return res.json({
        success: false,
        message: 'Failed to Authentication'
    })
}