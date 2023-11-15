const express = require('express');
const router = express.Router();
const EpiController = require('../controllers/epiController');

router.get('/show-epi/:epi_external_id', EpiController.show);
router.get('/list-epis', EpiController.index);
router.post('/create', EpiController.create);
router.put('/update/:epi_external_id', EpiController.update);
router.delete('/delete/:epi_external_id', EpiController.delete);

module.exports = router;

