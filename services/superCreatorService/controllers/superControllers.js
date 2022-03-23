const Doctor = require("../models/doctorModel");
const Hospital = require("../models/hospitalModel");

exports.addDoctor = async (req, res) => {
  try {
    const { licno, name, secretphrase } = req.body;
    const newDoctor = Doctor.create({ licno, name, secretphrase });
    return res.status(200).json({ status: "Success", data: newDoctor._id });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};
exports.addHospital = async (req, res) => {
  try {
    const { licno, name, secretphrase } = req.body;
    const newHospital = Hospital.create({ licno, name, secretphrase });
    return res.status(200).json({ status: "Success", data: newHospital._id });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};
