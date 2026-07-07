const Contact = require("../models/Contact");
const Newsletter = require("../models/Newsletter");

const getDashboardData = async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const totalSubscribers = await Newsletter.countDocuments();

    res.status(200).json({
      success: true,
      dashboard: {
        totalContacts,
        totalSubscribers,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
};