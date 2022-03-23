const Diagnose = require("../models/diagnoseModel");
exports.addPrescription = async (req, res) => {
  try {
    const visit_Id = req.params.visitId;
    const prescription = req.body.prescription;
    const newPrescription = await Diagnose.create({ visit_Id, prescription });
    console.log("Patient auto-generated ID:", newPrescription._id);
    return res
      .status(200)
      .json({ status: "Success", data: newPrescription._id });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};
