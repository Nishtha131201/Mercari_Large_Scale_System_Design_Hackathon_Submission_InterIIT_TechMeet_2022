const express = require("express");
const router = express.Router({ mergeparams: true });

const controllers = require("../controllers/patient.controllers");

router.post("/", controllers.addPatient);
router.get(":NHID", controllers.getPatientDetails);
router.get("/:NHID/medicalHistory", comtrollers.getPatientMedicalHistory);
router.get("/:NHID/medicinePrescription/:prescriptionID", getPatientMedicinePrescription);
router.get("/:NHID/labReports/:prescription_id", getPatientLabReports);


module.exports = router;
