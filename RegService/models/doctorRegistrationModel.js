const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DoctorRegistrationModel = sequelize.define(
  "DoctorRegistration",
  {
    name: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    specilization: {
      type: DataTypes.STRING,
    },
    degree: {
      type: DataTypes.STRING,
    },
    Experience: {
      type: DataTypes.INTEGER,
    },
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = DoctorRegistrationModel;
