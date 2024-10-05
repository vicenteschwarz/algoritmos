
quant=0
str=0
for(let i = 1; i<=19; i++){
    let str=i.toString()
    if(str.includes("9"))
    quant++
}
console.log("A quantidade de noves é:", quant)