var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Sunnie Excels', user: req.user });
});

router.get('/auth/google', passport.authenticate('google',
{ scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/tutorials',
    failureRedirect : '/homepage'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About SunniExcels', user: req.user })
})

module.exports = router;
