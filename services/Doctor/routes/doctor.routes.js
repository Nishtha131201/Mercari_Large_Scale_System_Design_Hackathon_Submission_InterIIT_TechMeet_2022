const express = require("express");
const router = express.Router({ mergeparams: true });

const controllers = require( "../controllers/doctor.controllers" );

router.get('/addDoctorDetails', controllers.addDoctor);
router.get(':NHID', controllers.getDoctorDetails);

module.exports = router;
