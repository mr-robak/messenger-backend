"use strict";
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
      "messages",
      [
        {
          chatId: chat1.id,
          senderId: user1.id,
          content: "Should I buy an ice cream?",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat1.id,
          senderId: user2.id,
          content: "YESSSSS!!!",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat1.id,
          senderId: user1.id,
          content: ":D lol",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          senderId: user1.id,
          content: "I am so excited to go on this trip!",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          senderId: user2.id,
          content: "ME TOO!!!",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          senderId: user3.id,
          content: "I cannot wait :D!",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          senderId: user3.id,
          content: "What time do you want to leave?",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat2.id,
          senderId: user1.id,
          content: "I think first thing in the morning...?",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          chatId: chat3.id,
          senderId: user3.id,
          content: "Can you call me, when you have a moment?",
          contentType: "text",
          sentAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};
