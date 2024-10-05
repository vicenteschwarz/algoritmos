let prompt = require("prompt-sync")();

function exibirCardapio(linguagem) {
    console.log("------------------------");
    if (linguagem === 1) { // Português
        console.log("Menu do Chico Bengala");
        console.log("------------------------");
        console.log(" ");
        console.log("-Comidas-");
        console.log("1 - Batatinha Crocante com Bacon de Javali do Chico 500g - R$ 100,00");
        console.log("2 - Prato do dia (Seleção do Chico) - 1000g - R$ 175,70");
        console.log(" ");
        console.log("-Bebidas-");
        console.log("1 - Coquinha 500ml - R$ 5,50");
        console.log("2 - Sprite Geladinha 500ml - R$ 5,50");
        console.log(" ");
        console.log("-Doces-");
        console.log("1 - Bengala do Chico Doce - R$ 75,90");
        console.log("2 - Batatinha Doce do Chico 500g - R$ 95,00");
        console.log(" ");
    } else { // Inglês
        console.log("Chico Bengala's Menu");
        console.log("------------------------");
        console.log(" ");
        console.log("-Meals-");
        console.log("1 - Chico's Crispy Sweet Potatoes with Wild Boar Bacon 500g - R$ 100,00");
        console.log("2 - Daily Special (Chico's Selection) - 1000g - R$ 175,70");
        console.log(" ");
        console.log("-Drinks-");
        console.log("1 - Coke 500ml - R$ 5,50");
        console.log("2 - Cold Sprite 500ml - R$ 5,50");
        console.log(" ");
        console.log("-Desserts-");
        console.log("1 - Chico's Sweet Cane - R$ 75,90");
        console.log("2 - Chico's Sweet Potatoes 500g - R$ 95,00");
        console.log(" ");
    }
}

// Função para escolher itens com switch case
function escolherItem(tipo, linguagem) {
    let escolha;
    switch (tipo) {
        case 'comida':
            escolha = Number(prompt(linguagem === 1 ? "Escolha uma comida (1 ou 2): " : "Choose a meal (1 or 2): "));
            switch (escolha) {
                case 1:
                    return { nome: 'Batatinha Crocante com Bacon de Javali do Chico 500g', preco: 100.00 };
                case 2:
                    return { nome: 'Prato do dia (Seleção do Chico) - 1000g', preco: 175.70 };
                default:
                    console.log(linguagem === 1 ? "Escolha inválida!" : "Invalid choice!");
                    return escolherItem(tipo, linguagem);
            }
        case 'bebida':
            escolha = Number(prompt(linguagem === 1 ? "Escolha uma bebida (1 ou 2): " : "Choose a drink (1 or 2): "));
            switch (escolha) {
                case 1:
                    return { nome: 'Coquinha 500ml', preco: 5.50 };
                case 2:
                    return { nome: 'Sprite Geladinha 500ml', preco: 5.50 };
                default:
                    console.log(linguagem === 1 ? "Escolha inválida!" : "Invalid choice!");
                    return escolherItem(tipo, linguagem);
            }
        case 'doce':
            escolha = Number(prompt(linguagem === 1 ? "Escolha um doce (1 ou 2): " : "Choose a dessert (1 or 2): "));
            switch (escolha) {
                case 1:
                    return { nome: 'Bengala do Chico Doce', preco: 75.90 };
                case 2:
                    return { nome: 'Batatinha Doce do Chico 500g', preco: 95.00 };
                default:
                    console.log(linguagem === 1 ? "Escolha inválida!" : "Invalid choice!");
                    return escolherItem(tipo, linguagem);
            }
    }
}

// Função para realizar o pagamento
function realizarPagamento(total, nome, linguagem) {
    let metodoPagamento;
    if (linguagem === 1) {
        console.log(`Total a pagar: R$ ${total}`);
        metodoPagamento = prompt(`${nome}, qual o método de pagamento?\n1 - Dinheiro\n2 - Pix\n3 - Ticket\n4 - Cartão de Crédito\nEscolha uma opção: `);
    } else {
    console.log(`Total to pay: R$ ${total}`);
        metodoPagamento = prompt(`${nome}, what is your payment method?\n1 - Cash\n2 - Pix\n3 - Ticket\n4 - Credit Card\nChoose an option: `);
    }

    if (metodoPagamento === "4") {
        let numCartoes = Number(prompt(linguagem === 1 ? "Quantos cartões serão usados? " : "How many cards will be used? "));
        if (numCartoes > 1) {
            let dividirIgual = prompt(linguagem === 1 ? "Será dividido igualmente? (Sim/Não) " : "Will it be split equally? (Yes/No) ").toUpperCase();
            if (dividirIgual === "SIM" || dividirIgual === "YES") {
                let valorPorCartao = total / numCartoes;
                console.log(linguagem === 1 ? `Cada cartão será cobrado R$ ${valorPorCartao}` : `Each card will be charged R$ ${valorPorCartao}`);
            } else {
                let restante = total;
                for (let i = 1; i <= numCartoes; i++) {
                    let valorCartao = Number(prompt(linguagem === 1 ? `Digite o valor do cartão ${i}: ` : `Enter the amount for card ${i}: `));
                    restante -= valorCartao;
                    console.log(linguagem === 1 ? `Restante: R$ ${restante}` : `Remaining: R$ ${restante}`);
                }
            }
        }
    }

    console.log(linguagem === 1 ? "Obrigado pela compra! Esperamos que tenha gostado de toda sua experiência, volte sempre!" : "Thank you for your purchase! We hope you enjoyed your experience, come back soon!");
}

let perguntaLinguagem = "";
let selecaoLinguagem = false;
let nome = "";

// Exibir a pergunta de linguagem e garantir que a escolha seja válida
while (!selecaoLinguagem) {
    perguntaLinguagem = Number(prompt("Se desejar fazer o seu pedido em português, digite 1. If you wish to place your order in English, enter 2: "));

    if (perguntaLinguagem === 1) {
        nome = prompt("Insira o nome do cliente: ");
        selecaoLinguagem = true;
    } else if (perguntaLinguagem === 2) {
        nome = prompt("Enter the customer's name: ");
        selecaoLinguagem = true;
    } else {
        console.log("Por favor! Responta apenas entre as opções '1' ou '2'!");
    }
}

let pedidoFinalizado = false;

while (!pedidoFinalizado) {
    exibirCardapio(perguntaLinguagem);  // Passando a linguagem correta
    let total = 0;

    let perguntaPedido = prompt(perguntaLinguagem === 1 ? `"Já sabe o que quer pedir? (Responda entre 'Sim' ou 'Não'): "` : `"Do you already know what you want to order? (Answer between 'Yes' or 'No'): "`).toUpperCase();

    if (perguntaPedido === "SIM" || perguntaPedido === "YES") {
        let perguntaTodos = prompt(perguntaLinguagem === 1 ? `"Você quer escolher uma comida, bebida e doce? (Sim/Não): "` : `"Do you want to choose a meal, drink, and dessert? (Yes/No): "`).toUpperCase();

        if (perguntaTodos === "SIM" || perguntaTodos === "YES") {
            // Escolha de comida, bebida e doce com switch case
            total += escolherItem('comida', perguntaLinguagem).preco;
            total += escolherItem('bebida', perguntaLinguagem).preco;
            total += escolherItem('doce', perguntaLinguagem).preco;

        } else {
            let perguntaComida = prompt(perguntaLinguagem === 1 ? `"Você quer escolher apenas comida? (Sim/Não): "` : `"Do you want to choose only a meal? (Yes/No): "`).toUpperCase();
            if (perguntaComida === "SIM" || perguntaComida === "YES") {
                total += escolherItem('comida', perguntaLinguagem).preco;
            }

            let perguntaBebida = prompt(perguntaLinguagem === 1 ? `"Você quer escolher apenas bebida? (Sim/Não): "` : `"Do you want to choose only a drink? (Yes/No): "`).toUpperCase();
            if (perguntaBebida === "SIM" || perguntaBebida === "YES") {
                total += escolherItem('bebida', perguntaLinguagem).preco;
            }

            let perguntaDoce = prompt(perguntaLinguagem === 1 ? `"Você quer escolher apenas doce? (Sim/Não): "` : `"Do you want to choose only a dessert? (Yes/No): "`).toUpperCase();
            if (perguntaDoce === "SIM" || perguntaDoce === "YES") {
                total += escolherItem('doce', perguntaLinguagem).preco;
            }
        }

        console.log(perguntaLinguagem === 1 ? `Você escolheu um total de R$ ${total}` : `You have chosen a total of R$ ${total}`);
        realizarPagamento(total, nome, perguntaLinguagem);

        let desejaContinuar = prompt(perguntaLinguagem === 1 ? `"Deseja pedir mais alguma coisa? (Sim/Não): "` : `"Would you like to order anything else? (Yes/No): "`).toUpperCase();
        if (desejaContinuar === "NÃO" || desejaContinuar === "NO") {
            pedidoFinalizado = true;
            return
        }

    } else if (perguntaPedido === "NÃO" || perguntaPedido === "NO") {
        console.log(perguntaLinguagem === 1 ? `"Tudo bem! Aguardamos ansiosos pelo seu pedido!"` : `"That's okay! We're looking forward to your order!"`);
        pedidoFinalizado = true;
    } else {
        console.log(perguntaLinguagem === 1 ? `"Por favor! Responda apenas 'Sim' ou 'Não'!"` : `"Please answer only 'Yes' or 'No'!"`);
    }
}