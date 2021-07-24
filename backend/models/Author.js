const db = require('../utils/db')
const Sequelize = require('sequelize');

const Author = db.define('authors', {
    author_name : Sequelize.STRING,
    author_bio: Sequelize.STRING
},
{ timestamps: false })

module.exports = Author;