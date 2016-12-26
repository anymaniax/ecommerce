require('../models/db')

let User = require('../models/user')

let bcrypt = require('bcryptjs');

const PORT = process.env.PORT || 5000

module.exports.getAll = (req, res) => {
    User.find((err, users) => {
        if (!users) {
            res.status(404)
            res.json({
                err: "No user found :("
            })
        }

        if (err) {
            res.status(500)
            return res.json({
                err: "An unexpect error happened"
            })
        }
        let allUsers=[]
        for(let user of users){
            let ByUser={
                _id: user._id,
                lastname: user.lastname,
                firstname: user.firstname,
                username: user.username,
                email: user.email,
                sex: user.sex,
                phone: user.phone,
                address:
                    { street: user.address.street,
                        number: user.address.number,
                        town: user.address.town,
                        postalCode: user.address.postalCode,
                        country: user.address.country }
            }
            allUsers.push(ByUser)
        }
        return res.json(allUsers)
    })
}

module.exports.getById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (user) {
            let ByUser={
                _id: user._id,
                lastname: user.lastname,
                firstname: user.firstname,
                username: user.username,
                email: user.email,
                sex: user.sex,
                phone: user.phone,
                address:
                    { street: user.address.street,
                        number: user.address.number,
                        town: user.address.town,
                        postalCode: user.address.postalCode,
                        country: user.address.country },
                role: user.role
            }
            console.log(ByUser);
            return res.json(ByUser)
        }

        if (err) {
            res.status(404)
            return res.json({
                error: "No user found for that id."
            })
        }
    })
}

module.exports.addUser = (req, res) => {
    User.findOne({$or:[{
        'username': req.body.username
    }, {
        'email': req.body.email
    }]}, (err, user) => {
        if (user) {
            console.log(user);
            if (user.username == req.body.username) {
                return res.json({
                    error: "Username already use."
                })
            } else {
                return res.json({
                    error: "Email already use."
                })
            }
        } else {
            let password = req.body.password
            bcrypt.genSalt(Salt, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    req.body.password = hash
                    let user = User(req.body)
                    user.save((err, user) => {
                        if (err) {
                            res.status(406)
                            console.log(err)
                            return res.json({
                                error: "Could not create this user"
                            })
                        }

                        res.status(200)
                        return res.send({
                            link: `http://localhost:${PORT}/api/v1/users/${user.id}`
                        })
                    })
                });
            });
        }
    })
}

module.exports.delUser = (req, res) => {
    User.findOneAndRemove({
        '_id': req.params.id
    }, (err, user) => {
        if (err) {
            res.status(500)
            return res.json('Could not remove this user :(')
        }

        res.status(204)
        res.end()
    })
}

module.exports.updateUser = (req, res) => {
    User.findOne({
        '_id': req.params.id
    }, (err, user) => {
        if (user.username == req.body.username && user.email == req.body.email) {
            User.update({
                '_id': req.params.id
            }, {
                $set: req.body
            }, (err, user) => {
                if (err) {
                    res.status(500)
                    return res.json({
                        error: 'Could not update this user'
                    })
                }
                res.status(200)
                return res.json({
                    message: "User updated with success",
                    user
                })
            })
        } else if (user.username != req.body.username) {
            User.findOne({
                'username': req.body.username
            }, (err, user) => {
                if (user) {
                    return res.json({
                        error: "Username already use."
                    })
                } else {
                    User.update({
                        '_id': req.params.id
                    }, {
                        $set: req.body
                    }, (err, user) => {
                        if (err) {
                            res.status(500)
                            return res.json({
                                error: 'Could not update this user'
                            })
                        }
                        res.status(200)
                        return res.json({
                            message: "User updated with success",
                            user
                        })
                    })
                }
            })
        } else {
            User.findOne({
                'email': req.body.email
            }, (err, user) => {
                if (user) {
                    return res.json({
                        error: "Email already use."
                    })
                } else {
                    User.update({
                        '_id': req.params.id
                    }, {
                        $set: req.body
                    }, (err, user) => {
                        if (err) {
                            res.status(500)
                            return res.json({
                                error: 'Could not update this user'
                            })
                        }
                        res.status(200)
                        return res.json({
                            message: "User updated with success",
                            user
                        })
                    })
                }
            })
        }
    })
}

module.exports.updatePass = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err

        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) throw err
            if (isMatch) {
                let password = req.body.newPassword
                bcrypt.genSalt(Salt, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        user.password = hash
                        user.save()
                        res.status(200)
                        return res.json({
                            message: "Password updated with success"
                        })
                    })
                })
            } else {
                res.status(500)
                return res.json({
                    error: "Bad password"
                })
            }
        });

    })
}