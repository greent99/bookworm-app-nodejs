const db = require('../utils/db')
const Sequelize = require('sequelize');
const Discount = require('./Discount')
const Category = require('./Category')
const Author = require('./Author')
const Review = require('./Review')

const Book = db.define('books', {
    book_title : Sequelize.STRING,
    category_id: Sequelize.INTEGER,
    author_id: Sequelize.INTEGER,
    book_summary: Sequelize.STRING,
    book_price: Sequelize.FLOAT,
    book_cover_photo: Sequelize.STRING
},
{ timestamps: false })

Book.hasOne(Discount, {
    foreignKey: 'book_id'
})
Book.hasMany(Review, {
    foreignKey: 'book_id'
})
Book.belongsTo(Category, {
    foreignKey: 'category_id'
})
Book.belongsTo(Author, {
    foreignKey: 'author_id'
})

module.exports = Book;