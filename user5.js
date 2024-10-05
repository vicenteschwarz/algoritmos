let prompt = require("prompt-sync")()
let soma=0
let quant=0

for(let i = 1; i<=5; i++){
    let ask= parseInt(prompt("Insira um número por favor: "))
    soma+=ask
    quant++
}

let div = soma/quant

console.log("A media é:", div)