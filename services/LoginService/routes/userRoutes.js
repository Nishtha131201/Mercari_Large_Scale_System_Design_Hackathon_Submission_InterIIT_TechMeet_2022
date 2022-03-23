const router = require("express").Router();
const {
  verifyPhoneNumber,
  verifyOtp,
} = require("../controller/userController");

router.route("/verify-phone").post(verifyPhoneNumber);
router.route("/verify-otp").post(verifyOtp);

module.exports = router;
