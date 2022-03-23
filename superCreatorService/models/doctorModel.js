const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DoctorModel = sequelize.define(
  "Doctor",
  {
    _id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    nhid: {
      type: DataTypes.STRING,
    },
    secretphrase: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = DoctorModel;
