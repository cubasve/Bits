const express = require('express');
const router = express.Router();
const habitGeneratorCtrl = require('../../controllers/habitGenerator');

router.get('/', habitGeneratorCtrl.show);

module.exports = router;