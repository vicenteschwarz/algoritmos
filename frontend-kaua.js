const backend = require("./backend-kaua.js")
const prompt = require("prompt-sync")()

function menu() {
    // Verifica se o login foi bem-sucedido
    if (backend.validarUsuario()) {
        let optionMenu = "";
        while (optionMenu !== "7") {
            console.log("");
            console.log("Estoque de medicamentos ");
            console.log("");
            console.log("Selecione a opção desejada ");
            console.log("");
            console.log("1 - Mostrar estoque de medicamentos ");
            console.log("2 - Cadastrar medicamento ");
            console.log("3 - Deletar medicamento ");
            console.log("4 - Atualizar medicamento ");
            console.log("5 - Distribuir medicamento ");
            console.log("6 - Cadastrar usuário ");
            console.log("7 - Sair");
            console.log("");
            optionMenu = prompt("Selecione uma opção: ");
            console.log("");

            switch (optionMenu) {
                case "1":
                    backend.mostrarMed();
                    break;
                case "2":
                    let nomeMed = prompt("Nome do medicamento que deseja cadastrar: ");
                    let quantMed = prompt("Quais as informações de quantidade? ");
                    let saldoMed = prompt("Saldo do medicamento: ");
                    backend.cadastrarMed(nomeMed, quantMed, saldoMed);
                    break;
                case "3":
                    deletMed = prompt("Qual medicamento deseja deletar? ");
                    backend.deletarMed(deletMed);
                    break;
                case "4":
                    let atualNome = prompt("Qual medicamento deseja atualizar as informações? ")
                    backend.atualizarMed();
                    break;
                case "5":
                    backend.distribuirMed()
                    break;
                case "6":
                    backend.cadastrarUsuario()
                    break;
                case "7":
                    console.log("Saiu!");
                    break;
                default:
                    console.log("Você não escolheu uma opção válida");
                    break;
            }
        }
    } else {
        console.log("Login falhou. Tente novamente.");
    }
}

//login é checado antes do menu ser mostrado
menu();