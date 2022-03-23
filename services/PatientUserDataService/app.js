const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

require("dotenv").config();

const PORT = process.env.PORT || 4500;

const app = express();

const sequelize = require("./config/sequelize");

// Routes will come here
const userDataRoutes = require("./routes/user.routes");

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

app.use("/user", userDataRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:4500/`);
});