const usersController = require('../controllers').users;
const dogsController = require('../controllers').dogs;

module.exports = (app) => {
  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to fetch!'
  }));

  // user routes
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  // dog routes
  app.post('/api/users/:userId/dogs', dogsController.create);
  app.put('/api/users/:userId/dogs/:dogId', dogsController.update);
  app.delete('/api/users/:userId/dogs/:dogId', dogsController.destroy)
}
