const PatientRegistration = require("../models/patientRegistrationModel");
const HospitalRegistration = require("../models/hospitalRegistrationModel");
const DoctorRegistration = require("../models/doctorRegistrationModel");

exports.patientRegistration = async (req, res) => {
  try {
    const newPatient = await PatientRegistration.create(req.body);
    return res.status(200).json({ status: "Success", data: newPatient.nhid });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};

exports.doctorRegistration = async (req, res) => {
  try {
    const newPatient = await DoctorRegistration.create(req.body);
    return res.status(200).json({ status: "Success", data: "rahul" });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};

exports.hospitalRegistration = async (req, res) => {
  try {
    const newPatient = await HospitalRegistration.create(req.body);
    return res.status(200).json({ status: "Success", data: "rahul" });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};
