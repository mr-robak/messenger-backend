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
    contacts.hasOne(models.user, { foreignKey: "contactId" });
    contacts.belongsTo(model.user, { foreignKey: "userId" });
    // associations can be defined here
  };
  return contacts;
};
