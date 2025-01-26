/*
Um número perfeito é aquele cuja soma dos seus divisores (excluindo ele mesmo) é igual ao próprio número.
Exemplo: 6 → divisores são 1, 2, 3 → 1 + 2 + 3 = 6.
Escreva um programa que identifique se um número é perfeito.

Guia para resolver o problema:
1 - Solicita um número ao usuário;
2 - Encontra os divisores próprios do número;
3 - Soma os divisores;
4 - Compara a soma com o número;
5 - Exibe o resultado
*/

import entradaDados from 'readline-sync';

let num = parseInt(entradaDados.question('Digite um numero: ')); // 1

let soma = 0;  //A variável soma precisa ser inicializada com algum valor

// 2 -  O loop verifica todos os números menores que o número fornecido
for(let i = 1; i <= num - 1; i++) {  //`num - 1` exclui o próprio número, porque ele não é um divisor próprio
    if(num % i === 0) {  //Verifica se o número é divisível por esses valores
        soma += i  // 3 - Sempre que encontrar um divisor, adiciona-o a uma variável que armazene a soma.
    } 
}
 if(soma === num) {  // 4 - Se a soma dos divisores for igual ao número...
    console.log(`${num} é um número perfeito!`) // 5 ...exibe que o número é perfeito
 } else {
    console.log(`${num} não é um número perfeito!`)
 }
