var express = require('express');

var routes = require('./routes/index');

var app = express();

app.use('/', routes);

app.listen(8080);
