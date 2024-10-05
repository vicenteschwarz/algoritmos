let listinha =['casa', 'café', 'livro','senac','programador']
let soma= 0

for(i=0; i<=listinha.length-1; i++){
    
    let num =listinha[i].length
    soma+=num
    console.log(listinha[i], "/ o número de letras da palavra é",num)
}
console.log("A soma de todas as letras das palavras dão:",soma, "letras")
