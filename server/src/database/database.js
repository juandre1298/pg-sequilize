import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "juan", "1298", {
  host: "localhost",
  dialect: "postgres",
});
