const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");
const secretKey = "hospitalApi";

// this is welcome router function
module.exports.home = async function (req, res) {
  return res.send("<h1>welcome to hospital api || </h1>");
};
// this is register function
module.exports.Register = async function (req, res) {
  try {
    let doctorPresent = await Doctor.find({ email: req.body.email });
    let doctorRegister = doctorPresent;
    if (doctorPresent.length == 0) {
      doctorPresent = new Doctor(req.body);
      doctorRegister = await doctorPresent.save();
    }
    return res.send({
      message: "Doctor Register!!",
      doctor: doctorRegister,
    });
  } catch (error) {
    return res.send("Error in registation !!");
  }
};

module.exports.Login = async function token(req, res) {
  try {
    const { email, password } = req.body;
    // Check the user's credentials
    const user = await Doctor.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    if (user) {
      // Generate a JWT token
      const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
        expiresIn: "2h", // Token expires in 2 hour (adjust as needed)
      });

      res.json({ token });
    } else {
      return res.send("Email or Password are not correct !!");
    }
  } catch (error) {
    return res.send("Error in Login !!");
  }
};
