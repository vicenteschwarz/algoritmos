const prompt = require("prompt-sync")()
console.log("Bem vindo ao site do maratonasso.com.br, aqui você vai poder acessar e selcionar os planos disponíveis para assinatura e acompanhar os maiores lançamentos do cinema com a gente!")
console.log("Vamos aos planos:")
console.log ("1 - Plano básico: Acesso a filmes em 480p, 1 tela. - 29.00 R$ ")
console.log ("2 - Plano premium: Acesso a filmes em 1080p, 4 telas. - 49.00 R$")
console.log ("3 - Plano familiar: Acesso a filmes em 4K, em até 6 telas simultâneas - 69.00 R$")
const choose = parseInt (prompt("Qual plano desejas? "))
switch(choose)
{
case 1 :
    console.log("Voce escolheu o plano básico!")
        break;
        case 2:
            console.log("Voce escolheu o plano premium!")
                break;
                case 3:
                    console.log("Voce escolheu o plano familiar!")
                        break;
                        default:
                            console.log("Você não escolheu nenhum plano!")

}
