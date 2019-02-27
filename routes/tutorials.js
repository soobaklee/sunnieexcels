var express = require('express');
var router = express.Router();
var tutorialsCtrl = require('../controllers/tutorials');

/* GET users listing. */
router.get('/', tutorialsCtrl.index);
router.get('/new', tutorialsCtrl.new);
router.get('/:id', tutorialsCtrl.show)
router.post('/', tutorialsCtrl.create);

module.exports = router;
