import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Task } from "./Task.js";

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});
// to create a relation of 1:n
Project.hasMany(Task, {
  foreingkey: "projectId",
  sourceKey: "id",
});
// relartionship between
Task.belongsTo(Project, {
  foreinkey: "projectId",
  targetId: "id",
});

// para hcer relacion de many to many se usa "belongsToMany"
