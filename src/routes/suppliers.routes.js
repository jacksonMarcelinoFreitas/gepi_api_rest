const express = require('express');
const router = express.Router();
const SupplierController = require('../controllers/supplierController');

router.get('/show-supplier/:supplier_external_id', SupplierController.show);
router.get('/list-supplier', SupplierController.index);
router.post('/create', SupplierController.create);
router.put('/update/:supplier_external_id', SupplierController.update);
router.delete('/delete/:supplier_external_id', SupplierController.delete);

module.exports = router;
