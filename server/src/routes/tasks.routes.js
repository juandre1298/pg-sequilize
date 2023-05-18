import { Router } from "express";
import {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);
router.get("/tasks/:id", getTaskById);

export default router;
