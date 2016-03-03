var express = require('express');
var router = express.Router();
var products = require('../data/products');

router.get('/', function (req, res) {
    res.json(products);
});

module.exports = router;
