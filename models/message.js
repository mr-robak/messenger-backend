"use strict";
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define(
    "message",
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content_type: {
        type: DataTypes.ENUM("text", "picture", "video"),
        allowNull: false,
      },
      sentAt: DataTypes.DATE,
    },
    {}
  );
  message.associate = function (models) {
    // associations can be defined here
  };
  return message;
};
