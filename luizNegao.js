const prompt = require("prompt-sync")()
console.log("Bem vindo ao nosso portal do aluno EduGrade!")
//cadastro
const name = prompt("Digite seu nome: ")
const undername = prompt("Digite seu sobrenome: ")
const cargo = prompt("Você é professor? ")
const up = cargo.toUpperCase()
if (up != "SIM") {
    console.log("Cadastrado como aluno!")
    console.log("Olá", name, "seja bem vindo")
    console.log("Aqui estão algumas de nossas nossas funções:")
    func1()
    const função1 = parseInt(prompt("Qual seria o número de sua opção "))
    switch (função1) {
        case 1:
            const n4 = parseInt(prompt("Insira a sua primeira nota "))
            const n5 = parseInt(prompt("Insira a sua segunda nota "))
            const n6 = parseInt(prompt("Insira a sua terceira nota "))
            const n7 = parseInt(prompt("Insira a sua quarta nota "))
            const soma = (n4 + n5 + n6 + n7)/4
            console.log("Sua média de acordo com suas quatro notas é", soma)
            break;
        case 2:
            const n8 = prompt("Insira a disciplina que deseja acessar. ")
            const n9 = parseInt(prompt("Insira sua nota total obtida durante os 3 trimestres (total possível = 100 pontos // média= 70 pontos) "))
            if(n9>=70) console.log("Você foi aprovado!")
                else console.log("Você foi reprovado!")
            break;
        default:
            console.log("Voce não selecionou nenhuma função disponível!")
    }
}
else {
    console.log("Cadastrado como professor!")
    console.log("Olá", name, "seja bem vindo")
    console.log("Aqui estão algumas de nossas nossas funções:")
    func2()
    const função2 = parseInt(prompt("Qual seria o número de sua opção "))
    switch (função2) {
    case 1:
        const n10 = prompt("Insira o nome do aluno ")
        const n11 = prompt("Insira a disciplina que deseja acessar. ")
        const n12 = prompt("Insira a nota desejada ")
        console.log("Nota", n12, "cadatrada na disciplina", n11, "do aluno", n10)
        break;
    case 2:
        const n13 = parseInt(prompt("Insira a sua primeira nota "))
        const n14 = parseInt(prompt("Insira a sua segunda nota "))
        const n15 = parseInt(prompt("Insira a sua terceira nota "))
        const n16 = parseInt(prompt("Insira a sua quarta nota "))
        const soma = (n13 + n14 + n15 + n16)/4
        console.log("Sua média de acordo com suas quatro notas é", soma)
        break;
    case 3:
        const n17 = prompt("Insira a disciplina que deseja acessar. ")
        const n18 = parseInt(prompt("Insira sua nota total obtida durante os 3 trimestres (total possível = 100 pontos // média= 70 pontos) "))
        if(n18>=70) console.log("Você foi aprovado!")
            else console.log("Você foi reprovado!")
        break;
    default:
        console.log("Voce nao selecionou nenhuma função disponível!")
    }
}

//aqui inicia a parte de criação de funções
function func1 (){
    console.log("1 - Cálculo de médias")
    console.log("2 - Relátorio de disciplina")
    }

function func2 (){
    console.log("1 - Registro de Notas")
    console.log("2 - Cálculo de médias")
    console.log("3 - Relátorio de disciplina")
    }

function func3 (soma){
    }