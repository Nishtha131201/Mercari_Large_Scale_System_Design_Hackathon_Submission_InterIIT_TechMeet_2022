const express = require("express");
const router = express.Router({ mergeParams: true });

const diagnoseController = require("../controllers/diagnoseControllers");
router.get("/:visitId", diagnoseController.addPrescription);

module.exports = router;
