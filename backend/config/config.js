require("dotenv").config();

const options = {
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || "3306",
  database: 
    `${process.env.MYSQL_DB_NAME || "loja_virtual"}`,
  username: process.env.MYSQL_USER || "Dayvid",
  password: process.env.MYSQL_PASSWORD || "password",
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};