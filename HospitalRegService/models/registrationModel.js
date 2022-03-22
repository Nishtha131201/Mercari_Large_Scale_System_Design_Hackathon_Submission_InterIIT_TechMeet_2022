const mongoose = require("mongoose");

const RegistraionSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("HospitalRegistration", RegistraionSchema);
