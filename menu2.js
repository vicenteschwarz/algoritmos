const prompt = require("prompt-sync")()
console.log("Bem vindo ao nosso menu digital da nossa hamburgeuria!")
console.log("Nosso Menu:(todos os hamburgueres acompanham maionese separada)")
console.log("1 - Hamburguer simples(carne, queijo e salada) - 22.00 R$")
console.log("2 - Hamburguer de bacon(carne, queijo, bacon e salada) - 26.00 R$")
console.log("3 - Hamburguer acebolado(carne, queijo, cebola caramelizada e salada) - 24.00 R$")
console.log("4 - Hamburguer duplo(duas carnes, queijo e salada) - 30.00 R$")
console.log("5 - Porção de batata frita - 08.00 R$")
console.log("6 - Refrigerante 600mL - 06.00 R$")
const pedido = parseInt(prompt("Qual seria seu pedido? " ))
switch(pedido)
{
    case 1: 
        console.log("Você escolheu um hambúrguer simples!" )
        break;
        case 2: 
            console.log("Você escolheu um hambúrguer de bacon!" )
            break;
            case 3: 
                console.log("Você escolheu um hambúrguer acebolado!" )
                break;
                case 4: 
                    console.log("Você escolheu um hambúrguer duplo!" )
                    break;
                    case 5: 
                        console.log("Você escolheu uma batata frita!" )
                        break;
                        case 6: 
                            console.log("Você escolheu um refri 600mL!" )
                            break;
                            default: 
                                console.log("Voce nao selecionou nenhum item, ta duro dorme!")
}