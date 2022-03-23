const { Sequelize } = require("sequelize");

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  port: 11000,
});

module.exports = sequelize;
