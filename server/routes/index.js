const usersController = require('../controllers').users;
const dogsController = require('../controllers').dogs;

module.exports = (app) => {
  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to fetch!'
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);

  app.post('/api/users/:userId/dogs', dogsController.create);
}
