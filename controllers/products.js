require('../models/db');

module.exports.listProductController = (req, res) => {
    Products.find(function(err, product) {
        if (err)
            return console.error(err);
        res.json({tab: product});
    })
}

module.exports.updateProductController = (req, res) => {
    Products.findById(req.params.id, function(err, product) {
        if (err)
            return console.error(err);
        res.json({product: product});
    })
}

module.exports.storeProductController = (req, res) => {
    if (req.params.id) {
        Products.findById(req.params.id, function(err, product) {
            if (err)
                return console.error(err);
            let {nom, image, category, desc, price, tag} = req.body
            product.nom = nom;
            product.image = image;
            product.category = category;
            product.desc = desc;
            product.price = price;
            product.tag = tag;
            product.save(function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(nom)
                }
            });

        });
    } else {
        let product = new Products();
        let {nom, image, category, desc, price, tag} = req.body
        product.nom = nom;
        product.image = image;
        product.category = category;
        product.desc = desc;
        product.price = price;
        product.tag = tag;
        product.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log(nom)
            }
        });
    }
}

module.exports.delProductController = (req, res) => {
    Products.findById(req.params.id, function(err, product) {
        if (err)
            return console.error(err);
        product.remove(function(err, removed) {});
    })
}
