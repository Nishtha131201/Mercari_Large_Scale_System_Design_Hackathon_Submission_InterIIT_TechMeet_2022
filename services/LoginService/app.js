const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
app.use(express.json());

app.use("/api/v1/login", userRouter);
app.get("/health", (req, res) => {
  res.send({
    message: "Success",
  });
});

module.exports = app;
