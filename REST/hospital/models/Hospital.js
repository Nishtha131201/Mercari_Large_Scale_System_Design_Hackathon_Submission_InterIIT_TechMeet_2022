const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Hospital = sequelize.define("Hospital", {
  name: {
    type: String,
  },
  address:{
    type:String
  },
  contact:{
    type:String
  },
  licno:{
    type:String,
    unique: true,
  }
});

module.exports = Hospital;
