let dados = [];

async function buscar() {
  resposta = await fetch("data.json");
  dados = await resposta.json();
  console.log(dados);
}
