var express = require('express');
var router = express.Router();
const OrderController = require('../controllers/OrderController')
const validate = require('../middlewares/validate.mdw')
const addOrderSchema = require('../schema/addOrder.json')

/* GET home page. */
router.post('/add', validate(addOrderSchema), OrderController.addOrder)

module.exports = router;