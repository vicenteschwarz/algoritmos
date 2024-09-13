//entrada: 
// 1] valor dos numeros, 
// 2] escolha dos valores para cada um dos jogadores (PAR OU IMPAR)

//processamento: 
// 1] receber um número aleatório, 
// 2] somar o número do usuário, 
// 3] avaliar se a soma dos números é par ou ímpar, 
// 4] comparar o resultado da soma com as escolhas dos usuários(PC E USER), 
// 5] verificar

//saída: 
// 1] mostrar o número do usuário e do computador
// 2] mostrar o resultado e se o usuário ganhou ou perdeu

const prompt = require("prompt-sync")()
const choose = prompt("você escolhe par ou impar? ")
const number = prompt("digite um número para jogar entre 1 a 10 ") 
//randomizador de numeros
const numberPc = Math.floor(Math.random() *(10 - 1 + 1)) +1
const caps = choose.toUpperCase()
const soma = parseInt(numberPc) + parseInt(number)
const div = (soma%2)
    if(div==0 && caps=="PAR") 
        console.log("Você ganhou! O seu número era " + number + " o número escolhido pela máquina foi " + numberPc)
    if(div==0 && caps=="IMPAR") 
        console.log("Você perdeu! O seu número era " + number + " o número escolhido pela máquina foi " + numberPc)
    if(div!==0 && caps=="PAR") 
        console.log("Você perdeu! O seu número era " + number + " o número escolhido pela máquina foi " + numberPc)
    if(div!==0 && caps=="IMPAR") 
        console.log("Você ganhou! O seu número era " + number + " o número escolhido pela máquina foi " + numberPc)
