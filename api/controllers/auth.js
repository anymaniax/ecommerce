require('../models/db')

let jwt = require('jsonwebtoken');
let User = require('../models/user')


module.exports.auth = (req, res) => {
    User.findOne({
        $or: [{
            'username': req.body.username
        }, {
            'email': req.body.email
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
                    let token = jwt.sign(user, SuperSecret, {
                        expiresIn: "24h"
                    });

                    res.json({
                        sucess: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                } else {
                    res.json({
                        sucess: false,
                        message: 'Authentication failed.'
                    })
                }
            });
        }
    });
}

module.exports.checkToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, SuperSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    sucess: false,
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
        })
    }
}