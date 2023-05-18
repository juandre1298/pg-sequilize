import { Router } from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
  getProjectTaskById,
  updateProject,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProjectById);

router.get("/projects/:id/tasks", getProjectTaskById);

export default router;
