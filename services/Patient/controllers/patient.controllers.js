const axios = require("axios");

exports.addPatient = async (req, res) => {
  try {
    const {
      NHID,
      name,
      gender,
      height,
      weight,
      dob,
      mobile_number,
      aadhar_number,
      blood_group,
      address,
      emergency_contact_name,
      emergency_contact_number,
      dependant,
      dependee,
    } = req.body;
    axios
      .post("http://localhost:8000/patient/", {
        NHID,
        name,
        gender,
        height,
        weight,
        dob,
        mobile_number,
        aadhar_number,
        blood_group,
        address,
        emergency_contact_name,
        emergency_contact_number,
        dependant,
        dependee,
      })
      .then((response) => {
        res.status(200).json({
          status: "Success",
          message: "New Patient Added",
          data: response,
        });
      })
      .catch((error) => {
        res
          .status(404)
          .json({ status: "Failure", message: "Error in Saving data" });
      });
  } catch (error) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request Failed" });
  }
};

exports.getPatientDetails = (req, res) => {
  try {
    const NHID = req.params.NHID;
    axios
      .get(`http://localhost:8000/patient?NHID=${NHID}`)
      .then((response) => {
        res.status(200).json({ status: "Success", data: response });
      })
      .catch((error) => {
        res.status(424).json({ status: "Failed", message: "Request Failed" });
      });
  } catch (error) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request Failed" });
  }
};

exports.getPatientMedicalHistory = (req, res) => {
  try {
    const NHID = req.params.NHID;
    axios
      .get(`http://localhost:8000/opd?NHID=${NHID}`)
      .then((response) => {
        res.status(200).json({ status: "Success", data: response });
      })
      .catch((error) => {
        res.status(424).json({ status: "Failed", message: "Request Failed" });
      });
  } catch (error) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request Failed" });
  }
};

exports.getPatientMedicinePrescription = (req, res) => {
  try {
    const prescription_id = req.params.prescriptionID;
    axios
      .get(`http://localhost:8000/prescription/${prescription_id}`)
      .then((response) => {
        res.status(200).json({ status: "Success", data: response });
      })
      .catch((error) => {
        res.status(424).json({ status: "Failed", message: "Request Failed" });
      });
  } catch (error) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request Failed" });
  }
};

exports.getPatientLabReports = (req, res) => {
  try {
    const prescription_id = req.params.prescription_id;
    axios
      .get(`http://localhost:8000/report/${prescription_id}`)
      .then((response) => {
        res.status(200).json({ status: "Success", data: response });
      })
      .catch((error) => {
        res.status(424).json({ status: "Failed", message: "Request Failed" });
      });
  } catch (error) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request Failed" });
  }
};


