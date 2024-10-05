let nota = [2, 5, 8, 11, 14, 17, 20]
let numImpar=nota[0]
let numPar=nota[0]
let quant=0

for(let i =0; i<nota.length; i++){
    if(nota[i]%2===0)
    quant++
}
console.log("A quantidade de numeros pares é:", quant)