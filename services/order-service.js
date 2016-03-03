function OrderService() {
    this._orders = {};
}

OrderService.prototype = Object.create({
    publish: function (order) {
        var orderId;

        if (Object.keys(this._orders).length == 0) {
            orderId = 1;
        } else {
            orderId = Math.max.apply(null, Object.keys(this._orders)) + 1;
        }
        order.orderId = orderId;
        this._orders[orderId] = order;
        return orderId;
    },

    get: function (orderId) {
        return this._orders[orderId];
    }
});

OrderService.prototype.constructor = OrderService;

module.exports = new OrderService;