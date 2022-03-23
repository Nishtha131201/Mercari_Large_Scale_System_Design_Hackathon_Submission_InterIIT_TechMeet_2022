const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/inventory.controller");

router.get("/", Controller.getAllInventory);
router.post("/", Controller.postNewInventory);
router.get("/:id", Controller.getInventory);
router.post("/:id/edit", Controller.editInventory);
router.post("/:id/delete", Controller.deleteInventory);

module.exports = router;
