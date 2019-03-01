var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');


router.post('/tutorials/:id/comments', isLoggedIn, commentsCtrl.create);
// router.delete('/tutorials:id/comments', isLoggedIn, commentsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router; 
