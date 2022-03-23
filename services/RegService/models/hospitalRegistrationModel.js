const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const HospitalRegistrationModel = sequelize.define(
  "HospitalRegistration",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    license_number: {
      type: DataTypes.STRING,
    },
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = HospitalRegistrationModel;
