const Vaccination = require('../models').Vaccination;

module.exports = {
  create(request, response) {
    return Vaccination
      .create({
        bordetellaExp: request.body.bordetellaExp,
        distemperExp: request.body.distemperExp,
        rabiesExp: request.body.distemperExp
      })
      .then(vaccination => response.status(201)
        .send(vaccination))
      .catch(error => response.status(400)
        .send(error));
  },
  update(request, response) {
    return Vaccination
      .find({
        where: {
          id: request.params.vaccinationId,
          dogId: request.params.dogId,
        },
      })
      .then(vaccination => {
        if(!vaccination) {
          return response.status(404)
            .send({
              message: 'Vaccination not found.'
            });
        }
        return vaccination
          .update(request.body, { fields: Object.keys(request.body)})
          .then(updatedVaccination => response.status(200)
            .send(updatedVaccination))
          .catch(error => response.status(400)
            .send(error))
      })
      .catch(error => response.status(400)
      .send(error));
  },
  destroy(request, response) {
    return Vaccination
      .find({
        where: {
          id: request.params.vaccinationId,
          dogId: request.params.dogId,
        }
      })
      .then(vaccination => {
        if(!vaccination) {
          return response.status(404)
            .send({
              message: 'Vaccination not found.'
            })
        }
        return vaccination
          .destroy()
          .then(() => response.status(204)
            .send())
            .catch(error => response.status(400)
          .send(error));
      })
      .catch(error => response.status(400)
        .send(error));
  }
};
