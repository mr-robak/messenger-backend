"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({ where: { email: "marcin@test.com" } });
    const user2 = await User.findOne({ where: { email: "orion@test.com" } });
    const user3 = await User.findOne({ where: { email: "myra@test.com" } });

    return queryInterface.bulkInsert(
      "contacts",
      [
        {
          userId: user1.id,
          contactId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user1.id,
          contactId: user3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user2.id,
          contactId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user3.id,
          contactId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("contacts", null, {});
  },
};
