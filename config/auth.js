const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");
const secret = "hospitalApi";
module.exports.verifyToken = function (req, res, next) {
  // Middleware for JWT verification
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  jwt.verify(token.replace("Bearer ", ""), secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Token invalid" });
    }

    req.user = decoded; // Store user information in the request object
    next();
  });
};
