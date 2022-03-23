const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const PatientDependee = sequelize.define(
  "PatientDependee",
  {},
  { freezeTableName: true }
);

module.exports = PatientDependee;
