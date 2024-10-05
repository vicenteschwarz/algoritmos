const prompt = require("prompt-sync")()
const ask = prompt("Digite uma frase ")
console.log("Opção - 1 - Saber o número de caracteres")
console.log("Opção - 2 - Substituir um caractere da frase por outro de sua escolha")
const option =parseInt(prompt("Qual opção desejas meu jovem?"))
switch(option){
    case 1:
        const leng =ask.length
        console.log(leng, "caracteres ")
        break;
    case 2:
        const l1= prompt("Selecione um caractere da frase para substituir ")
        const l2 =prompt("Selecione um novo caractere para adicionar no logar do que foi retirado ")
        const letter =ask.replaceAll(l1, l2)
        console.log(letter)
        break;
    default:
        console.log("Você não selecionou nenhuma opção disponível!")
}