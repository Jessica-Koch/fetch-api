'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vaccination = sequelize.define('Vaccination', {
    rabiesExp: DataTypes.DATE,
    distemperExp: DataTypes.DATE,
    bordetellaExp: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Vaccination.belongsTo(models.Dog, {
          foreignKey: 'dogId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Vaccination;
};
