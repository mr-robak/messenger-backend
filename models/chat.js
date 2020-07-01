"use strict";

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
    // chat.belongsTo(models.user);
    chat.belongsTo(models.user, {
      as: "creator",
      foreignKey: "creatorId",
    });

    chat.belongsToMany(models.user, {
      as: "participants",
      through: "chat_users",
      foreignKey: "chatId",
    });

    chat.hasMany(models.message);
    // associations can be defined here
  };
  return chat;
};
