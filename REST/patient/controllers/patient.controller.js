const Patient = require("../models/patient");
const getAllPatient = async (req, res) => {
  try {
    const patients = await Patient.findAll({});
    return res.json(patients);
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
const postNewPatient = async (req, res) => {
  try {
    const {
      nhid,
      name,
      gender,
      weight,
      height,
      dob,
      modile_number,
      aadhaar,
      blood_group,
      address,
      pincode,
      emergency_contact_name,
      emergency_contact_number,
      dependant,
      dependee,
    } = req.body;

    const errors = [];
    if (
      !nhid ||
      !name ||
      !gender ||
      !weight ||
      !height ||
      !dob ||
      !modile_number ||
      !aadhaar ||
      !blood_group ||
      !address ||
      !pincode ||
      !emergency_contact_name ||
      !emergency_contact_number ||
      !dependant ||
      !dependee
    ) {
      errors.push({ message: "Incomplete Information" });
    }

    const patient = await Patient.findAll({
      where: {
        nhid,
      },
    });
    const pat = await Patient.findAll({
      where: {
        aadhaar,
      },
    });
    if (patient.length > 0 || pat.length > 0) {
      errors.push({
        msg: "ID already exists",
      });
    }
    if (errors.length >= 1) {
      return res.json({
        Success: false,
        errors,
      });
    }
    const newPatient = await Patient.create({
      nhid,
      name,
      gender,
      weight,
      height,
      dob,
      modile_number,
      aadhaar,
      blood_group,
      address,
      pincode,
      emergency_contact_name,
      emergency_contact_number,
      dependant,
      dependee,
    });
    return res.json({
      success: true,
      newPatient,
    });
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
const getPatient = async (req, res) => {
  try {
    const { id } = req.body;
    const patient = await Patient.findOne({
      where: {
        id,
      },
    });
    return res.json(patient);
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
const editPatient = async (req, res) => {
  try {
    const {
      nhid,
      name,
      gender,
      weight,
      height,
      dob,
      modile_number,
      aadhaar,
      blood_group,
      address,
      pincode,
      emergency_contact_name,
      emergency_contact_number,
      dependant,
      dependee,
      id,
    } = req.body;
    const editedPatient = await Patient.update(
      {
        nhid,
        name,
        gender,
        weight,
        height,
        dob,
        modile_number,
        aadhaar,
        blood_group,
        address,
        pincode,
        emergency_contact_name,
        emergency_contact_number,
        dependant,
        dependee,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.json({
      Success: true,
      editedPatient,
    });
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
const deletePatient = async (req, res) => {
  try {
    await Patient.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
module.exports = {
  getAllPatient,
  postNewPatient,
  getPatient,
  editPatient,
  deletePatient,
};

exports.getPatientByNHID = (req, res) => {
  try {
    const NHID = req.params.NHID;
    const data = await Patient.findOne({
      where: {
        NHID,
      },
    });
    if (!data) {
      return res
        .status(424)
        .json({ status: "Failure", message: "Does Not Exist" });
    }
    return res
      .status(200)
      .json({ status: "Success", message: "Data Found", data: data });
  } catch (error) {
    return res.status(404).json({ status: "Failure", message: error.message });
  }
};
