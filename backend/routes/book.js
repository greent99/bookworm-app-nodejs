var express = require('express');
var router = express.Router();
const BookController = require('../controllers/BookController')
const validate = require('../middlewares/validate.mdw')
const addReviewSchema = require('../schema/addReview.json')

/* GET home page. */
router.get('/', BookController.getAll);
router.get('/getTopOnSale', BookController.getTopOnSale)
router.get('/getTopRecommended', BookController.getTopRecommended)
router.get('/getTopPopular', BookController.getTopPopular)
router.get('/:id', BookController.detail)
router.get('/:id/reviews', BookController.getReview)
router.post('/:id/addReview', validate(addReviewSchema), BookController.addReview)

module.exports = router;
