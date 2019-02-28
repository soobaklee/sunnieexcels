var express = require('express');
var router = express.Router();
var tutorialsCtrl = require('../controllers/tutorials');

/* GET users listing. */
router.get('/', tutorialsCtrl.index);
router.get('/new', isLoggedIn, tutorialsCtrl.new);
router.get('/:id', tutorialsCtrl.show);
router.post('/', isLoggedIn, tutorialsCtrl.create);
router.delete('/:id', tutorialsCtrl.delete);
router.put('/:id/edit', tutorialsCtrl.update);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())return next();
  res.redirect('/auth/google');
}


module.exports = router;
