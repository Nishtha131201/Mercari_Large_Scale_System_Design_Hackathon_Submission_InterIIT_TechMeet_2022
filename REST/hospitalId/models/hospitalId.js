const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const HospitalId = sequelize.define("HospitalId", {
  id: {
    type: String,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  secret: {
    type: String,
    allowNull: false,
  },
  name: {
    type: String,
  },
});

module.exports = HospitalId;
