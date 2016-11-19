var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var products = require('./routes/products')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/products', products);

app.listen(8080);
