const express = require("express");
const router = express.Router();

const {
  getProjects,
  addProject,
} = require("../controllers/projectController");

// GET All Projects
router.get("/projects", getProjects);

// POST New Project
router.post("/projects", addProject);

module.exports = router;