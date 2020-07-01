require("dotenv").config();
module.exports = {
  development: {
    username: process.env.POSTGRES_USER
    password: process.env.POSTGRES_PASSWORD,
    database: "messenger-app-DB",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
