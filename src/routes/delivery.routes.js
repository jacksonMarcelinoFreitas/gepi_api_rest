const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/deliveryController');

router.get('/list-deliveries', DeliveryController.index);
router.post('/create', DeliveryController.create);

module.exports = router;
