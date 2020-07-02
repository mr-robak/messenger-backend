require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  DB_HOST_URL: process.env.DB_HOST_URL || "http://localhost",

  SALT_ROUNDS: process.env.SALT_ROUNDS,
};
