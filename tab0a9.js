const prompt = require("prompt-sync")()

for (let i =1; i <=10; i= i+1) {
console.log(" ")
console.log("Vou mostrar a tabuada do", i)
    for (let j =1; j <=10; j= j+1) {
        console.log("Vou multiplicar ",j, "por", i, "=", i*j);
    }

}
