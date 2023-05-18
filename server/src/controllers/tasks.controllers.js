import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;

    const newTask = await Task.create({
      name,
      done,
      projectId,
    });

    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id } });
    console.log(task);
    if (!task) return res.status(404).json({ message: "Task doesn't existe" });
    res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json([{ message: err.message }]);
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    //const { name, done } = req.body;

    const task = await Task.findOne({ where: { id } });
    /*     task.name = name;
    task.done = done;

    await task.save(); */
    // alternative method
    task.set(req.body);
    await task.save();
    return res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
