const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DoctorId = sequelize.define("DoctorId", {
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

module.exports = DoctorId;
