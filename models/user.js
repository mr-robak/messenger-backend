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
        allowNull: false,
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
    user.hasMany(models.message);

    user.hasMany(models.chat); //maybe FK should be here not chat

    user.belongsToMany(models.chat, {
      through: "chat_users",
      foreignKey: "userId",
    });

    user.hasMany(models.user, {
      through: "contacts",
      foreignKey: "userId",
    });

    user.belongsToMany(models.user, {
      through: "contacts",
      foreignKey: "contactId",
    });

    // associations can be defined here
  };
  return user;
};
