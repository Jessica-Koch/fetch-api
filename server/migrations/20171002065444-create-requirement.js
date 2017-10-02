'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rabies: {
        type: Sequelize.DATE
      },
      distemper: {
        type: Sequelize.DATE
      },
      bordetella: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dogId: {
        type: Sequelize.DataTypes.UUID,
        onDelete: 'Cascade',
        references: {
          model: 'Dogs',
          key: 'id',
          as: 'dogId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Requirements');
  }
};
