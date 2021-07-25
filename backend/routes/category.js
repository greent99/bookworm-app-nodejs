var express = require('express');
var router = express.Router();
const CategoryController = require('../controllers/CategoryController')

/* GET home page. */
router.get('/', CategoryController.getAll)

module.exports = router;