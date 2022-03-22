const express = require("express");
const router = express.Router({ mergeParams: true });

const registrationController = require("../controllers/registrationControllers");
router.post("/createpatient", registrationController.patientRegistration);
router.post("/createdoctor", registrationController.doctorRegistration);
router.post("/createhospital", registrationController.hospitalRegistration);

module.exports = router;
