import projects from "../data/data.json" assert { type: "json" };
export const getProjects = (req, res) => {
  res.json(projects);
};
