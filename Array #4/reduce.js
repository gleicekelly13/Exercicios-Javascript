/*
Somando valores
Crie um array com os números de 1 a 10.
Use o método reduce para calcular a soma de todos os números do array.
Imprima o resultado.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somaNumeros = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(somaNumeros);


