'use strict';
module.exports = (sequelize, DataTypes) => {
  var Requirement = sequelize.define('Requirement', {
    rabies: DataTypes.DATE,
    distemper: DataTypes.DATE,
    bordetella: DataTypes.DATE
  });

  Requirement.associate = (models) => {
    Requirement.belongsTo(models.Dog, {
      foreignKey: 'dogId',
      onDelete: 'CASCADE'
    })
  }
  return Requirement;
};
