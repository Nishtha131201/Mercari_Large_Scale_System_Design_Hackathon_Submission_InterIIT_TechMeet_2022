const Patient = require("../models/patient");
const PatientDependee = require("../models/patientDependee");
/**
 *
 * TODO:
 * getHistory = async (NHID) => {}
 * Will be used to get patient history
 */

const getUserData = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: {
        NHID: req.params.id,
      },
    });
    if (!patient.dependant) return res.json(patient);

    const dependee = await PatientDependee.findOne({
      where: {
        patientNHID: patient.NHID,
      },
    });

    return res.json({
      patient,
      dependee,
    });
    // const history = getHistory(req.params.id);
    // res.json({patient, history})
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};

module.exports = {
  getUserData,
};
