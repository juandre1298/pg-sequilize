import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ where: { id: id } });

    if (!project)
      return res.status(404).json({ message: "Project doesn't existe" });

    res.json(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      description,
      priority,
    });
    res.json(newProject);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.send("updating");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json([{ message: err.message }]);
  }
};
// como filtrar la info, aqui va a devolver los tasks que sean del
export const getProjectTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({ where: { projectId: id } });

    if (!tasks)
      return res.status(404).json({ message: "Project doesn't existe" });

    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
