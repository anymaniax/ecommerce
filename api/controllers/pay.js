var Paypal = require('paypal-express-checkout');
var paypal = Paypal.init('victor-bury_api2.hotmail.com', 'ZP9R3ABUNUHBX2DA', 'AFcWxV21C7fd0v3bYYYRCpSSRl31Ab7WFzMDqVuqbBEoueztYD8iBwcr', 'http://localhost:3000/', 'http://localhost:3000/', true);

module.exports.pay = (req, res) => {

    paypal.pay(req.params.id, req.body.amount, req.body.desc, 'EUR', true, function (err, url) {
        if (err) {
            console.log(err)
            res.json({
            success: false
        })
        }

        res.json({
            success: true,
            url:url
        })
    })

}

module.exports.detail = (req, res) => {
    paypal.detail(req.body.token, req.body.payerId , function (err, data, invoiceNumber, price) {

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