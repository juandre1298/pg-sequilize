import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Task } from "./Task.js";

export const Worker = sequelize.define("worker", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    default: false,
  },
  email: {
    type: DataTypes.STRING,
    default: false,
  },
});

// many-to-many => belongsToMany
Worker.belongsToMany(Task, { through: "Workers_Tasks" });
Task.belongsToMany(Worker, { through: "Workers_Tasks" });
