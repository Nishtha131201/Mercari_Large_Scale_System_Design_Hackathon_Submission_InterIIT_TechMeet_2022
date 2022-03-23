const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  consumable: {
    type: Boolean,
    default: false,
  },
  hospital_id: {
    type: String,
  },
});

module.exports = mongoose.model("inventory", InventorySchema);
