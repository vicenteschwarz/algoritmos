const prompt = require("prompt-sync")()
const selection = prompt("qual fruta desejas meu jovem gafanhoto? " )
switch (selection) {
  case 'laranjinhas':
    console.log('laranjinhas são 1.29 R$ a unidade.');
    break;
  case 'mangazinhas':
  case 'mamaozinhos':
    console.log('Mangazinhas e mamaozinhos são 2.79 R$ a unidade.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Desculpas, nós não temos mais ${expr}.`);
    case 'bergazinhas' :
    console.log('bergazinhas são 2.00 R$ a unidade.');
}
