var Paypal = require('paypal-express-checkout');
var paypal = Paypal.init('victor-bury-facilitator_api1.hotmail.com', '4GHKS42K84PM3GS6', 'AFcWxV21C7fd0v3bYYYRCpSSRl31AzNdGFDY.mnpHH5Z5mT.QORLxTtI', 'http://localhost:3000/', 'http://localhost:3000/', true);
require('../models/db')

let Pay = require('../models/pay')

module.exports.pay = (req, res) => {
    
    let cart = req.body.cart
    console.log(cart);
    Object.keys(cart).forEach(function (key) {
  let c = myObj[key];
  console.log(c);
  // do something with obj
});
    /*paypal.pay(req.params.id, req.body.amount, req.body.desc, 'EUR', true, function (err, url) {
        if (err) {
            console.log(err)
            res.json({
            success: false,
            message: 'Payement failed.'
        })
        }

        //res.redirect(url);
         res.json({
            success: false,
            url:url
        })
    })*/

}

module.exports.detail = (req, res) => {
    paypal.detail(req.body.payToken, req.body.payerId , function (err, data, invoiceNumber, price) {

        if (err) {
            console.log(err)
            return
        }

        if (data.success)
            console.log('DONE, PAYMENT IS COMPLETED.')
        else
            console.log('SOME PROBLEM:', data)

    })
}