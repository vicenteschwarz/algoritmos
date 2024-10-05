const prompt =require("prompt-sync")()
const phrase =prompt("Digite uma frase")
const letter =phrase.replaceAll("a","?")
console.log(letter)