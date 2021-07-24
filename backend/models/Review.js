const db = require('../utils/db')
const Sequelize = require('sequelize');

const Review = db.define('reviews', {
    book_id : Sequelize.INTEGER,
    review_title: Sequelize.STRING,
    review_details: Sequelize.STRING,
    review_date: Sequelize.DATE,
    rating_start: Sequelize.INTEGER,
},
{ timestamps: false })

module.exports = Review;