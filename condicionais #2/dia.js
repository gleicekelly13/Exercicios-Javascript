/*
Pergunte um número de 1 a 7, que representa o dia da semana, 
e exiba o nome do dia correspondente usando switch/case.
*/

let dia = 7;
dia_nome = "";

switch(dia) {
    case 1:
        dia_nome = "Segunda-feira";
        break;
    case 2:
        dia_nome = "Terça-feira";
        break;
    case 3:
        dia_nome = "Quarta-feira";
        break;
    case 4:
        dia_nome = "Quinta-feira";
        break;
    case 5:
        dia_nome = "Sexta-feira";
        break;
    case 6:
        dia_nome = "Sábado";
        break;
    case 7:
        dia_nome = "Domingo";
        break;
    default:
        dia_nome = "Dia inexistente!"
}

console.log(`Qual é o número? ${dia}\n Dia ${dia} corresponde a ${dia_nome}`)
