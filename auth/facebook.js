const passport = require('passport')
const FacebookStrategy =  require('passport-facebook').Strategy;
const User = require('../models/User');
require('dotenv').config();

passport.use(new FacebookStrategy({
  clientId: process.env.FB_CLIENT_TOKEN,
  clientSecret: process.env.FB_CLIENT_TOKEN,
  callbackURL: 'http://localhost:8000/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({anme: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
    if (err) { return done(err); }
      done(null, user);
    }
  })
}));

module.exports = passport;
