const Contact = require("../models/Contact");

// Save Contact Form
const saveContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Basic Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Create New Contact
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Save in MongoDB
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message,
    });
  }
};

module.exports = { saveContact };