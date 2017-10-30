var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_SECRET,
  callbackURL: 'http://localhost:8000/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({userid: profile.id}, {name: profile.displayName, userid: profile.id}, function(err, user) {
    return done(err, user);
  });
}));

module.exports = passport;
