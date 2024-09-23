const prompt = require("prompt-sync")()
const cpf = prompt("Digite seu CPF: ")
rep()
const cpfLimpo = rep()
console.log(cpfLimpo)


//functions
function rep() {
    const remove = cpf.replaceAll("-", "").replaceAll(".", "")
    return remove;
}
