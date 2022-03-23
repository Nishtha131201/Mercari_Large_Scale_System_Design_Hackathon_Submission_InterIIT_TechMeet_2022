// const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
const otpGenerator = require("otp-generator");

const { User } = require("../model/user");
const { Otp } = require("../model/otpModel");
const client = require("twilio")(
  // process.env.TWILIO_ACCOUNT_SID,
  // process.env.TWILIO_AUTH_TOKEN
  "ACa428e82527e05c7ea9d00efb378e537d",
  "516c5510f51714f82913bed337723043"
);

module.exports.verifyPhoneNumber = async (req, res) => {
  client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verifications.create({ to: `+91${req.body.number}`, channel: "sms" })
    .then((verification) => console.log(verification.status))
    .catch((e) => {
      console.log(e);
      res.status(500).send(e);
    });

  res.sendStatus(200);
};
module.exports.verifyOtp = async (req, res) => {
  const check = await client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verificationChecks.create({
      to: `+91${req.body.number}`,
      code: req.body.otp,
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send(e);
    });

  res.status(200).send(check);
};
