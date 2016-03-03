var express = require('express');
var router = express.Router();
var products = require('../data/products');
var orderservice = require('../services/order-service');

function prepareOrderDetails(order) {
    var prods = Object.keys(order).map(function (key) {
        var product = products.filter(function (product) {
            return product.id == key;
        })[0];

        return {
            name: product.name,
            id: product.id,
            price: product.price,
            quantity: order[key],
            cost: order[key] * product.price

        };
    });

    return {
        products: prods,
        total: prods.reduce(function (memo, product) {
            return memo + product.cost
        }, 0)
    };
}

router.route('/')
    .get(function (req, res) {
        var data = {};
        Object.keys(req.query).forEach(function(key){
            data[key] = parseInt(req.query[key]);
        });
        res.json(prepareOrderDetails(data));
    })
    .post(function (req, res) {
        var order = prepareOrderDetails(req.body.cart);
        order.email = req.body.email;
        order.phone = req.body.phone;
        var orderId = orderservice.publish(order);
        res.json({orderId: orderId});
    });

module.exports = router;
