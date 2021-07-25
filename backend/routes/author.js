var express = require('express');
var router = express.Router();
const AuthorController = require('../controllers/AuthorController')

/* GET home page. */
router.get('/', AuthorController.getAll)

module.exports = router;