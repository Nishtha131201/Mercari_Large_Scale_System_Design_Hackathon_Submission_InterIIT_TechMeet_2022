const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

const sequelize = require("./config/sequelize");

const InventoryRoutes = require("./routes/inventory.routes");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Change this later to restrict it to react app only
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-auth-token, Origin, Accept"
  );
  next();
});

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/hms_test";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Contected");
  })
  .catch((err) => {
    console.log(err.message);
  });

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

// Routes

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server started on http://localhost:${process.env.PORT || 3000}/`
  );
});
