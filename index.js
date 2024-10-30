// server/index.js
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Use project routes
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
