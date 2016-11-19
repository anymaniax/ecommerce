var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Backend Bitches');
});

module.exports = router;
