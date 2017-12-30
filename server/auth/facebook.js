const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');
require('dotenv').config();

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_APP_ID,
      clientSecret: process.env.FB_CLIENT_TOKEN,
      callbackURL: 'http://localhost:8000/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ name: profile.displayName }, { name: profile.displayName, userid: profile.id }, function(
        err,
        user
      ) {
        if (err) {
          console.error(err);
          return done(err);
        }
        done(null, user);
      });
    }
  )
);

module.exports = passport;
