const prompt = require("prompt-sync")()
//functions
function square() {
    const ask1 = parseInt(prompt("Qual a medida de um dos lados do quadrado? "))
    const calc = (ask1 * ask1)
    //console.log("A área do quadrado é calculada através da equação lado vezes lado, sendo o resultado calculado através das constantes informadas:", calc)
    return("A área do quadrado é calculada através da equação lado vezes lado, sendo o resultado calculado através das constantes informadas:", calc)
    
}

function rectangle() {
    const ask2 = parseInt(prompt("Qual a medida da base do retangulo? "))
    const ask3 = parseInt(prompt("Qual a medida do lado do retangulo? "))
    const calc1 = (ask2*ask3)
    //console.log("A área do retangulo é calculada através da equação b(base) vezes a(altura), sendo o resultado calculado através das constantes informadas:", calc1)
    return("A área do retangulo é calculada através da equação b(base) vezes a(altura), sendo o resultado calculado através das constantes informadas:", calc1)
}

function triangle() {
    const ask4 = parseInt(prompt("Qual a medida da base do triangulo "))
    const ask5 = parseInt(prompt("Qual a medida do lado do triangulo "))
    const calc2 = (ask4 * ask5)/2
    //console.log("A área do triangulo é calculada através da equação b(base) vezes a(altura) dividido pelo número 2, sendo o resultado calculado através das constantes informadas:", calc2)
    return("A área do triangulo é calculada através da equação b(base) vezes a(altura) dividido pelo número 2, sendo o resultado calculado através das constantes informadas:", calc2)
}

console.log(square())