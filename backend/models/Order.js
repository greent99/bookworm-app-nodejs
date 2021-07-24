const db = require('../utils/db')
const Sequelize = require('sequelize');

const Order = db.define('orders', {
    order_date: Sequelize.DATE,
    order_amount: Sequelize.FLOAT
},
{ timestamps: false })

module.exports = Order;