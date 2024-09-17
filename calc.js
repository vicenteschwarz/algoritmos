const prompt = require("prompt-sync")()
const num1 = parseInt(prompt("Digite um primeiro número "))
const num2 = parseInt(prompt("Digite um segundo número "))
const ask = prompt("Qual sinal desejas utilizar?(+,-,* ou /) ")
const soma = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2
switch (ask) {
    case "+":
        console.log("O resultado da adição é", soma)
        break;
    case "-":
        console.log("O resultado da subtração é", div)
        break;
    case "*":
        console.log("O resultado da multiplicação é", mult)
        break;
    case "/":
        if (num2 != 0) console.log("O resultado da divisão é", div)
        else console.log("A divisão não é possível pois o divisor deve ser diferente de 0!")
        break;
    default:
        console.log("Cálculo não permitido!")
}   
