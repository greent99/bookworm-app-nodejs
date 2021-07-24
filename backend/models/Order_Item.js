const db = require('../utils/db')
const Sequelize = require('sequelize');

const Order_Item = db.define('order_items', {
    book_id : Sequelize.INTEGER,
    order_id: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    price: Sequelize.FLOAT
},
{ timestamps: false })

module.exports = Order_Item;