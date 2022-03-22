const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Temp = sequelize.define(
  "temp",
  {
    address_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Temp;
