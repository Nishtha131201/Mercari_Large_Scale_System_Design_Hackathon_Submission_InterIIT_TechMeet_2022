const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Sequelize = require("sequelize");

require("dotenv").config();

const app = express();

const sequelize = require("./config/sequelize");

// Const Model

sequelize
  .sync({
    force: true,
  })
  .then((result) => {
    console.log("Sync Done");
  })
  .catch((err) => {
    console.log(err.message);
  });
