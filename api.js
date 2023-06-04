function enviarJogador() {
  const codigoInput = document.getElementById("codigo");
  const nomeInput = document.getElementById("nome");
  const habilidadeInput = document.getElementById("habilidade");
  const novoJogador = {
    codigo_jogador: Number(codigoInput.value),
    nome_jogador: nomeInput.value,
    habilidade_principal: habilidadeInput.value,
  };
  console.log(novoJogador);
  // adicionarJogador(novoJogador)
  if (
    novoJogador.codigo_jogador &&
    novoJogador.nome_jogador &&
    novoJogador.habilidade_principal
  ) {
    fetch("http://localhost:3000/jogadores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoJogador),
    });
    codigoInput.value = "";
    nomeInput.value = "";
    habilidadeInput.value = "";
    
    const listaJogadores = document.getElementById("jogadoresList");
    const informacaoJogador = document.createElement('li');
    informacaoJogador.innerHTML = "<strong>Codigo Jogador</strong>: " + " " + novoJogador.codigo_jogador + " <strong>Nome Jogador</strong>: " + " " + novoJogador.nome_jogador + " <strong>Habilidade Principal</strong>: " + " " + novoJogador.habilidade_principal;
    listaJogadores.appendChild(informacaoJogador);
  }
}

function deletarJogador() {
  const codigoInput = document.getElementById("codigo");
  const novoJogador = {
    codigo_jogador: Number(codigoInput.value),
  };
  console.log(novoJogador);
  // adicionarJogador(novoJogador)
  fetch("http://localhost:3000/jogadores", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoJogador),
  });
  console.log(novoJogador);
  const listaJogadores = document.getElementById(`${novoJogador.codigo_jogador}`);
  listaJogadores.parentNode.removeChild(listaJogadores);

}
mostrouJogadores = false
function mostrarJogadores() {
  fetch('http://localhost:3000/jogadores')
  .then(response => response.json())
  .then(jogadores => {
    // console.log(jogadores.codigo_jogador + "\n" + jogadores.nome_jogador + "\n" + jogadores.habilidade_principal);
    if(mostrouJogadores == false){
      jogadores.forEach(jogador => {
          // Faça algo com cada jogador, por exemplo, exibir informações na tela
          console.log(`Código: ${jogador.codigo_jogador}, Nome: ${jogador.nome_jogador}, Habilidade: ${jogador.habilidade_principal}`);
          const listaJogadores = document.getElementById("jogadoresList");
          const informacaoJogador = document.createElement('li');
          
          informacaoJogador.innerHTML = "<strong>Codigo Jogador</strong>: " + " " + jogador.codigo_jogador + " <strong>Nome Jogador</strong>: " + " " + jogador.nome_jogador + " <strong>Habilidade Principal</strong>: " + " " + jogador.habilidade_principal;
          informacaoJogador.setAttribute("id",`jogador${jogador.codigo_jogador}`)

          listaJogadores.appendChild(informacaoJogador);
          mostrouJogadores = true
      });
    }else{console.log("ja foi mostrado a lista")}
  })
  .catch(error => {
    console.error('Erro ao obter a lista de jogadores:', error);
  });
};