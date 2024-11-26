let prompt = require("prompt-sync")()
//TITULO:Loja de roupa
//Peças: Blusa,calça,sapato.
//adicionar peças de roupas no menu: meia,bone
//deletar peças de roupa do menu: bone
//contar quantos peças tem no menu
//pesquisar as peças em que posições ela está
//exibir todas as peças na tela

let array = ["blusa", "calca", "sapato"]
let option = ""
function meuEstoque() {
    console.log("----------------------------------------------------")
    console.log("Esse é o nosso menu")
    console.log("")
    console.log("Opções:")
    console.log("----------------------------------------------------")
    console.log(" 1 - Add Item")
    console.log(" 2 - Deletar Item")
    console.log(" 3 - Contagem de itens")
    console.log(" 4 - Posição de um item")
    console.log(" 5 - Listagem")
    console.log(" 6 - Sair")
    console.log("----------------------------------------------------")
    option = parseInt(prompt("Qual opção desejas: "))
    console.log("----------------------------------------------------")
    switch (option) {
        case 1:
            for (let j=0; j=array.length; j++){
                option2 = prompt("Escolha o item que deseja adicionar, caso deseje voltar ao menu, digite 0: ")
                if (option2.includes("0")){ 
                    console.log("Você retornou ao menu! ") 
                    return meuEstoque()}
                console.log("Item " + option2 + " adicionado com sucesso! ")
                array.push(option2)
                console.log(array)}
            break;
        case 2:
            let remove = prompt("Digite um item para remover ")
            let posicao2 = array.indexOf(remove);
            if (posicao2 !== -1) {
                array.splice(posicao2, 1)
                console.log(array, "Item", remove, "removido com sucesso!")
            }
            else console.log("Item nao encontrado!")
            break;
        case 3:
            console.log("Quantidade de itens no menu", array.length)
            break;
        case 4:
            let ask = prompt("Qual item desejas saber a posição? ")
            let posicao = array.indexOf(ask);
            if (posicao !== -1) {
                console.log("A posição do item " + ask + " é " + (posicao + 1))
            }
            else console.log("Voce escolheu um item inválido!")
            break;
        case 5:
            console.log("Listagem:")
            //for (let i = 0; i < array.length; i++) {
                //console.log(i + 1, "-", array[i])
                if (array.length === 0) { 
                    console.log("A lista não possui itens."); 
                } else { 
                    for (let i = 0; i < array.length; i++) { 
                        console.log(i + 1, "-", array[i]); } 
                    }
            break;
        case 6:
            console.log("Saiu!")
            break;
        default:
            console.log("Você escolheu uma opção invalida! ")
            break;

    }
} while (option !== 6) {
    meuEstoque()
}