import express from "express";
import projects from "../data/data.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.json(projects);
});

export default router;
