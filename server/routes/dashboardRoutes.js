const express = require("express");
const router = express.Router();

const { getDashboardData } = require("../controllers/dashboardController");
const verifyToken = require("../middleware/authMiddleware");

// GET Dashboard Data (Protected)
router.get("/admin/dashboard", verifyToken, getDashboardData);

module.exports = router;