const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
} = require("../controllers/adminController");

// Register Admin
router.post("/admin/register", registerAdmin);

// Login Admin
router.post("/admin/login", loginAdmin);

module.exports = router;