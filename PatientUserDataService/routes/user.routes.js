const express = require("express");
const router = express.Router({
  mergeParams: true,
});

const Controller = require("../controllers/user.controller");

router.get("/data/:id", Controller.getUserData);

module.exports = router;
