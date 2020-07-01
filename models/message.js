"use strict";

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define(
    "message",
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contentType: {
        type: DataTypes.ENUM("text", "picture", "video"),
        allowNull: false,
      },
      sentAt: DataTypes.DATE,
    },
    {}
  );
  message.associate = function (models) {
    message.belongsTo(models.user, {
      // as: "sender",
      foreignKey: "senderId",
    });

    message.belongsTo(models.chat);
    // associations can be defined here
  };
  return message;
};
