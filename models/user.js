"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isLoggedin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      avatar: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      preferences: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.message, { foreignKey: "senderId" });

    user.hasMany(models.chat, { as: "creator", foreignKey: "creatorId" }); //maybe FK should be here not chat

    user.belongsToMany(models.chat, {
      as: "participants",
      through: "chat_users",
      foreignKey: "userId",
    });

    user.belongsToMany(models.user, {
      as: "user_contacts",
      through: "contacts",
      foreignKey: "userId",
    });

    user.belongsToMany(models.user, {
      as: "owner",
      through: "contacts",
      foreignKey: "contactId",
    });

    // associations can be defined here
  };
  return user;
};
