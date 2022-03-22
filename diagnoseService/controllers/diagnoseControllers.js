exports.addPrescription = async (req, res) => {
  try {
    return res.status(200).json({ status: "Success", data: "rahul" });
  } catch (error) {
    res.status(404).json({ status: "Failure", data: error.message });
  }
};
