'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vaccinations = sequelize.define('Vaccinations', {
    rabiesExp: DataTypes.DATE,
    distemperExp: DataTypes.DATE,
    bordetellaExp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vaccinations;
};