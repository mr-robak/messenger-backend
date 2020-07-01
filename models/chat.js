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
    // associations can be defined here
  };
  return chat;
};
