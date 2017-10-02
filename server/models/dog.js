'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dogs = sequelize.define('Dog', {
    name: {
      DataTypes.STRING,
      allowNull: false
    },
    breed: {
      DataTypes.STRING,
      allowNull: false
    },
    sex: {
      DataTypes.STRING,
      allowNull: false
    },
    age: {
      DataTypes.INTEGER,
      allowNull: false
    }
  });

  Dog.associate = (models) => {
    Dog.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Dog.hasMany(models.Requirement, {
      foreignKey: 'requirementId',
      as: 'requirements'
    })
  }
  return Dog;
};
