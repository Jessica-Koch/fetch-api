const usersController = require('../controllers').users;
const dogsController = require('../controllers').dogs;
const reservationsController = require('../controllers').reservations;
const vaccinationsController = require('../controllers').vaccinations;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

function ensureAuthenticated(request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  }
  response.redirect('/login');
}

module.exports = router => {
  router.get('/api', (request, response) =>
    response.status(200).send({
      message: 'Welcome to fetch!'
    })
  );

  /* User Routes*/
  // router.get('/users', ensureAuthenticated, function(req, res, next) {
  //   res.render('user', { user: req.user });
  // });

  // router.post('/api/users', usersController.create);
  // router.get('/api/users', usersController.list);
  // router.get('/api/users/:userId', usersController.retrieve);
  // router.put('/api/users/:userId', usersController.update);
  // router.delete('/api/users/:userId', usersController.destroy);

  /* Reservation routes */
  router.post('/api/users/:userId/reservations', reservationsController.create);
  router.put('/api/users/:userId/reservations/:reservationId', reservationsController.update);
  router.delete('/api/users/:userId/reservations/:reservationId', reservationsController.destroy);

  /* Dog Routes*/
  router.post('/api/users/:userId/dogs', dogsController.create);
  router.put('/api/users/:userId/dogs/:dogId', dogsController.update);
  router.delete('/api/users/:userId/dogs/:dogId', dogsController.destroy);

  /* Vaccine Routes*/
  router.post('/api/users/:userId/dogs/:dogId/vaccinations', vaccinationsController.create);
  router.put('/api/users/:userId/dogs/:dogId/vaccinations/:vaccinationId', vaccinationsController.update);
  router.delete('/api/users/:userId/dogs/:dogId/vaccinations/:vaccinationid', vaccinationsController.destroy);
};
