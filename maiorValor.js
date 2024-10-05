let lista =[250, 400, 150, 300, 600, 200, 550]
let maiorNumero=lista[0]
let quant=0
let soma=0
for(let i =0; i<lista.length; i++){
    quant++
    soma+= lista[i]
    if(lista[i]>maiorNumero)
    maiorNumero =lista[i]
}
let media=soma/quant 
console.log("O maior valor vendido foi:", maiorNumero)
console.log("A media é:", media)

