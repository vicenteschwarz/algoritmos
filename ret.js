const prompt = require("prompt-sync")()
const cargo = prompt("você é administrador? ")
const up = cargo.toUpperCase()
if(up!="SIM") 
{
console.log("inválido!")
return
}
else console.log("válido!")