const User = require('../models').User;
const Dog = require('../models').Dog;
const Reservation = require('../models').Reservation;

module.exports = {
  create(request, response) {
    return User.create({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    })
      .then(() =>
        User.findOrCreate({
          where: {
            email: request.body.email
          }
        })
      )
      .spread((user, created) => {
        console.log(
          user.get({
            plain: true
          })
        );
      })
      .then(user => response.status(201).send(user))
      .catch(error => response.status(400).send(error));
  },
  list(request, response) {
    return User.findAll({
      include: [
        {
          model: Dog,
          as: 'dogs'
        },
        {
          model: Reservation,
          as: 'reservations'
        }
      ]
    })
      .then(users => response.status(200).send(users))
      .catch(error => response.status(400).send(error));
  },
  retrieve(request, response) {
    return User.findById(request.params.userId, {
      include: [
        {
          model: Dog,
          as: 'dogs'
        },
        {
          model: Reservation,
          as: 'reservations'
        }
      ]
    })
      .then(user => {
        if (!user) {
          return response.status(404).send({
            message: 'User not found.'
          });
        }
        return response.status(200).send(user);
      })
      .catch(error => response.status(400).send(error));
  },
  update(request, response) {
    return User.findById(request.params.userId, {
      include: [
        {
          model: Dog,
          as: 'dogs'
        },
        {
          model: Reservation,
          as: 'reservations'
        }
      ]
    })
      .then(user => {
        if (!user) {
          return response.status(404).send({
            message: 'User not found.'
          });
        }
        return user
          .update(request.body, { fields: Object.keys(request.body) })
          .then(() => response.status(200).send(user)) // Send back the updated todo.
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  },
  destroy(request, response) {
    return User.findById(request.params.userId).then(user => {
      if (!user) {
        return response.status(400).send({
          message: 'User not found.'
        });
      }
      return user
        .destroy()
        .then(() => response.status(200).send({ message: 'User was successfully deleted' }))
        .catch(error => response.status(400).send(error));
    });
  }
};
