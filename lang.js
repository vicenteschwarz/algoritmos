const prompt = require("prompt-sync")()
console.log("1 - Português")
console.log("2 - Inglês")
console.log("3 - Espanhol")
console.log("4 - Francês")
console.log("5- Japonês")
const lan = parseInt (prompt("Selecione o idioma desejado "))
switch(lan)
{
    case 1 :
    console.log("Idioma configurado para Português.")
        break;
        case 2:
            console.log("Language set to English.")
                break;
                case 3:
                    console.log("Idioma configurado a Español.")
                        break;
                        case 4:
                            console.log("Langue définie sur le Français.")
                                break;
                                case 5:
                                    console.log("やあ、興味津々.")
                                        break;
                                        default:
                                            console.log("Idioma não suportado.")



}
