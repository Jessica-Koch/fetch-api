"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
      .then(() => {
        return queryInterface.createTable("Users", {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.literal("gen_random_uuid()")
          },
          first_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          last_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          phone_number: {
            allowNull: false,
            type: Sequelize.STRING
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
