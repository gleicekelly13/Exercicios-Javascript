/*
Crie um array de números e use o forEach para multiplicar cada número por 2 
e armazenar o resultado em um novo array
*/

let numerosMultiplicados = [];

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
    numerosMultiplicados.push(numero * 2);
})

console.log(numerosMultiplicados);
