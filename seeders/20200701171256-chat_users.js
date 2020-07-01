"use strict";

const chat = require("../models/chat");

const User = require("../models").user;
const Chat = require("../models").chat;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({ where: { email: "marcin@test.com" } });
    const user2 = await User.findOne({ where: { email: "orion@test.com" } });
    const user3 = await User.findOne({ where: { email: "myra@test.com" } });

    const chat1 = await Chat.findOne({ where: { title: "Orion" } });
    const chat2 = await Chat.findOne({ where: { title: "Summer trip" } });
    const chat3 = await Chat.findOne({ where: { title: "Marcin" } });

    return queryInterface.bulkInsert(
      "chat_users",
      [
        {
          chatId: chat1.id,
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat1.id,
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          chatId: chat2.id,
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          userId: user3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat3.id,
          userId: user3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat3.id,
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("chat_users", null, {});
  },
};
