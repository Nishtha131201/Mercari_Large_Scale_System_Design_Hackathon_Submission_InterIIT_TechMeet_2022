const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoSanitize = require("express-mongo-sanitize");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//const MONGO_URL = "mongodb://localhost/SA_DB";
// console.log("[Mongodb Url]", MONGO_URL);
const helmet = require("helmet");

const PORT = 8080 || process.env.PORT;

mongoose
  .connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Successful DB connection"))
  .catch((err) => console.error("DB connection fail"));

var corsOptions = {
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

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
// app.use(express.static(__dirname + "./uploads"));

app.use(methodOverride("_method"));
app.use(mongoSanitize());

// SESSION MIDDLEWARE
app.use(
  cookieSession({
    name: "bill-service-session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["session 1"],
    httpOnly: false,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(helmet({ contentSecurityPolicy: false }));

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
