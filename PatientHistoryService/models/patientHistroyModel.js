const mongoose = require("mongoose");

const patientHistorySchema = new mongoose.Schema({
  nhid: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now() },
  hospital: { type: String, required: true },
  docId: { type: String, required: true },
  diagnosis: { type: String, required: true },
  outcomes: { type: String, required: true },
  prescription: { type: String, required: true },
  dosage: { type: Array, default: [] },
});

module.exports = mongoose.model("Patient History", patientHistorySchema);
