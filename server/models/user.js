'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = models => {
    User.hasMany(models.Dog, {
      foreignKey: 'userId',
      as: 'dogs'
    });

    User.hasMany(models.Reservation, {
      foreignKey: 'userId',
      as: 'reservations'
    });
  };

  return User;
};
