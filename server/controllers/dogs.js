const Dog = require('../models').Dog;

module.exports = {
  create(request, response) {
    return Dog
      .create({
        name: request.body.name,
        breed: request.body.breed,
        sex: request.body.sex,
        age: request.body.age,
        userId: request.params.userId,
      })
      .then(dog => response.status(201).send(dog))
      .catch(error => response.status(400).send(error));
  },
};
