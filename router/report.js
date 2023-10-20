const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const createReport = require("../controller/report");
router.post("/:id/create_report", auth.verifyToken, createReport.createReport);
router.get("/:id/all_report", auth.verifyToken, createReport.allReport);
router.get("/:status", auth.verifyToken, createReport.status);
module.exports = router;
