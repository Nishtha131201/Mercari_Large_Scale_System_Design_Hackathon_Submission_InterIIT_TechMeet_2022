const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const HospitalModel = sequelize.define(
  "Hospital",
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

module.exports = HospitalModel;
