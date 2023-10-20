const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');
// this is welcome router function
module.exports.home = async function (req, res) {
    return res.send("<h1>welcome to hospital api || </h1>");
}
// this is register function
module.exports.Register = async function (req, res) {
    try {
        let doctorPresent = await Doctor.find({ email: req.body.email });
        let doctorRegister = doctorPresent;
        if (doctorPresent.length == 0) {
            doctorPresent = new Doctor(req.body);
            doctorRegister = await doctorPresent.save();
        }
        return res.send(200).json({
            message: "Doctor Register!!",
            doctor: doctorRegister
        })
    } catch (error) {
        return res.send("Error in registation !!");
    }
}

module.exports.Login = async function token(req, res) {
    try {
        const checkDoctor = await Doctor.findOne({ email: req.body.email });
        if (checkDoctor) {
            let token = jwt.sign(checkDoctor.toJSON(), 'hospitalApi', { expiresIn: 6000 * 6000 });
            return res.json(200, {
                message: "Login SuccessFully !!",
                token: token
            })
        } else {
            return res.send("Email or Password are not correct !!");
        }
    } catch (error) {
        return res.send("Error in Login !!");
    }
}