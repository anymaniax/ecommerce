var Paypal = require('paypal-express-checkout')
require('../models/db')

let Transaction = require('../models/transaction')
let Pay = require('../models/pay')

module.exports.pay = (req, res) => {
    let cart = req.body.cart
    let price = 0
    let i = 0;
    let desc = "";
    if (req.params.id) {
        for (let prod of cart) {
            Product.findById(prod.id, (err, product) => {
                if (err) {
                    let index = cart.indexOf(prod)
                    if (index > -1) {
                        cart.splice(index, 1)
                    }
                }

                if (product) {
                    price += product.price.value * prod.quantity
                    if (i != cart.length - 1) {
                        desc += product.nom + " - " + product.price.value + "€" + " x" + prod.quantity + " + "
                    } else {
                        desc += product.nom + " - " + product.price.value + "€" + " x" + prod.quantity
                    }
                    i++
                }

                if (i == cart.length) {
                    if (price == 0) {
                        return res.json({
                            error: "Could not create this transaction"
                        })
                    } else {
                        let transaction = Transaction({
                            "amount": price,
                            "cart": cart,
                            "userId": req.params.id
                        })
                        transaction.save((err, pay) => {
                            if (err) {
                                res.status(406)
                                console.log(err)
                                return res.json({
                                    error: "Could not create this transaction"
                                })
                            }
                            let paypal = Paypal.init(InfoPaypal.username, InfoPaypal.password, InfoPaypal.signature, 'http://localhost:5000/api/v1/pay/valid/' + transaction._id, 'http://localhost:5000/api/v1/pay/valid/' + transaction._id, true);
                            paypal.pay(transaction._id, transaction.amount, desc, 'EUR', true, function (err, url) {
                                if (err) {
                                    console.log(err)
                                    res.json({
                                        success: false,
                                        message: 'Payement failed.'
                                    })
                                }

                                res.json({
                                    success: true,
                                    url: url
                                })
                            })
                        })
                    }
                }
            })
        }
    } else {
        res.status(406)
        console.log(err)
        return res.json({
            error: "Could not create this transaction"
        })
    }
}

module.exports.valid = (req, res) => {
    if (req.params.id) {
        let query = req.query
        if (query.PayerID && query.token) {
            let paypal = Paypal.init(InfoPaypal.username, InfoPaypal.password, InfoPaypal.signature, 'http://localhost:3000/', 'http://localhost:3000/', true);
            paypal.detail(query.token, query.PayerID, function (err, data, invoiceNumber, price) {
                if (err) {
                    console.log(err)
                    return
                }

                if (data.success) {
                    Transaction.findOne({
                        '_id': req.params.id
                    }, (err, transaction) => {
                        if (err) {
                            console.log(err)
                            res.status(500)
                            res.redirect('http://localhost:3000/')
                        }
                        let pay = Pay({
                            "amount": transaction.amount,
                            "cart": transaction.cart,
                            "userId": transaction.userId,
                            "payerId": query.PayerID,
                            "token": query.token
                        })
                        pay.save((err, pay) => {
                            if (err) {
                                res.status(406)
                                console.log(err)
                                res.status(500)
                                res.redirect('http://localhost:3000/')
                            }
                            transaction.remove();
                            res.status(204)
                            res.redirect('http://localhost:3000/')
                        })
                    })
                } else {
                    Transaction.findOneAndRemove({
                        '_id': req.params.id
                    }, (err, transaction) => {
                        if (err) {
                            res.status(500)
                            res.redirect('http://localhost:3000/')
                        }

                        res.status(204)
                        res.redirect('http://localhost:3000/')
                    })
                }


            })
        } else if (query.token) {
            Transaction.findOneAndRemove({
                '_id': req.params.id
            }, (err, transaction) => {
                if (err) {
                    console.log(err)
                    res.status(500)
                    res.redirect('http://localhost:3000/')
                }

                res.status(204)
                res.redirect('http://localhost:3000/')
            })
        } else {
            return res.json({
                error: "Could not finish this transaction"
            })
        }
    } else {
        return res.json({
            error: "Could not finish this transaction"
        })
    }
}

module.exports.getById = (req, res) => {
    Pay.findOne({
        "_id": req.params.id
    }, (err, pay) => {
        if (!pay) {
            res.status(404)
            res.json({
                err: "No payement found :("
            })
        }

        if (err) {
            res.status(500)
            return res.json({
                err: "An unexpect error happened"
            })
        }

        let ByPay= {
               cart: pay.cart
            }
        return res.json(ByPay)
    })
}


module.exports.getByUserPayement = (req, res) => {
    Pay.find({
        "userId": req.params.id
    }, (err, pay) => {
        if (!pay) {
            res.status(404)
            res.json({
                err: "No payement found :("
            })
        }

        if (err) {
            res.status(500)
            return res.json({
                err: "An unexpect error happened"
            })
        }
        let allPay = []
        for (let p of pay) {
            let ByPay = {
                _id: p._id,
                cart: p.cart
            }
            allPay.push(ByPay)
        }
        return res.json(allPay)
    })
}

module.exports.getAllPayement = (req, res) => {
    Pay.find((err, pay) => {
        if (!pay) {
            res.status(404)
            res.json({
                err: "No payement found :("
            })
        }

        if (err) {
            res.status(500)
            return res.json({
                err: "An unexpect error happened"
            })
        }
        console.log(pay);
        let allPay = []
        for (let p of pay) {
            let ByPay = {
                _id: p._id,
                cart: p.cart
            }
            allPay.push(ByPay)
        }
        return res.json(allPay)
    })
}