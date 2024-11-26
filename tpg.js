let notas = [
    [8.5, 7.0, 9.0], // Notas do Aluno 1
    [6.5, 5.0, 10.0], // Notas do Aluno 2
    [7.5, 6.5, 9.0] // Notas do Aluno 3
];

for (let i = 0; i < notas.length; i++) {
    let soma = 0;  // Reiniciar soma para cada aluno
    let quant = notas[i].length;  // Total de notas do aluno
    
    for (let j = 0; j < quant; j++) {
        soma += parseFloat(notas[i][j]);  // Somar as notas
    }
    
    let media = soma / quant;  // Calcular média
    console.log(`Soma das notas do Aluno ${i + 1}: ${soma}`);
    console.log(`Média das notas do Aluno ${i + 1}: ${media}`);}