let valorIncial = 1000
let rendi = 0.005
for (let num = 1; num <= 12; num++) {
    valorIncial += valorIncial * rendi
}
console.log ("O rendimento é",Math.round(valorIncial), "R$")