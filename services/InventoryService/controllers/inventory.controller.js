const Inventory = require("../models/inventory");
const Hospital = require("../models/hospital");

const getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find({
      hospital_id: req.params.hospital_id,
    });
    return res.json(inventory);
  } catch (err) {
    console.log(err.message);
    return res.json(err);
  }
};
const postNewInventory = async (req, res) => {
  try {
    const { name, quantity, consumable } = req.body;
    const { hospital_id } = req.params;
    const errors = [];
    if (!name || !quantity || !consumable)
      errors.push({
        msg: "Incomplete information",
      });

    const hospital = await Hospital.findAll({
      where: {
        id: hospital_id,
      },
    });

    if (hospital.length < 1)
      errors.push({
        msg: "Invalid Hospital Id",
      });

    if (errors.length >= 1)
      return res.json({ message: "Unable to create inventory", errors });

    const inventory = await new Inventory({
      name,
      quantity,
      consumable,
      hospital_id,
    });

    inventory.save();
    console.log(inventory);
  } catch (err) {
    console.log(err.message);
    return res.json(err);
  }
};

const getInventory = async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
    return res.json(err);
  }
};
const editInventory = async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
    return res.json(err);
  }
};
const deleteInventory = async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
    return res.json(err);
  }
};

module.exports = {
  getAllInventory,
  postNewInventory,
  getInventory,
  editInventory,
  deleteInventory,
};
