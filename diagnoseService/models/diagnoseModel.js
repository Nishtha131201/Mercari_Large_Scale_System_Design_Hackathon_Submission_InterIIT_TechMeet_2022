const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DiagnoseModel = sequelize.define(
  "Diagnose",
  {
    _id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    visit_Id: {
      type: DataTypes.TEXT,
    },
    prescription: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = DiagnoseModel;
