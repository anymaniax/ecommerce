var Paypal = require('paypal-express-checkout');
require('../models/db')

let Pay = require('../models/pay')

module.exports.pay = (req, res) => {
    let cart = req.body.cart
    let price = 0
    let i = 0;
    let desc = "";

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
                let pay = Pay({
                    "amount": price,
                    "cart": cart,
                    "userId": req.body.id
                })
                pay.save((err, pay) => {
                    if (err) {
                        res.status(406)
                        console.log(err)
                        return res.json({
                            error: "Could not create this transaction"
                        })
                    }
                    let paypal = Paypal.init(InfoPaypal.username, InfoPaypal.password, InfoPaypal.signature, 'http://localhost:5000/api/v1/pay/'+ pay._id, 'http://localhost:5000/api/v1/pay/' + pay._id, true);
                    paypal.pay(pay._id, pay.amount, desc, 'EUR', true, function (err, url) {
                        if (err) {
                            console.log(err)
                            res.json({
                                success: false,
                                message: 'Payement failed.'
                            })
                        }

                        //res.redirect(url);
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
                Pay.update({
                    '_id': req.params.id
                }, {
                    $set: {
                        'status': true,
                        'token': query.token,
                        'payerId': query.PayerID
                    }
                }, (err, pay) => {
                    if (err) {
                        res.status(500)
                        res.redirect('http://localhost:3000/')
                    }
                    res.status(200)
                    res.redirect('http://localhost:3000/')
                })
            } else {
                Pay.update({
                    '_id': req.params.id
                }, {
                    $set: {
                        'status': false,
                        'token': query.token,
                        'payerId': query.PayerID
                    }
                }, (err, pay) => {
                    if (err) {
                        res.status(500)
                        return res.json({
                            error: 'Could not update this transaction'
                        })
                    }
                    res.status(200)
                    res.redirect('http://localhost:3000/')
                })
            }


        })
    } else {
        Pay.findOneAndRemove({
            '_id': req.params.id
        }, (err, pay) => {
            if (err) {
                res.status(500)
                res.redirect('http://localhost:3000/')
            }

            res.status(204)
            res.redirect('http://localhost:3000/')
        })
    }
}