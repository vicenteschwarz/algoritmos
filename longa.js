let lista =['peixe', 'elefante', 'gato',]
let maiorNumero=lista[0]

for(let i =0; i<lista.length; i++){
    if(lista[i].length>maiorNumero.length)
    maiorNumero =lista[i]
}
//for(let i=0; i<=3; i++){
//    let a= lista[i].length
//}  
console.log("A maior palavra é:", maiorNumero)