const express = require("express");
const router = express.Router();

const { saveContact } = require("../controllers/contactController");

// POST /api/contact
router.post("/contact", saveContact);

module.exports = router;