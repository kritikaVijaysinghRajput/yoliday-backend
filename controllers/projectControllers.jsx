const projects = require("../data/data.json");

exports.getProjects = (req, res) => {
  res.json(projects);
};
