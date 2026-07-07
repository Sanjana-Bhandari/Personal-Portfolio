const express = require("express");
const router = express.Router();

const { getAllSubscribers } = require("../controllers/subscriberController");
const verifyToken = require("../middleware/authMiddleware");

// GET All Newsletter Subscribers (Protected)
router.get("/admin/subscribers", verifyToken, getAllSubscribers);

module.exports = router;