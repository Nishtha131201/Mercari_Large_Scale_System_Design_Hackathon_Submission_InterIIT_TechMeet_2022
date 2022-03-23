const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Patient = sequelize.define("Patient", {
  id: {
    type: String,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  
});

module.exports = Patient;
