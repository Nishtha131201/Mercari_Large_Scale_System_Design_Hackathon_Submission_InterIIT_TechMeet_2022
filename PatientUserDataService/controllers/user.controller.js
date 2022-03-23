const Patient = require("../models/patient");

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
    res.json(patient);
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
