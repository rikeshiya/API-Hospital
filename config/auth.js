const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');
const secret = "hospitalApi";
module.exports.checkAuthentication = function(req , res , next){
    const data = req.headers.authorization;
    const token= data.split(' ')[1];
    const decord = jwt.verify(token ,secret );
    if(decord.length <=0){
        return res.send("Jwt token expire");
    }
    next();
}
