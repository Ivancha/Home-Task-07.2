var express = require('express');
var router = express.Router();
var orderservice = require('../services/order-service');

router.get('/:orderId', function (req, res) {
    res.json(orderservice.get(req.params.orderId));
});

module.exports = router;