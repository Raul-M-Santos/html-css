let dados = [];

async function buscar() {
  a = await fetch("data.json");
  dados = await a.json()
  console.log(dados);
}
