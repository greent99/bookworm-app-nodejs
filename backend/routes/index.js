var express = require('express');
var router = express.Router();
const Book = require('../models/Book')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const books = await Book.findAll();
  return res.json({data: books})
});

module.exports = router;
