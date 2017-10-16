'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Dog.associate = (models) => {
    Dog.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
    Dog.hasMany(models.Requirement, {
      foreignKey: 'requirementId',
      as: 'requirements'
    })
  }
  return Dog;
};
