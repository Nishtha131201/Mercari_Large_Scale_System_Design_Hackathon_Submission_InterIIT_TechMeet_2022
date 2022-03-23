const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  prescription_id: { type: Number, required: true },
  report: { type: Array, default: [] },
});

module.exports = mongoose.model("Inventory", inventorySchema);
