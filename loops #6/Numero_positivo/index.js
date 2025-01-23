/*
Peça ao usuário para digitar um número positivo. 
Enquanto ele não digitar corretamente, repita a solicitação utilizando um loop while.
*/

import entradaDados from 'readline-sync';

let num = parseInt(entradaDados.question('Digite um numero positivo: '));

while(num < 0) {
    console.log(num = parseInt(entradaDados.question('Digite um numero positivo: ')))
}
