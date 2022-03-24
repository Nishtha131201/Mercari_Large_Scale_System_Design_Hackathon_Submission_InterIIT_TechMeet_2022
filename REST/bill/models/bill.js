const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  prescription_id: { type: Number, required: true },
  bill_id: { type: Number, required: true },
  patient_name: { type: String, required: true },
  patient_contact: { type: Number, required: true },
  bill_items: { type: Array, default: [] },
});

module.exports = mongoose.model("Bill", billSchema);
