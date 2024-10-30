import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Projects API!" });
});

router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  res.json({ message: `Fetching details for project with ID: ${projectId}` });
});

// Export the router
export default router;
