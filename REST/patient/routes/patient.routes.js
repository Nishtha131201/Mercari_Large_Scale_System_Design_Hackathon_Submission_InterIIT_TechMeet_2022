const express = require("express");
const router = express.Router({
  mergeParams: true,
});
const Controller = require("../controllers/patient.controller");
router.get("/", Controller.getAllPatient);
router.post("/", Controller.postNewPatient);
// router.get("/:id", Controller.getPatient);
router.get("/:NHID", Controller.getPatientByNHID);
router.put("/:id/edit", Controller.editPatient);
router.post("/:id/delete", Controller.deletePatient);

module.exports = router;
