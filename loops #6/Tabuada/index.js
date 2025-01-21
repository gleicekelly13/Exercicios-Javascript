/*
Solicite ao usuário um número (pode usar prompt) e exiba a tabuada desse número de 1 a 10 usando um loop.
*/

// Síncrona

import entradaDados from 'readline-sync';

let multiplicador =  entradaDados.question("Digite um numero para ver a tabuada: ");
multiplicador = Number(multiplicador);

for(let contador = 0; contador <= 10; contador++) {
    let resultado = contador * multiplicador;
    console.log(`${contador} x ${multiplicador} = ${resultado}`);
}



