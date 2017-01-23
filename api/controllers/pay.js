var Paypal = require('paypal-express-checkout');
require('../models/db')

let Transaction = require('../models/transaction')
let Pay = require('../models/pay')

module.exports.pay = (req, res) => {
    let cart = req.body.cart
    let price = 0
    let i = 0;
    let desc = "";
    if (req.params.id) {
        Transaction.findOneAndRemove({
            '_id': req.params.id
        }, (err, transaction) => {
            if (err) {
                console.log(err)
            }
        })
    }
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
                let transaction = Transaction({
                    "amount": price,
                    "cart": cart,
                    "userId": req.body.id
                })
                transaction.save((err, pay) => {
                    if (err) {
                        res.status(406)
                        console.log(err)
                        return res.json({
                            error: "Could not create this transaction"
                        })
                    }
                    let paypal = Paypal.init(InfoPaypal.username, InfoPaypal.password, InfoPaypal.signature, 'http://localhost:5000/api/v1/pay/' + transaction._id, 'http://localhost:5000/api/v1/pay/' + transaction._id, true);
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
        })
    }
}

module.exports.detail = (req, res) => {
    let query = req.query
    if (query.PayerID) {
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
    } else {
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
    }
}