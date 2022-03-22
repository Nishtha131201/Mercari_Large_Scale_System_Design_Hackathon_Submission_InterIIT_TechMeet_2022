const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const DiagnoseModel = sequelize.define(
  "Diagnose",
  {
    visit_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    prescription:{
      type: DataTypes.TEXT,
    },
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = DiagnoseModel;
