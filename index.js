const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const projectData = require("./data/data.json");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.get("/api/projects", (req, res) => {
  res.json(projectData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
