import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import projectData from "./data/data.json" assert { type: "json" };

const app = express();
const PORT = "https://yoliday-frontend.vercel.app/";

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.get("/api/projects", (req, res) => {
  res.json(projectData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
