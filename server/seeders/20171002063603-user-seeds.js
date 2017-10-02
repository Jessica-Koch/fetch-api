"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Jessica",
          last_name: "Koch",
          phone_number: "555-555-5555",
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
