// primeiro "i" vai ser a inicialização do "for"
// segundo "i" vai ser o teste, ou seja, denominar quando a sequencia vai falhar/parar
// o terceiro "i" vai ser a soma do primero número somado a ele mesmo(1+1=2, 2+1=3, 3+1=4... até chegar em 10 que vai ser o limite, pois o código está delimitado até 10[i<=10])
console.log("Tabuadas")
const prompt = require("prompt-sync")()
const ask = parseInt(prompt("Digite um número o qual voce deseja a tabuda "))
for (let i =ask; i <=ask*10; i= i+ask) {
    console.log(i); // Exibe cada número de 1 a 10
    
}
