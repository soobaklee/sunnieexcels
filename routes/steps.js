var express = require('express');
var router = express.Router();
var stepsCtrl = require('../controllers/steps');

router.post('/tutorials', stepsCtrl.create);

module.exports = router;