import { Sequelize } from "sequelize";

const db = new Sequelize("time", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
