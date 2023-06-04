import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Time = db.define(
  "jogadores",
  {
    codigo_jogador: {
      // type:Sequelize.STRING(200),
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_jogador: {
      type: Sequelize.STRING(200),
    },
    habilidade_principal: {
      type: Sequelize.STRING(100),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
export default Time;
