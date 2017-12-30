const express = require('express');
const router = express.Router();
const passportFacebook = require('../auth/facebook');
const passportGoogle = require('../auth/google');

router.get('/login', function(request, response, next) {
  response.render('login', { title: 'Please sign in with:' });
});

router.get('/logout', function(request, response) {
  request.logout();
  response.redirect('/');
});

/* FACEBOOK ROUTER */
router.get('/facebook', passportFacebook.authenticate('facebook'));

router.get('/facebook/callback', passportFacebook.authenticate('facebook', { failureRedirect: '/login' }), function(
  req,
  res
) {
  // Successful authentication, redirect home.
  res.redirect('/api');
});

/* GOOGLE ROUTER */
router.get('/google', passportGoogle.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

router.get('/google/callback', passportGoogle.authenticate('google', { failureRedirect: '/login' }), function(
  req,
  res
) {
  res.redirect('/api');
});

module.exports = router;
