const sequelize = require("sequelize");
exports.verifyDoctor = async (req, res) => {
  const licno = req.body;
  const [results, metadata] = await sequelize.query(
    `SELECT * FROM DOCTOR WHERE NHID=${licno}`
  );
  if (!results) {
    return res
      .status(201)
      .json({ status: "Not Authorized", data: "You are not authorized" });
  }
  return res.status(200).json({ status: "Success", data: results });
  try {
  } catch (error) {
    return res.status(404).json({ status: "Failure", data: error.message });
  }
};

exports.verifyHospital = async (req, res) => {
  const licno = req.body;
  const [results, metadata] = await sequelize.query(
    `SELECT * FROM HOSPITAL WHERE LICNO=${licno}`
  );
  if (!results) {
    return res
      .status(201)
      .json({ status: "Not Authorized", data: "You are not authorized" });
  }
  return res.status(200).json({ status: "Success", data: results });
  try {
  } catch (error) {
    return res.status(404).json({ status: "Failure", data: error.message });
  }
};
