let prompt = require("prompt-sync")()
let listaSupermercado = ["maçã", "banana", "leite", "pão", "arroz"]
function minhaFunção() {
console.log("Aqui está o nosso menu:")
console.log("1 - Adicionar item")
console.log("2 - Listar itens")
console.log("3 - Sair")
//let ask =""
let ask = parseInt(prompt("Qual opção desejas? "))
    switch (ask) {
        case 1:
            listaSupermercado[listaSupermercado.length]=(prompt("Adicone o item "))
            console.log("Seu item foi adicionado!")
            minhaFunção()
            break;
        case 2:
            for (let i = 0; i <listaSupermercado.length; i++)
            console.log((i + 1), "-", listaSupermercado[i])
            let ask2 = parseInt(prompt("Qual o item que desejas? "))
            console.log("Voce Selecionou", listaSupermercado[ask2-1])
            break;
        case 3:
            console.log("Saiu!")
            break;
        default:
            console.log("Inválido!")
    }
}//while(ask!==3){

minhaFunção()//}
