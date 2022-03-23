const express = require("express");
const router = express.Router({ mergeParams: true });

const patientHistoryControllers = require("../controllers/patientHistoryControllers");
router.get("/:nhid", patientHistoryControllers.getHistory);
module.exports = router;
