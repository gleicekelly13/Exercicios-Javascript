/*
Pergunte a idade de uma pessoa e classifique-a em uma das seguintes categorias:
Criança (0-12 anos)
Adolescente (13-17 anos)
Adulto (18-59 anos)
Idoso (60 anos ou mais) Use switch/case para essa tarefa.
*/

let idade = 33;
let categoriaIdade;

switch(true) {  //Avalia expressões booleanas, permitindo que intervalos sejam usados
    case idade > 0 && idade <= 12:
        categoriaIdade = "Criança";
        break;
    case idade > 12 && idade <= 17:
        categoriaIdade = "Adolescente";
        break;
    case idade >= 18 && idade <= 59:
        categoriaIdade = "Adulto";
        break;
    case idade > 59:
        categoriaIdade =  "Idoso";
        break;
    default:
        categoriaIdade = "Categoria inexistente!";
        break;
}

console.log(`Qual a sua idade? ${idade}\n Sua categoria é: ${categoriaIdade}`);
