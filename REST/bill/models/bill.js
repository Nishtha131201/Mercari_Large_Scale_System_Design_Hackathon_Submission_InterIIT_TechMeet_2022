const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  prescription_id: { type: Number, required: true },
  Amount: { type: Number, required: true },
});

module.exports = mongoose.model("Bill", billSchema);
