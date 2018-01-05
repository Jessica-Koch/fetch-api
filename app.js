const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();
const bodyParser = require('body-parser');
const AuthController = require('./server/controllers/AuthController');
const path = require('path');
const app = express();
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
app.use(
  logger(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application
require('./server/routes')(app);
app.use('/api/auth', AuthController);
app.get('*', (req, res) => res.status(200).send(req));

module.exports = app;
