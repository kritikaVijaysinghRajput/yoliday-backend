// server/routes/projectRoutes.js
const express = require("express");
const router = express.Router();

// Define a GET route for projects
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Projects API!" });
});

// Define another route for demonstration (e.g., GET a specific project)
router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  res.json({ message: `Fetching details for project with ID: ${projectId}` });
});

module.exports = router;
