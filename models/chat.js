"use strict";

const message = require("./message");

module.exports = (sequelize, DataTypes) => {
  const chat = sequelize.define(
    "chat",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  chat.associate = function (models) {
    chat.belongsTo(models.user, { foreignKey: "creatorId" });
    chat.hasMany(models.user, { through: "chat_users", foreignKey: "chatId" });
    chat.hasMany(models.message);
    // associations can be defined here
  };
  return chat;
};
