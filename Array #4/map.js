/*
Crie um array com os números de 1 a 5.
Multiplique cada número por 2 usando o método map e imprima o novo array.
Crie outro array em que cada número seja elevado ao quadrado.
*/

let numeros = [1, 2, 3, 4, 5];

// Cria um novo array com cada número multiplicado por 2
let multiplicaNumeros = numeros.map(numero => numero * 2);

console.log(multiplicaNumeros)

console.log("---------------------------------")

// Cria outro array com cada número elevado ao quadrado
let numerosQuadrado = numeros.map(numero => numero ** 2);

console.log(numerosQuadrado);
