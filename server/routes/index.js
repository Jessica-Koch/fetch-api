const usersController = require('../controllers').users;
const dogsController = require('../controllers').dogs;
const vaccinationsController = require('../controllers').vaccinations;

const ensureAuthenticated = (request, response, next) => {
  if (request.isAuthenticated()) { return next(); }
  response.redirect('/login')
}

module.exports = (app) => {
  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to fetch!'
  }));

  // user routes
  router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('user', { user: req.user });
});
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  // dog routes
  app.post('/api/users/:userId/dogs', dogsController.create);
  app.put('/api/users/:userId/dogs/:dogId', dogsController.update);
  app.delete('/api/users/:userId/dogs/:dogId', dogsController.destroy);

  // vaccine routes
  app.post('/api/users/:userId/dogs/:dogId/vaccinations', vaccinationsController.create);
  app.put('/api/users/:userId/dogs/:dogId/vaccinations/:vaccinationId', vaccinationsController.update);
  app.delete('/api/users/:userId/dogs/:dogId/vaccinations/:vaccinationid', vaccinationsController.destroy);
}
