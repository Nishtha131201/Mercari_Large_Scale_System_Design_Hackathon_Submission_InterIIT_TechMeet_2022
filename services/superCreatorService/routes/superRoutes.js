const express = require("express");
const router = express.Router({ mergeParams: true });

const superControllers = require("../controllers/superControllers");
router.post("/doctor", superControllers.addDoctor);
router.post("/hospital", superControllers.addHospital);

module.exports = router;
