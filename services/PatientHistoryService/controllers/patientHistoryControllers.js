const PatientHistory = require("../models/patientHistroyModel");

exports.getHistory = async (req, res) => {
  try {
    const nhid = req.params.nhid;
    const patient = await PatientHistory.findOne({ nhid: nhid });
    if (!patient) {
      return res
        .status(201)
        .json({ status: "Not Found", message: "Patient Does Not Exist" });
    }
    return res.status(200).json({ status: "Success", data: patient });
  } catch (error) {
    return res.status(404).json({ status: "Failure", data: error });
  }
};
