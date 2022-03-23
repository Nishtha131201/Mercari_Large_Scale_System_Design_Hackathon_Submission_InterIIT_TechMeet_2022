const express = require("express");
const router = express.Router({ mergeParams: true });

const verifyController = require("../controllers/verifyControllers");

router.get("/doctor", verifyController.verifyDoctor);
router.get("/hospital", verifyController.verifyHospital);
module.exports = router;
