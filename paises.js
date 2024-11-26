let prompt = require("prompt-sync")()
const paises = [
    ["Brasil", 213993437],
    ["Senegal", 17196000],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["India", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["Africa do sul", 60042000],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Italia", 60244639],
    ["Canadá", 37742154]
];
let add = prompt("Adicione um país: ")
let add2 = parseInt(prompt("Adicione o número da população do país: ", add))
paises.push([add, add2])
let maiorNumero = paises[0][1]
let pais = paises [0][0]


// Exibir a matriz no console
for (let j = 0; j < paises.length; j++) {
    for (let i = 0; i < paises.length; i++) {
        if (paises[i][1] > maiorNumero) {
            maiorNumero = paises[i][1] 
            pais = paises[i][0]
        }
    }
}
paises.sort((a,b) => a[1] - b[1])
console.log("O país com maior população é:",pais,"-", maiorNumero)
console.log("")
console.log("Os países ordenados de forma crescente em população são:")
console.table(paises)

let search = prompt("Selecione um país para verificar a população: ")
for(let k=0; k< paises.length; k++){
    if(paises[k][0].toLowerCase() === search.toLowerCase())
        console.log("A população de ",search, "é",paises[k][1])
}
