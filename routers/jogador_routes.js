import express from "express";
import {
  getJogadores,
  createJogador,
  adicionarJogador,
  deleteJogador,
} from "../controllers/jogador_controller.js";

const router = express.Router();

router.get("/jogadores", getJogadores);
router.post("/jogadores", createJogador);
router.get("/adicionar", adicionarJogador);
//router.put('/professor/:matr', updateProfessor);
router.delete("/jogadores/", deleteJogador);

export default router;
