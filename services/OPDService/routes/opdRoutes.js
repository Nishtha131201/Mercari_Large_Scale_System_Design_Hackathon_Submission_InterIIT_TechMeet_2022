const express = require("express");
const router = express.Router({ mergeParams: true });
const opdControllers = require("../controllers/opdControllers");

router.get("/", (req, res) => {
  try {
    res.status(200).send({ status: "Success", data: "tempdata" });
  } catch (error) {
    res.status(404).send({ status: "Failure", data: error });
  }
});
