const express = require('express');
const router = express.Router();
const passportFacebook = require('../auth/facebook');
const passportGoogle = require('../auth/google');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models').User;

require('dotenv').config();

router.post('/register', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })
    .then(user => {
      // create a token
      var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(201).send({ auth: true, token: token });
    })
    .catch(error => res.status(400).send(error));
});

router.get('/me', function(req, res) {
  console.log('-----------WILL THIS WORK-----------');
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    User.findById(decoded.id)
      .then(user => {
        if (!user) return res.status(404).send('No user found');

        res.status(200).send(user);
      })
      .catch(err => {
        if (err) return res.status(500).send('There was a problem finding the user.');
      });
  });
});

module.exports = router;
