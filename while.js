let prompt = require("prompt-sync")()
let escolha = ""
function exibirMenu() {
  console.log("Menu:");
  console.log("1. Adicionar item");
  console.log("2. Listar itens");
  console.log("3. Sair");
  escolha = prompt(" escolha uma opção ")	
}
while(escolha !== "3"){
exibirMenu()
}
