let nota = [12, 3, 45, 7, 22]
let menorNumero=nota[0]
let maiorNumero=nota[0]

for(let i =0; i<nota.length; i++){
    if(nota[i]>maiorNumero)
        maiorNumero =nota[i]
    if(nota[i]<menorNumero)
        menorNumero =nota[i]
    console.log(nota[i])
}
console.log("O menor numero é:", menorNumero)
console.log("O maior numero é:", maiorNumero) 