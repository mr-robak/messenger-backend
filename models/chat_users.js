"use strict";
module.exports = (sequelize, DataTypes) => {
  const chat_users = sequelize.define(
    "chat_users",
    {
      chatId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  chat_users.associate = function (models) {
    chat_users.belongsTo(models.chat);
    chat_users.belongsTo(models.user);
    // associations can be defined here
  };
  return chat_users;
};
