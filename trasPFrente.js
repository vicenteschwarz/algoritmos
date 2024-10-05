const prompt = require("prompt-sync")()

const frase = prompt("Digite uma frase: ")
const rev = frase.split("").reverse().join("")
console.log(rev)