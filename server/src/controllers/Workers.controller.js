import { Worker } from "../models/Workers.js";

export const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.findAll();
    res.json(workers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getWorkerById = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  try {
    const worker = await Worker.findOne({ where: { id } });
    res.json(worker);

    if (!worker)
      return res.status(404).json({ message: "Task doesn't existe" });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createWorker = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newWorker = await Worker.create({
      name,
      age,
      email,
    });

    res.json(newWorker);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteWorker = async (req, res) => {
  try {
    const { id } = req.params;
    await Worker.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json([{ message: err.message }]);
  }
};
export const updateWorker = async (req, res) => {
  try {
    const { id } = req.params;
    //const { name, done } = req.body;

    const worker = await Worker.findOne({ where: { id } });
    /*     worker.name = name;
      worker.done = done;
  
      await worker.save(); */
    // alternative method
    worker.set(req.body);
    await worker.save();
    return res.json(worker);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/* 


updateWorker, */
