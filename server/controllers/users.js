const User = require('../models').User;
const Dog = require('../models').Dog;

module.exports = {
  create(request, response) {
    return User
      .create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        phoneNumber: request.body.phoneNumber,
        email: request.body.email
      })
      .then(user => response.status(201).send(user))
      .catch(error => response.status(400).send(error));
  },
  list(request, response) {
    return User
      .findAll({
        include: [{
          model: Dog,
          as: 'dogs',
        }],
      })
      .then(users => response.status(200).send(users))
      .catch(error => response.status(400).send(error));
  },
};
