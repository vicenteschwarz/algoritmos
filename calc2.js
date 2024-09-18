let prompt = require("prompt-sync")()
    let num1 = parseInt(prompt("Digite um primeiro número "))
    let num2 = parseInt(prompt("Digite um segundo número "))
    let ask = prompt("Qual sinal desejas utilizar?(+,-,* ou /) ")
    let soma = num1 + num2
    let sub = num1 - num2
    let mult = num1 * num2
    let div = num1 / num2
function minhafunção(){
    num1 = parseInt(prompt("Digite um primeiro número "))
    num2 = parseInt(prompt("Digite um segundo número "))
    ask = prompt("Qual sinal desejas utilizar?(+,-,* ou /) ")
    soma = num1 + num2
    sub = num1 - num2
    mult = num1 * num2
    div = num1 / num2

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
        minhafunção();
        break;
}   }
minhafunção();
