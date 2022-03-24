const express = require("express");
const router = express.Router({ mergeparams: true });

const controllers = require("../controllers/patient.controllers");

router.get("/addPatientDetails", controllers.addPatient);
router.get("/:NHID", controllers.getPatientDetails);

module.exports = router;
