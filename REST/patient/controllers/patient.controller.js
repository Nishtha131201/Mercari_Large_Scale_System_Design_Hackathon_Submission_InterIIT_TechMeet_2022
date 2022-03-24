const Patient = require("../models/patient");
exports.getAllPatient = async (req, res) => {
  try {
    const patients = await Patient.findAll({});
    return res.json(patients);
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
exports.postNewPatient = async (req, res) => {
  try {
    const {
      NHID,
      name,
      gender,
      weight,
      height,
      dob,
      mobile_number,
      aadhar_number,
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
      !NHID ||
      !name ||
      !gender ||
      !weight ||
      !height ||
      !dob ||
      !mobile_number ||
      !aadhar_number ||
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
        NHID,
      },
    });
    const pat = await Patient.findAll({
      where: {
        aadhar_number,
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
      NHID,
      name,
      gender,
      weight,
      height,
      dob,
      mobile_number,
      aadhar_number,
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
    });
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};
exports.getPatient = async (req, res) => {
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
exports.editPatient = async (req, res) => {
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
exports.deletePatient = async (req, res) => {
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

exports.getPatientByNHID = async (req, res) => {
  try {
    const NHID = req.params.NHID;
    console.log(NHID);
    const data = await Patient.findOne({
      where: {
        NHID,
      },
    });
    if (!data) {
      return res
        .status(209)
        .json({ status: "Failure", message: "Does Not Exist" });
    }
    return res
      .status(200)
      .json({ status: "Success", message: "Data Found", data: data });
  } catch (error) {
    return res.status(404).json({ status: "Failure", message: error.message });
  }
};
