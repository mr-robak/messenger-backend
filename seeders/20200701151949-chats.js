"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({ where: { email: "marcin@test.com" } });
    const user2 = await User.findOne({ where: { email: "orion@test.com" } });
    const user3 = await User.findOne({ where: { email: "myra@test.com" } });

    return queryInterface.bulkInsert(
      "chats",
      [
        {
          creatorId: user1.id,
          title: user2.firstName,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          creatorId: user1.id,
          title: "Summer trip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          creatorId: user3.id,
          title: user1.firstName,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("chats", null, {});
  },
};
