/*
Use um loop para verificar se um número fornecido pelo usuário é primo. 
Um número primo só é divisível por 1 e por ele mesmo.
*/

import entradaDados from 'readline-sync';  // Importa a biblioteca readline-sync para entrada de dados pelo usuário

let isPrimo = true; // Variável que armazena se o número é primo ou não, inicialmente assumimos que é primo

// Solicita ao usuário que insira um número e converte a entrada para um número inteiro
let num = parseInt(entradaDados.question('Digite um numero primo: '));

/*
Verifica primeiro se o número é menor ou igual a 1, pois números menores que 2 não são primos.
*/
if(num <= 1) {
    console.log(`${num} não é um número primo!`) 

} else if (num === 2) {  // O número 2 é um caso especial, pois é o único número primo par.
    console.log(`${num} é um numero primo? ${isPrimo}`);

} else {
    /*
    Para verificar se um número é primo, verificamos se ele é divisível por algum número entre 2 e a raiz quadrada de `num`.
    Se encontrarmos um divisor dentro desse intervalo, sabemos que `num` não é primo e podemos interromper o loop com `break`.
    */
    for(let i = 2; i <= Math.sqrt(num); i++) {  
        if(num % i === 0) {  // Se `num` for divisível por `i`, ele não é primo
            isPrimo = false;
            break;  // Sai do loop imediatamente, pois já sabemos que o número não é primo
        } 
    }

    console.log(`${num} é um numero primo? ${isPrimo}`);
}


//A função Math.sqrt() em JavaScript é usada para calcular a raiz quadrada de um número
