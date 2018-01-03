const users = require('./UsersController');
const dogs = require('./DogsController');
const reservations = require('./ReservationsController');
const vaccinations = require('./VaccinationsController');

module.exports = {
  users,
  dogs,
  reservations,
  vaccinations
};
