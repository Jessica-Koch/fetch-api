const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require our routes into the application
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send('root'));
const auth = require('./server/routes/auth');

app.use('/api/auth', auth);

module.exports = app;
