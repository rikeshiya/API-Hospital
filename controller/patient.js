const Patient = require("../models/patient");
const jwt = require("jsonwebtoken");

module.exports.register = async function (req, res) {
  try {
    let checkpatient = await Patient.find({ phone: req.body.phone });
    if (checkpatient && checkpatient.length > 0) {
      return res.send({
        message: "Patient Already Registered!",
        data: checkpatient,
      });
    } else {
      let newData = new Patient(req.body);
      let addPatient = await newData.save();
      return res.send({
        message: "Patient Registered Successfully!",
        data: addPatient,
      });
    }
  } catch (error) {
    return res.send("error in register!!");
  }
};
