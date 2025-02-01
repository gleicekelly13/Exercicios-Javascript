/*
Peça ao usuário um número inteiro e conte quantos dígitos ele tem usando um loop.
*/

import entradaDados from 'readline-sync';

let num = parseInt(entradaDados.question('Digite um numero inteiro: '));

let contador = 0;

/*while(num >= 1) {
    num /= 10;
    contador++;
    
}
console.log(contador);*/

//FORMA ALTERNATIVA
/*while(num >= 1) {
    num = Math.floor(num / 10);
    contador++;
}
console.log(contador); */

//FOR
for(let i = num; i >= 1; i = Math.floor(i / 10)) {
    contador++;
} 
console.log(contador)

