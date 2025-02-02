/*
Solicite ao usuário números até que ele digite 0. 
Ao final, exiba a soma de todos os números digitados (exceto o zero).
*/

import entradaDados from 'readline-sync';

//let num = parseInt(entradaDados.question('Digite um numero: '))

let num;
let total = 0

while(num !== 0) {
    num = parseInt(entradaDados.question('Digite um numero: '))
    total += num
}

console.log(total);
