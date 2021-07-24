const db = require('../utils/db')
const Sequelize = require('sequelize');

const Discount = db.define('discounts', {
    book_id : Sequelize.INTEGER,
    discount_start_date: Sequelize.DATE,
    discount_end_date: Sequelize.DATE,
    discount_price: Sequelize.FLOAT
},
{ timestamps: false })

module.exports = Discount;