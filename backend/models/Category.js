const db = require('../utils/db')
const Sequelize = require('sequelize');

const Category = db.define('categories', {
    category_name : Sequelize.STRING,
    category_desc: Sequelize.STRING
},
{ timestamps: false })

module.exports = Category;