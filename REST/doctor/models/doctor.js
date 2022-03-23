const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Doctor = sequelize.define("Doctor", {
  name:{
    type:String,
  },
  education:{
    type:String
  },
  specialization:{
    type:String
  },
  Timing:{
    type:String
  },
  experience:{
    type:String
  },
  current_status:{
    type:String
  },
  licno:{
    type:String
  }
  
});

module.exports = Doctor;
