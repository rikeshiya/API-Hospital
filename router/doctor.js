const express = require('express');
const router = express.Router();
const doctor = require('../controller/index');
router.post('/register', doctor.Register);
router.get('/login', doctor.Login);
module.exports = router;