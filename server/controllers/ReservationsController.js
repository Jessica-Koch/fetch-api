const Reservation = require('../models').Reservation;

module.exports = {
  create(request, response) {
    return Reservation.create({
      start: request.body.start,
      end: request.body.end,
      userId: request.params.userId
    })
      .then(reservation => response.status(201).send(reservation))
      .catch(error => response.status(400).send(error));
  },

  update(request, response) {
    return Reservation.find({
      where: {
        id: request.params.reservationId,
        userId: request.params.userId
      }
    })
      .then(reservation => {
        if (!reservation) {
          return response.status(404).send({
            message: 'Your reservation was not found.'
          });
        }

        return reservation
          .update(request.body, { fields: Object.keys(request.body) })
          .then(updatedReservation => response.status(200).send(updatedReservation))
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  },
  destroy(request, response) {
    return Reservations.find({
      where: {
        id: request.params.reservationId,
        userId: request.params.userId
      }
    })
      .then(reservation => {
        if (!reservation) {
          return response.status(404).send({ message: 'Reservation not found.' });
        }

        return reservation
          .destroy()
          .then(() => response.status(204).send())
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  }
};
