import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  second_name: {
    type: DataTypes.STRING,
  },
  born_date: {
    type: DataTypes.DATE,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
});
