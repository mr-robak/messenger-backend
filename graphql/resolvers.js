// const { ApolloError } = require("apollo-server-express");
// const User = require("../models").user;

module.exports = {
  Query: {
    user: async (_, { id }, { db }, ____) => {
      //   console.log(111, "resolver user  id:", id);
      const user = await db.user.findOne({
        where: { id },
        include: [
          {
            model: db.user,
            as: "user_contacts",
          },
        ],
      });
      //   console.log(222, user.dataValues);
      return user;
    },

    // users: async (_, __, { db }, ____) => {
    //   //   console.log("resolver users");
    //   const users = await db.user.findAll();
    //   //   console.log(222, "resolver users ", users);
    //   return users;
    // },

    getCompleteChat: async (_, { id }, { db }, ____) => {
      //   console.log("resolver users");
      const chat = await db.chat.findOne({
        where: { id: id },
        include: [
          { model: db.message, where: { chatId: id } },
          { model: db.user, as: "participants" },
        ],
        // include: [],
      });

      //   console.log(222, "resolver users ", users);
      return chat;
    },
  },
  Mutation: {
    createChat: async (_, { creatorId, title, chatters }, { db }, ____) => {
      const user = await db.user.findByPk(creatorId);
      const chat = await db.chat.create({
        creatorId: user.dataValues.id,
        title,
      });
      const chatUsers = await db.chat_users.create({
        chatId: chat.dataValues.id,
        userId: user.dataValues.id,
      });
      //checks if user exists somewhere
      await chatters.forEach((user) => {
        db.chat_users.create({
          chatId: chat.dataValues.id,
          userId: user,
        });
      });
      //   console.log(user);
      //   console.log(chat);

      //   const chatFinal = await db.chat.findOne({
      //     where: { id: chat.dataValues.id },
      //     include: [
      //       {
      //         model: db.user,
      //         as: "participants",
      //       },
      //     ],
      //   });

      //   console.log("chatFinal", chatFinal.dataValues.participants);
      return chat;
    },
  },
};
