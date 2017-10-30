const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

const app = express();
app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.intitialize());
app.use(passport.session());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', auth);

// Require our routes into the application
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'WE MADE IT!',
}))

module.exports = app;
