const Project = require("../models/Project");

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

// Add New Project
const addProject = async (req, res) => {
  try {
    const { title, description, imgUrl, githubLink, demoLink } = req.body;

    const newProject = new Project({
      title,
      description,
      imgUrl,
      githubLink,
      demoLink,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project Added Successfully",
      project: newProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add project",
    });
  }
};

module.exports = {
  getProjects,
  addProject,
};