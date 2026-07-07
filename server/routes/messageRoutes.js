const express = require("express");
const router = express.Router();

const { getAllMessages } = require("../controllers/messageController");
const verifyToken = require("../middleware/authMiddleware");

// GET All Contact Messages (Protected)
router.get("/admin/messages", verifyToken, getAllMessages);

module.exports = router;