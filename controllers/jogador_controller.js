import time from "../models/jogador_model.js";

//busca todos os professores registrados na tabela professor
// por meio do método findAll
export const getJogadores = async (req, res) => {
  try {
    const jogadores = await time.findAll();
    res.send(jogadores);
  } catch (e) {
    console.log("Erro ao acessar a tabela Time", e);
  }
};

// inseri registros na tabela professor por meio do
//método create
export const createJogador = async (req, res) => {
  try {
    await time.create(req.body);
    res.json({
      message: "Um novo registro de jogador foi inserido no Banco de dados",
    });
  } catch (e) {
    console.log("Erro ao Inserir um novo jogador", e);
  }
};

export const adicionarJogador = async (req, res) => {
  const query = req.query;
  try {
    await time.create(query);
    res.json({
      "Codigo Jogador": `${query.codigo_jogador}`,
      "Nome Jogador": `${query.nome_jogador}`,
      "Habilidade Principal": `${query.habilidade_principal}`,
    });
    console.log(query);
  } catch (e) {
    console.log("Erro ao Inserir um novo jogador", e);
    // console.log(query)
  }
};

export const deleteJogador = async (req, res) => {
  const codigo = req.body;
  console.log(codigo.codigo_jogador);
  try {
    await time.destroy({ where: { codigo_jogador: codigo.codigo_jogador } });
    // res.json({
    // where: {codigo_jogador: codigo}
    // })
  } catch (e) {
    console.log("Erro ao excluir registro Jogador", e);
    console.log("ta aqui" + codigo);
  }
};

// export const deleteJogador = async (req, res) => {
//   try {
//     await jogadores.destroy({
//       where: {
//         codigo_jogador: req
//       }
//     });
//     res.json({
//       "message": "O Jogador " + req + " Foi excluído do Banco de Dados"
//     });
//   } catch (e) {
//     console.log("Erro ao excluir registro Jogador", e);
//   }
// }
/*
//atualiza registros da tabela professor por meio
// da função update
export const updateProfessor = async (req, res) => {
  try {
    await professor.update(req.body, {
      where: {
        matr_professor: req.params.matr
      }
    });
    res.json({
      "message": "Professor " + req.params.matr + " foi atualizado"
    });
  } catch (e) {
    console.log("Erro ao atualizar a Cadastro Professor", e);
  }
}


*/
