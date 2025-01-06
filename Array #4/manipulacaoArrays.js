/*
Crie um array com os números de 1 a 10.
Adicione o número 11 no final do array.
Remova o primeiro número do array.
Inverta a ordem dos elementos do array.
Imprima o array atualizado.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.push(11); // Adiciona o número 11 no final do array

numeros.shift(1)  // Remove o primeiro número do array

numeros.reverse();  // Inverte a ordem dos elementos do array

console.log(numeros);  // Imprime o array atualizado
