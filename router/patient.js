const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const patient = require("../controller/patient");
router.post("/registers", auth.verifyToken, patient.register);
module.exports = router;
