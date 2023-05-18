import { Router } from "express";
import {
  getWorkers,
  createWorker,
  getWorkerById,
  deleteWorker,
  updateWorker,
} from "../controllers/Workers.controller.js";

const router = Router();

router.get("/Workers", getWorkers);
router.post("/Workers", createWorker);
router.delete("/Workers/:id", deleteWorker);
router.put("/Workers/:id", updateWorker);
router.get("/Workers/:id", getWorkerById);

export default router;
