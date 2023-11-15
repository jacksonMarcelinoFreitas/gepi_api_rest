const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.get('/show-employee/:employee_external_id', EmployeeController.show);
router.get('/list-employees', EmployeeController.index);
router.post('/create', EmployeeController.create);
router.put('/update/:employee_external_id', EmployeeController.update);
router.delete('/delete/:employee_external_id', EmployeeController.delete);

module.exports = router;
