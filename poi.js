const prompt =require("prompt-sync")()
const number = prompt("Digite um número por favor ")
const div = (number%2)
if(div==0) console.log("Voce posssui um número par")
else console.log("Voce possui um número impar")

