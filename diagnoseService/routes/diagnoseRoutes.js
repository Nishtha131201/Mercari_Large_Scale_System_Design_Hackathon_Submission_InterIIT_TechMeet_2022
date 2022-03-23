const express = require("express");
const router = express.Router({ mergeParams: true });

const diagnoseController = require("../controllers/diagnoseControllers");
router.post("/prescription/:visitId", diagnoseController.addPrescription);

module.exports = router;
