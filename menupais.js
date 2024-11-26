

let prompt = require("prompt-sync")();
const paises = [
    {nomepais:"Brasil", populacao:213993437},
    {nomepais:"Estados Unidos",populacao: 331002651},
    {nomepais:"China", populacao:1439323776},
    {nomepais:"India", populacao:1380004385},
    {nomepais:"Japao", populacao:126476461},
    {nomepais:"Alemanha", populacao:83783942},
    {nomepais:"Franca", populacao:65273511},
    {nomepais:"Reino Unido", populacao:67886011},
    {nomepais:"Italia", populacao:60244639},
    {nomepais:"Canadá", populacao:37742154}
];
let ask = ""
console.log("Seja bem vindo ao nosso menu!")
function menu(){
console.log("")
console.log("Tomale as opções:")
console.log("")
console.log("1 - Mostrar lista de países")
console.log("2 - Inserir país")
console.log("3 - Deletar país")
console.log("4- Encontrar país")
console.log("5- Sair")
console.log("")
ask=  (prompt("Oque desejas? "))
    switch(ask){
        case "1":
            mostrarDados()
        break;
        case "2":
            inserirPais()
        break;
        case "3":
            deletarPais()
        break;
        case "4":
            encontrarPais()
        break;
        case "5":
            console.log("Saiu!")
        break;
        default:
            console.log("Voce não escolheu uma opção disponível")
        break;
    }
}
while(ask !== "5"){
    menu()
}



//============================================================
function mostrarDados(){
    console.table(paises)
}

function inserirPais(){
    let ask2 = prompt("Qual país deseja inserir? ")
    let ask3 = prompt("Qual a população do país? ")
for (let i = 0; i < paises.length; i++) {
    if (ask2 === paises[i].nomepais) {
        console.log("Esse país já existe na tabela, tente novamente.");
        return inserirPais()
        }
    }
    paises.push({ nomepais: ask2, populacao: parseInt(ask3) });
    console.log(`País ${ask2} adicionado com sucesso!`);
}


function deletarPais(){
    console.table(paises)
    let ask5 = prompt("Qual país deseja excluir pelo índice? ") //excluir pelo nome depois
    paises.splice(ask5,1)
    console.log("País excluído com sucesso!")
}

function encontrarPais(nomePais){
    let indice = -1
    console.table(paises)
    nomePais = prompt("Qual país desejas encontrar a posição? ")
    for(let i = 0 ; i<10; i++){
        if(paises[i].nomepais == (nomePais)){
           indice = i

        }
    }
    console.log("O indice de",nomePais,"é" ,indice)

}
