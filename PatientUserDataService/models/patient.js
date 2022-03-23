const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Patient = sequelize.define(
  "Patient",
  {
    NHID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    blood_group: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    mobile_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    emergency_contact_name: {
      type: DataTypes.STRING,
    },
    emergency_contact: {
      type: DataTypes.STRING,
    },
    aadhar: {
      type: DataTypes.STRING,
    },
    dependant: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Patient.belongsToMany(Patient, { as: "dependee", through: "PatientDependee" });

module.exports = Patient;
