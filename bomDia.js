const prompt = require("prompt-sync")()
const ask1 = prompt("Qual o seu nome? ")
console.log("1 - De manhã (04:00 - 12:00)")
console.log("2 - De tarde (12:00 - 18:00)")
console.log("3 - De noite (18:00 - 00:00)")
console.log("4 - De madrugada (00:00 - 04:00)")
const ask2 = parseInt(prompt("Está em qual momento do dia? "))
f1()


//functions
function f1 (){
switch (ask2) {
    case 1:
        console.log("Bom dia", ask1+"!")
        break;
    case 2:
        console.log("Boa tarde", ask1+"!")
        break;
    case 3:
        console.log("Boa noite", ask1+"!")
        break;
    case 4:
        console.log("Boa madrugada", ask1+"! Já ta na hora de dormir em!")
        break;
    default:
        console.log("Voce nao selecionou nenhum horário, mas mesmo assim, tenha uma ótima semana", ask1+"!")
}
}