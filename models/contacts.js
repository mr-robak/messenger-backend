"use strict";
module.exports = (sequelize, DataTypes) => {
  const contacts = sequelize.define(
    "contacts",
    {
      userId: DataTypes.INTEGER,
      contactId: DataTypes.INTEGER,
    },
    {}
  );
  contacts.associate = function (models) {
    contacts.belongsTo(models.user, { as: "owner", foreignKey: "contactId" });
    contacts.belongsTo(models.user, {
      as: "user_contacts",
      foreignKey: "userId",
    });
    // associations can be defined here
  };
  return contacts;
};
