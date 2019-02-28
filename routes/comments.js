var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');


router.post('/tutorials/:id/comments', isLoggedIn, commentsCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router; 

// router.get('/tutorials/:id', commentsCtrl.new);
// router.post('/tutorials', isLoggedIn, commentsCtrl.create);
// router.post('/tutorials/:id', isLoggedIn, commentsCtrl.addComment);


