"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Marcin",

          email: "marcin@test.com",
          password: "marcin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Orion",
          lastName: "Marcinsson",
          email: "orion@test.com",
          password: "orion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Myra",
          lastName: "Heemskerk",
          email: "myra@test.com",
          password: "myra",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
