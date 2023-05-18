import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import workersRoutes from "./routes/workers.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();
// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// middlewares
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);
app.use(workersRoutes);
app.use(usersRoutes);

export default app;
