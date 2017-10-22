"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Jessica",
          lastName: "Koch",
          phoneNumber: "555-555-5555",
          email: "myemail@test.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", [
      {
        first_name: "Jessica"
      }
    ]);
  }
};
