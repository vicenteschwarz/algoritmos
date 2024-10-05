let quant=0
let quant2=0
for (let numero = 1; numero <= 100; numero++) {
    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;  // Se encontrar um divisor, sai do loop
        }
    }    if (ehPrimo) {
        console.log(numero + " é primo");
        quant2+=1
    }
    else   {
        console.log(numero + " não  é primo");
        quant+=1
    }
   
}
console.log("A quantidade de números não primos de 1 a 100 é ", quant)
console.log("A quantidade de números primos de 1 a 100 é ", quant2)